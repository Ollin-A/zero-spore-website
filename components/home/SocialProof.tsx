"use client";

import { StarIcon, CCBLicenseIcon, IICRCCertifiedIcon, ExperienceIcon, FamilyOwnedIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import TrustBadge from "@/components/ui/TrustBadge";
import { BUSINESS } from "@/data/constants";

/* TODO: REPLACE — move to data/constants.ts when real reviews arrive */
const PLACEHOLDER_REVIEWS = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "They arrived within an hour of our call. Professional, thorough, and genuinely caring about our home. We couldn't have asked for a better team during such a stressful time.",
  },
  {
    author: "David R.",
    rating: 5,
    text: "After our basement flooded, Zero Spore handled everything. They explained every step, worked quickly, and left our home better than before. Highly recommend.",
  },
  {
    author: "Maria L.",
    rating: 5,
    text: "Found mold in our crawlspace and panicked. These folks calmed us down, contained the problem, and remediated it completely. True professionals.",
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
      <div className="mt-12 grid items-start gap-(--grid-gap) lg:grid-cols-2">
        {/* Before/After Slider */}
        <FadeUp>
          <BeforeAfterSlider
            /* TODO: REPLACE — Unsplash placeholders */
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
          {PLACEHOLDER_REVIEWS.map((review, i) => (
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
              {/* TODO: REPLACE — link to real Google reviews */}
              Reviews from Google &middot; See all reviews
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
