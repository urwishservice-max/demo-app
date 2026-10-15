"use client";

/**
 * EarlyValueSection — AI Innovation page
 *
 * Design metaphor: a compliance file being assembled.
 * The 8 use cases arrive as index cards that stack and cover one another
 * as the reader scrolls, each pinned briefly before the next slides over it.
 * The quote sits in the margin and drifts slightly slower than the stack —
 * an annotation beside the document rather than a headline.
 *
 * Tokens used:
 *   --color-primary-dark / #080808        → body text, card top rule
 *   --color-background  / #F8F7F5         → page background, card face
 *   --color-surface     / #FFFFFF         → card top-sheet surface
 *   --color-border      / #E2E0DD         → hairline rules, card edges
 *   --color-cta         / #351779         → quote text
 *   --color-primary     / #FFC400         → quote border accent, tab mark
 *   --color-text-muted  / #6B6B6B         → secondary card text, ref numbers
 *   --font-sans / DM Sans                 → all text (inherits body)
 *
 * Motion approach:
 *   - Scroll-linked only (no entrance animations on the cards themselves)
 *   - One load animation: headline lines rise from a clip mask
 *   - framer-motion useScroll + useTransform (project already has it)
 *   - prefers-reduced-motion: static layout, no transforms
 *   - Sticky only on ≥ 1024 px; mobile stacks normally
 */

import { useRef, useId } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import "./early-value-section.css";


/* ─── Copy ──────────────────────────────────────────────────────────────── */

const ITEMS = [
  "AI-assisted policy, procedure, and regulatory-change drafting with mandatory human review.",
  "KYC and customer due diligence file preparation, document summarisation, and quality assurance support.",
  "Compliance issue and action-tracker consolidation.",
  "Regulatory reporting preparation and management-information generation.",
  "Internal knowledge assistants built on approved policies, procedures, and guidance.",
  "Risk assessment support, control mapping, and evidence-pack preparation.",
  "Role-specific training content for first-line and control functions.",
  "Vendor due diligence and AI third-party risk evaluation.",
] as const;

/* ─── Card geometry ─────────────────────────────────────────────────────── */

// How many viewport-heights of scroll runway each card occupies.
const CARD_SCROLL_FRACTION = 1 / ITEMS.length; // 8 cards share 100 % of scroll

/* ─── Individual file card ──────────────────────────────────────────────── */

interface FileCardProps {
  index: number;
  text: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}

function FileCard({ index, text, scrollYProgress, reduced }: FileCardProps) {
  const id = useId();
  const n = ITEMS.length; // 8
  const ref = index; // 0-based

  /**
   * Each card enters from below as its scroll window opens,
   * sits flush while its window is active, then stays covered
   * by subsequent cards. The depth offset gives the parallax feel:
   * earlier cards move upward slightly faster than later ones.
   */
  const start = ref * CARD_SCROLL_FRACTION;
  const peak = start + CARD_SCROLL_FRACTION * 0.35;

  // translateY: enters from +60 px → settles at 0
  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), peak],
    ["60px", "0px"]
  );

  // Scale: tiny bit smaller when "underneath" the pile to give depth
  const baseScale = 1 - ref * 0.012;
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), peak],
    [baseScale - 0.03, baseScale]
  );

  // Opacity: fades in as it enters
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.04), start + 0.05],
    [0, 1]
  );

  // z-index driven by card order — later cards sit above earlier ones
  const zIndex = ref + 1;

  // Tab color cycles through two tones to distinguish groups of 4
  const tabColor = ref < 4 ? "#E2E0DD" : "#080808";
  const tabTextColor = ref < 4 ? "#080808" : "#F8F7F5";

  const label = `Control ${String(ref + 1).padStart(2, "0")}`;

  if (reduced) {
    return (
      <article
        aria-labelledby={`${id}-title`}
        className="ai-file-card"
        style={{ zIndex }}
      >
        <CardBody id={id} index={ref} text={text} label={label} tabColor={tabColor} tabTextColor={tabTextColor} />
      </article>
    );
  }

  return (
    <motion.article
      aria-labelledby={`${id}-title`}
      className="ai-file-card"
      style={{ y, scale, opacity, zIndex, willChange: "transform, opacity" }}
    >
      <CardBody id={id} index={ref} text={text} label={label} tabColor={tabColor} tabTextColor={tabTextColor} />
    </motion.article>
  );
}

/* ─── Card body (shared between reduced and animated) ─────────────────── */

interface CardBodyProps {
  id: string;
  index: number;
  text: string;
  label: string;
  tabColor: string;
  tabTextColor: string;
}

