interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_KEY: string;
  SUPABASE_BUCKET: string;
}

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
];

const MAX_FILES = 5;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_KEY || !env.SUPABASE_BUCKET) {
    console.error("Missing Supabase env vars");
    return Response.json(
      { ok: false, error: "server_misconfigured" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json<{
      files: { name: string; type: string }[];
    }>();

    if (!body.files || !Array.isArray(body.files) || body.files.length === 0) {
      return Response.json({ ok: false, error: "no_files" }, { status: 400 });
    }

    if (body.files.length > MAX_FILES) {
      return Response.json(
        { ok: false, error: "too_many_files" },
        { status: 400 },
      );
    }

    for (const file of body.files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return Response.json(
          { ok: false, error: "invalid_file_type", allowed: ALLOWED_TYPES },
          { status: 400 },
        );
      }
    }

    const timestamp = Date.now();
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");

    const uploads = [];

    for (const file of body.files) {
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const randomId = crypto.randomUUID().slice(0, 8);
      const path = `${year}/${month}/${timestamp}-${randomId}.${ext}`;

      const res = await fetch(
        `${env.SUPABASE_URL}/storage/v1/object/upload/sign/${env.SUPABASE_BUCKET}/${path}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ expiresIn: 300 }),
        },
      );

      if (!res.ok) {
        console.error("Supabase signed URL error:", await res.text());
        return Response.json(
          { ok: false, error: "upload_url_failed" },
          { status: 502 },
        );
      }

      const data = (await res.json()) as { url: string };

      uploads.push({
        signedUrl: `${env.SUPABASE_URL}/storage/v1${data.url}`,
        publicUrl: `${env.SUPABASE_URL}/storage/v1/object/public/${env.SUPABASE_BUCKET}/${path}`,
        path,
      });
    }

    return Response.json({ ok: true, uploads });
  } catch (err) {
    console.error("Upload URL error:", err);
    return Response.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
};
