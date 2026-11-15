/**
 * "BAG/GET inc." footer wordmark. Rebuilt from the Framer component: the word "BAGGET" in
 * Plus Jakarta Sans ExtraBold, with a footer-coloured bar rotated -49° cutting through the
 * "GG" to form the slash. Drawn in a 606×158 viewBox so it scales crisply at any width.
 */
export function Wordmark({ className, cutColor = "#171717" }: { className?: string; cutColor?: string }) {
  return (
    <svg viewBox="0 0 606 158" className={className} role="img" aria-label="Bag/Get inc.">
      <text
        x="0"
        y="115"
        textLength="530"
        lengthAdjust="spacingAndGlyphs"
        fill="#e5e5e5"
        style={{ font: "800 128px var(--font-jakarta), sans-serif" }}
      >
        BAGGET
      </text>
      <rect x="202" y="63" width="160" height="23" fill={cutColor} transform="rotate(-57 282 80.5)" />
      <text
        x="530"
        y="125"
        textLength="58"
        lengthAdjust="spacingAndGlyphs"
        fill="#e5e5e5"
        style={{ font: "800 32px var(--font-jakarta), sans-serif" }}
      >
        inc.
      </text>
    </svg>
  )
}