function CardBody({ id, index, text, label, tabColor, tabTextColor }: CardBodyProps) {
  return (
    <div className="ai-file-card__inner">
      {/* Tab strip — like a physical file divider */}
      <div
        className="ai-file-card__tab"
        style={{ background: tabColor }}
      >
        <span
          className="ai-file-card__tab-text"
          style={{ color: tabTextColor }}
        >
          {label}
        </span>
      </div>

      {/* Card face */}
      <div className="ai-file-card__body">
        {/* Top hairline rule matching site's .sframe--rule-top */}
        <div className="ai-file-card__rule" />

        <p
          id={`${id}-title`}
          className="ai-file-card__text"
        >
          {text}
        </p>

        {/* Bottom reference — mirrors the site's existing reference-style numbering */}
        <p className="ai-file-card__ref">
          {String(index + 1).padStart(2, "0")}&thinsp;/&thinsp;08
        </p>
      </div>
    </div>
  );
}

/* ─── Margin quote ──────────────────────────────────────────────────────── */

interface MarginQuoteProps {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}

function MarginQuote({ scrollYProgress, reduced }: MarginQuoteProps) {
  // Gentle subtle drift in place that does not overlap the headline above
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-24px"]);

  if (reduced) {
    return <QuoteBody />;
  }

  return (
    <motion.div
      style={{ y, willChange: "transform" }}
      className="ai-file-quote"
    >
      <QuoteBody />
    </motion.div>
  );
}

function QuoteBody() {
  return (
    <div className="ai-file-quote__inner">
      {/* Vertical gold rule — site's existing border-l-2 border-[#FFC400] pattern */}
      <div className="ai-file-quote__rule" />
      <blockquote className="ai-file-quote__text">
        &#8220;From AI experimentation to governed, scalable
        capability.&#8221;
      </blockquote>
    </div>
  );
}

/* ─── Section header ────────────────────────────────────────────────────── */

function SectionHeader({ reduced }: { reduced: boolean }) {
  /**
   * One orchestrated moment: headline lines rise out of a mask on load.
   * Uses framer-motion's initial/animate (not scroll-linked).
   */
  const lineVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const lines = ["Where AI", "delivers", "early value"];

  if (reduced) {
    return (
      <h2 className="ai-file-heading">
        Where AI delivers early value
      </h2>
    );
  }

  return (
    <h2 className="ai-file-heading" aria-label="Where AI delivers early value">
      {lines.map((line, i) => (
        /* Clip wrapper — line rises out of this mask */
        <span key={line} className="ai-file-heading__clip">
          <motion.span
            className="ai-file-heading__line"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

/* ─── Root export ───────────────────────────────────────────────────────── */

export function EarlyValueSection() {
  const reduced = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll runway: the sticky column sits inside a tall container.
   * On desktop the stack occupies 500 vh so each of 8 cards gets ~62 vh.
   * On mobile we drop sticky entirely and render a plain flow list.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="ai-file-section sframe sframe--rule-top"
      aria-label="Where AI delivers early value"
    >
      {/* ── Mobile layout — no sticky, no parallax ────────────────────── */}
      <div className="ai-file-mobile">
        <div className="ai-file-mobile__header">
          <h2 className="ai-file-heading ai-file-heading--mobile">
            Where AI delivers early value
          </h2>
          <div className="ai-file-quote__inner ai-file-quote__inner--mobile">
            <div className="ai-file-quote__rule" />
            <blockquote className="ai-file-quote__text">
              &#8220;From AI experimentation to governed, scalable
              capability.&#8221;
            </blockquote>
          </div>
        </div>

        <ol className="ai-file-mobile__list">
          {ITEMS.map((item, i) => (
            <li key={i} className="ai-file-mobile__item">
              <span className="ai-file-mobile__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="ai-file-mobile__text">{item}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Desktop layout — sticky scroll stack ─────────────────────── */}
      <div
        ref={containerRef}
        className="ai-file-desktop"
        /* Each card gets ~62 vh of scroll runway + a little breathing room */
        style={{ height: `${ITEMS.length * 62 + 20}vh` }}
      >
        {/* Sticky viewport */}
        <div className="ai-file-sticky">
          {/* Left column: heading + quote */}
          <div className="ai-file-left">
            <SectionHeader reduced={reduced} />
            <MarginQuote scrollYProgress={scrollYProgress} reduced={reduced} />
          </div>

          {/* Right column: card stack */}
          <div className="ai-file-stack" role="list" aria-label="AI use cases">
            {ITEMS.map((item, i) => (
              <FileCard
                key={i}
                index={i}
                text={item}
                scrollYProgress={scrollYProgress}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Disclaimer — plain, no animation ─────────────────────────── */}
      <div className="ai-file-disclaimer">
        <p className="ai-file-disclaimer__text">
          <strong>Asheron provides advisory services only.</strong> We do not
          guarantee regulatory approval, compliance outcomes, or the performance
          of third-party AI systems. All AI-assisted outputs are designed to
          remain subject to human review and client accountability.
        </p>
      </div>
    </section>
  );
}
