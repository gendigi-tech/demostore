// Shared primitives for store.bestlist.ai hero variations
// Lightweight hand-drawn touches mixed with a clean tech base.

// === Hand-drawn underline (wobbly SVG path under a word) =====================
function HandUnderline({ color = "#1f4dd8", width = 260, strokeWidth = 5 }) {
  return (
    <svg
      viewBox="0 0 260 22"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        left: "-4%",
        right: "-4%",
        bottom: -10,
        width: "108%",
        height: 22,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <path
        d="M3 13 C 40 6, 80 18, 130 11 S 220 6, 257 12"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

// === Hand-drawn arrow ========================================================
function HandArrow({ color = "#2b2b2b", style = {}, flip = false }) {
  return (
    <svg
      width="86"
      height="60"
      viewBox="0 0 86 60"
      style={{
        ...style,
        transform: `${style.transform || ""} ${flip ? "scaleX(-1)" : ""}`,
      }}
    >
      <path
        d="M4 8 C 22 4, 44 22, 50 38 C 53 46, 58 50, 70 51"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M62 45 L 72 51 L 64 57"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// === Subtle dotted background pattern ========================================
function DotPattern({ color = "rgba(40,40,60,0.18)", size = 22, dot = 1.4 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(${color} ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: "center",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
        pointerEvents: "none",
      }}
    />
  );
}

// === Sticky note (slightly rotated, handwritten body) ========================
function StickyNote({
  children,
  bg = "#fff2a8",
  rotate = -4,
  shadow = "0 12px 28px rgba(40,30,0,0.18), 0 2px 4px rgba(40,30,0,0.08)",
  width = 200,
  height = 220,
  pin = true,
  pinColor = "#e23b3b",
  style = {},
  className = "",
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        background: bg,
        transform: `rotate(${rotate}deg)`,
        boxShadow: shadow,
        padding: "22px 18px 18px",
        borderRadius: 2,
        // tiny imperfect corners
        clipPath:
          "polygon(0% 1%, 99% 0%, 100% 99%, 1% 100%)",
        fontFamily: "'Caveat', 'Patrick Hand', cursive",
        ...style,
      }}
    >
      {pin && (
        <div
          style={{
            position: "absolute",
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: pinColor,
            boxShadow:
              "inset -2px -2px 3px rgba(0,0,0,0.25), 0 2px 3px rgba(0,0,0,0.25)",
          }}
        />
      )}
      {children}
    </div>
  );
}

// === Small floating "chip" card (icon + label) ===============================
function FloatChip({ children, style = {}, rotate = 0 }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: "10px 12px",
        boxShadow:
          "0 10px 28px rgba(20,30,60,0.10), 0 1.5px 3px rgba(20,30,60,0.06)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// === Mini sheet preview card (header + rows w/ progress bars) ================
function MiniSheetCard({
  title = "Active Sheets",
  rows = [
    { icon: "💸", color: "#f97316", label: "Cashflow tháng 7", pct: 64 },
    { icon: "🌿", color: "#10b981", label: "Sleep tracker", pct: 82 },
  ],
  accent = "#1f4dd8",
  width = 320,
  style = {},
  rotate = 0,
}) {
  return (
    <div
      style={{
        width,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: 18,
        padding: "16px 18px 18px",
        boxShadow:
          "0 18px 40px rgba(20,30,60,0.10), 0 2px 4px rgba(20,30,60,0.05)",
        border: "1px solid rgba(20,30,60,0.06)",
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "#0f1729",
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: r.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                color: "#fff",
                flex: "0 0 24px",
              }}
            >
              {r.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#0f1729",
                  marginBottom: 4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: "rgba(20,30,60,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: `${r.pct}%`,
                    background: accent,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "rgba(20,30,60,0.55)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {r.pct}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// === Deadline-style task card (clock icon + small task block) ================
function DeadlineCard({
  title = "Sheets mới",
  task = "Habit Tracker 30 ngày",
  meta = "Cập nhật · v2.1",
  time = "08:00 — 09:30",
  accent = "#1f4dd8",
  rotate = 0,
  style = {},
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {/* timer icon */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1.5px solid rgba(20,30,60,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "0 0 28px",
          background: "#fff",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="13"
            r="8"
            stroke="#0f1729"
            strokeWidth="1.6"
          />
          <path d="M12 9 L 12 13 L 15 14.5" stroke="#0f1729" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M10 3 L 14 3" stroke="#0f1729" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: 13,
            color: "#0f1729",
            marginBottom: 8,
          }}
        >
          {title}
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(20,30,60,0.06)",
            borderRadius: 14,
            padding: "10px 12px",
            boxShadow:
              "0 14px 32px rgba(20,30,60,0.10), 0 1.5px 3px rgba(20,30,60,0.05)",
            width: 200,
          }}
        >
          <div
            style={{ fontSize: 12, fontWeight: 600, color: "#0f1729" }}
          >
            {task}
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(20,30,60,0.55)",
              marginTop: 2,
            }}
          >
            {meta}
          </div>
          <div
            style={{
              marginTop: 8,
              padding: "4px 8px",
              borderRadius: 6,
              background: `${accent}15`,
              color: accent,
              fontSize: 10,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke={accent} strokeWidth="2"/>
              <path d="M12 8 V 12 L 15 14" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

// === Integration / automation icons (mail, slack, calendar style) ============
function AutomationStack({
  title = "Tự động đồng bộ",
  rotate = 0,
  style = {},
  accent = "#1f4dd8",
}) {
  const Icon = ({ children, bg }) => (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        background: bg || "#fff",
        border: "1px solid rgba(20,30,60,0.06)",
        boxShadow: "0 4px 10px rgba(20,30,60,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(20,30,60,0.05)",
        borderRadius: 22,
        padding: "16px 18px",
        boxShadow:
          "0 18px 40px rgba(20,30,60,0.07), 0 1.5px 3px rgba(20,30,60,0.04)",
        transform: `rotate(${rotate}deg)`,
        width: 240,
        ...style,
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#0f1729",
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {/* Sheets */}
        <Icon>
          <svg width="22" height="22" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="#0f9d58"/>
            <path d="M7 9 H 17 M 7 12 H 17 M 7 15 H 17 M 10 7 V 17 M 14 7 V 17" stroke="#fff" strokeWidth="1.3"/>
          </svg>
        </Icon>
        {/* Notion */}
        <Icon>
          <svg width="22" height="22" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" stroke="#0f1729" strokeWidth="1.4"/>
            <path d="M8 17 V 7 L 16 17 V 7" stroke="#0f1729" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>
        </Icon>
        {/* Zapier */}
        <Icon bg={accent}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2 L 13.5 10.5 L 22 12 L 13.5 13.5 L 12 22 L 10.5 13.5 L 2 12 L 10.5 10.5 Z"/>
          </svg>
        </Icon>
      </div>
    </div>
  );
}

// === Nav bar (used by every variant; visual chrome only) =====================
function NavBar({
  brand = "store.bestlist.ai",
  accent = "#1f4dd8",
  textColor = "#1a1f2e",
  mutedColor = "rgba(26,31,46,0.65)",
  ctaText = "Khám phá Sheets",
  ctaBg = "#1a1f2e",
  ctaFg = "#fff",
}) {
  const items = ["Sheets", "Templates", "Bundles", "Khách hàng"];
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 36px",
        position: "relative",
        zIndex: 4,
      }}
    >
      {/* Brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: textColor,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          fontSize: 17,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: accent,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            position: "relative",
          }}
        >
          {/* small sheet glyph */}
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff"/>
            <path d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16 M 8 17 H 13" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        {brand}
      </div>
      {/* Nav */}
      <div
        style={{
          display: "flex",
          gap: 36,
          fontSize: 14,
          fontWeight: 500,
          color: mutedColor,
        }}
      >
        {items.map((x) => (
          <a
            key={x}
            href="#"
            style={{
              color: "inherit",
              textDecoration: "none",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
          >
            {x}
          </a>
        ))}
      </div>
      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        <a
          href="#"
          style={{
            color: mutedColor,
            textDecoration: "none",
            transition: "color .15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
        >
          Đăng nhập
        </a>
        <a
          href="#"
          style={{
            background: ctaBg,
            color: ctaFg,
            padding: "10px 18px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "transform .15s, box-shadow .15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 10px 22px rgba(0,0,0,0.16)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {ctaText}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

Object.assign(window, {
  HandUnderline,
  HandArrow,
  DotPattern,
  StickyNote,
  FloatChip,
  MiniSheetCard,
  DeadlineCard,
  AutomationStack,
  NavBar,
});
