"use client";

import { StarIcon, CCBLicenseIcon, IICRCCertifiedIcon, ExperienceIcon, FamilyOwnedIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import TrustBadge from "@/components/ui/TrustBadge";
import { BUSINESS } from "@/data/constants";

const REVIEWS = [
  {
    author: "Anne W.",
    rating: 5,
    text: "Rogelio (Roger) is the best mold remediation specialist I could hope for. He is kind, personable, honest, an excellent communicator, generous with his time and information and does a great job. He is less expensive than many of the other mold remediation companies because there is no middle man and because he understands that many people have financial constraints but want to keep themselves and their families healthy. I couldn\u2019t recommend him more highly.",
  },
  {
    author: "Dina G.",
    rating: 5,
    text: "Roger provided mold remediation services for me which included building an airtight containment and careful removal of contaminated surfaces. He was extremely responsive, professional and a pleasure to work with. Highly recommended.",
  },
  {
    author: "CD Olsen.",
    rating: 5,
    text: "Rogelio Caudillo is professional, thorough, extremely knowledgeable and dependable. At the conclusion of the work he provided me with a comprehensive report including pictures of before, during and after. He was a pleasure to work with and I highly recommend him and Zero Spore!",
  },
];

const TRUST_BADGES = [
  {
    icon: CCBLicenseIcon,
    label: `CCB #${BUSINESS.ccb}`,
    sublabel: "Licensed Contractor",
  },
  {
    icon: IICRCCertifiedIcon,
    label: "IICRC, AHERA, RRP",
    sublabel: "Certified Team",
  },
  {
    icon: ExperienceIcon,
    label: "10+ Years",
    sublabel: "Experience",
  },
  {
    icon: FamilyOwnedIcon,
    label: "Family Owned",
    sublabel: "Sheridan, Oregon",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          filled={i < rating}
          className={`h-4 w-4 ${i < rating ? "text-forest" : "text-stone"}`}
          size={16}
        />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <MoodSection mood="social">
      <FadeUp>
        <h2
          className="text-center font-serif"
          style={{
            fontSize: "var(--font-h2-size)",
            lineHeight: "var(--font-h2-lh)",
          }}
        >
          Trusted by Oregon homeowners
        </h2>
      </FadeUp>

      {/* Before/After + Reviews — 50/50 */}
<div className="mt-12 grid gap-(--grid-gap) lg:grid-cols-2 lg:items-stretch">
  {/* Before/After Slider */}
  <FadeUp className="flex flex-col">
    <BeforeAfterSlider
      className="min-h-[400px] flex-1"
      beforeSrc="https://images.unsplash.com/photo-1585128903994-9788298932a4?w=800&q=80"
      afterSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
      beforeAlt="Water damaged living room before restoration"
      afterAlt="Restored living room after Zero Spore treatment"
    />
    <p className="mt-3 text-center text-xs text-muted">
      Drag to compare &mdash; before &amp; after restoration
    </p>
  </FadeUp>

        {/* Review Cards */}
        <div className="flex flex-col gap-4">
          {REVIEWS.map((review, i) => (
            <FadeUp key={review.author} delay={i * 0.1}>
              <div className="rounded-(--radius-card) border border-stone bg-white p-(--card-padding)">
                <StarRating rating={review.rating} />
                <p className="mt-3 text-sm leading-relaxed text-carbon">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-muted">
                  {review.author}
                </p>
              </div>
            </FadeUp>
          ))}
          <FadeUp delay={0.3}>
            <p className="text-center text-xs text-muted">
              Reviews from Google &middot;{" "}
              <a
                href="https://www.google.com/maps/place/Zero+Spore+Restoration/@45.0960811,-123.4460466,28997m/data=!3m1!1e3!4m8!3m7!1s0xa2b29b894bf4172f:0x826abf49a50a1517!8m2!3d45.096028!4d-123.4047616!9m1!1b1!16s%2Fg%2F11xryqhnwq?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-opacity hover:opacity-70"
              >
                See all reviews
              </a>
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Trust Badges */}
      <FadeUp delay={0.2}>
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TRUST_BADGES.map((badge) => (
            <TrustBadge
              key={badge.label}
              icon={badge.icon}
              label={badge.label}
              sublabel={badge.sublabel}
            />
          ))}
        </div>
      </FadeUp>
    </MoodSection>
  );
}
