// Hero V4 — Cobalt × Curator
// V1 base palette + serif italic accent + floating product cards
// inspired by the "9 sản phẩm tinh gọn" collection grid.

function ProductCard({
  tag,
  tagBg = "#FFE2CB",
  tagFg = "#9A4B12",
  hotBadge = false,
  glow = "#A8C2FF",
  glow2 = "#2A5BFF",
  title,
  desc,
  price,
  oldPrice,
  free = false,
  rotate = 0,
  style = {},
}) {
  return (
    <div
      style={{
        width: 232,
        background: "#fff",
        borderRadius: 14,
        boxShadow:
          "0 18px 40px rgba(14,18,38,0.10), 0 2px 4px rgba(14,18,38,0.05)",
        border: "1px solid rgba(14,18,38,0.06)",
        transform: `rotate(${rotate}deg)`,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* preview area */}
      <div
        style={{
          height: 116,
          margin: 10,
          borderRadius: 10,
          background: `radial-gradient(120% 100% at 50% 100%, ${glow2} 0%, ${glow} 28%, #F1F4FB 65%, #fff 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            display: "flex",
            gap: 6,
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: 999,
              color: "#0E1226",
              border: "1px solid rgba(14,18,38,0.06)",
            }}
          >
            {tag}
          </span>
          {hotBadge && (
            <span
              style={{
                background: tagBg,
                color: tagFg,
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 9px",
                borderRadius: 999,
              }}
            >
              🔥 Hot
            </span>
          )}
        </div>
      </div>
      {/* text */}
      <div style={{ padding: "0 14px 14px" }}>
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 700,
            color: "#0E1226",
            letterSpacing: "-0.01em",
            marginBottom: 4,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(14,18,38,0.6)",
            lineHeight: 1.4,
            marginBottom: 12,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {free ? (
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0E1226",
                borderBottom: "1.5px solid #0E1226",
                paddingBottom: 1,
              }}
            >
              Miễn phí
            </span>
          ) : (
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#0E1226",
                }}
              >
                {price}
              </span>
              {oldPrice && (
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(14,18,38,0.4)",
                    textDecoration: "line-through",
                  }}
                >
                  {oldPrice}
                </span>
              )}
            </div>
          )}
          <button
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "#0E1226",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12 H 19 M 13 6 L 19 12 L 13 18"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroV4() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";
  const bgCard = "#F5F4EF";

  const tabs = ["Tất cả", "Miễn phí", "Premium", "Combo"];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#FAFAF7",
        fontFamily:
          "'Geist', 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
        color: ink,
        overflow: "hidden",
      }}
    >
      <NavBar
        brand="store.bestlist.ai"
        accent={accent}
        textColor={ink}
        mutedColor={muted}
        ctaBg={ink}
        ctaFg="#fff"
        ctaText="Dùng thử miễn phí"
      />

      <div
        style={{
          margin: "8px 28px 28px",
          height: "calc(100% - 110px)",
          background: bgCard,
          borderRadius: 26,
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(14,18,38,0.06)",
        }}
      >
        <DotPattern color="rgba(14,18,38,0.16)" size={22} dot={1.2} />

        {/* TOP-LEFT: floating product card #1 */}
        <ProductCard
          tag="Tài Chính"
          hotBadge
          tagBg="#FFE2CB"
          tagFg="#9A4B12"
          glow={accent + "55"}
          glow2={accent}
          title="Master Budget Tracker Pro"
          desc="Hệ thống ngân sách toàn diện với dự báo dòng tiền tự động và báo cáo hàng tháng."
          price="299.000₫"
          oldPrice="599.000₫"
          rotate={-4}
          style={{ position: "absolute", top: 50, left: 56, zIndex: 3 }}
        />

        {/* BOTTOM-LEFT: floating product card #2 (Miễn phí) */}
        <ProductCard
          tag="Miễn phí"
          glow="#BCEACB"
          glow2="#2F8A57"
          title="Chi Tiêu Cơ Bản Starter"
          desc="Template theo dõi chi tiêu đơn giản. 5 danh mục, cập nhật chỉ 2 phút mỗi ngày."
          free
          rotate={3}
          style={{
            position: "absolute",
            bottom: 60,
            left: 96,
            zIndex: 3,
          }}
        />

        {/* TOP-RIGHT: floating product card #3 */}
        <ProductCard
          tag="Combo 3-in-1"
          glow="#E1CFFA"
          glow2="#7C49E8"
          title="Trọn bộ Sức Khỏe"
          desc="Sleep · Habit · Workout. 3 sheet liên kết với dashboard tổng quan."
          price="449.000₫"
          oldPrice="699.000₫"
          rotate={5}
          style={{ position: "absolute", top: 60, right: 56, zIndex: 3 }}
        />

        {/* BOTTOM-RIGHT: small sticky note as personality cue */}
        <StickyNote
          bg="#FFF188"
          rotate={6}
          width={170}
          height={140}
          pin
          pinColor="#E23B3B"
          style={{
            position: "absolute",
            bottom: 70,
            right: 90,
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontSize: 19,
              lineHeight: 1.2,
              color: "#3a2f0a",
              fontWeight: 500,
            }}
          >
            "Bỏ qua phần thử nghiệm — vào việc luôn." ✦
          </div>
        </StickyNote>

        {/* CENTER content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          {/* Eyebrow with rule */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontSize: 12.5,
              fontWeight: 600,
              color: muted,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 28,
                height: 1.5,
                background: muted,
                display: "inline-block",
              }}
            />
            Bộ sưu tập · 9 sheets
            <span
              style={{
                width: 28,
                height: 1.5,
                background: muted,
                display: "inline-block",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: 80,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: 0,
              color: ink,
            }}
          >
            Ngừng thử nghiệm.
          </h1>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: "2px 0 0",
              color: ink,
              display: "inline-block",
              position: "relative",
            }}
          >
            Bắt đầu{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: accent,
                fontSize: 92,
                lineHeight: 0.9,
                position: "relative",
                paddingRight: 6,
              }}
            >
              tối ưu
              <HandUnderline color={accent} strokeWidth={5} />
            </span>
            .
          </h1>

          <p
            style={{
              fontSize: 16.5,
              color: muted,
              marginTop: 36,
              maxWidth: 480,
              lineHeight: 1.5,
            }}
          >
            9 sheet tuyển chọn cho tài chính, sức khỏe và mối quan hệ — đã được
            tinh gọn để dùng được ngay.
          </p>

          {/* Filter chips like in reference */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 26,
              padding: 4,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(14,18,38,0.06)",
              borderRadius: 999,
              backdropFilter: "blur(8px)",
            }}
          >
            {tabs.map((t, i) => (
              <button
                key={t}
                style={{
                  border: "none",
                  background: i === 0 ? accent : "transparent",
                  color: i === 0 ? "#fff" : ink,
                  fontWeight: 600,
                  fontSize: 12.5,
                  padding: "8px 16px",
                  borderRadius: 999,
                  cursor: "pointer",
                  transition: "background .15s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  if (i !== 0)
                    e.currentTarget.style.background = "rgba(14,18,38,0.06)";
                }}
                onMouseLeave={(e) => {
                  if (i !== 0)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <a
            href="#"
            style={{
              marginTop: 22,
              background: accent,
              color: "#fff",
              padding: "15px 30px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14.5,
              letterSpacing: "-0.01em",
              boxShadow:
                "0 14px 28px rgba(42,91,255,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform .18s ease, box-shadow .18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 18px 32px rgba(42,91,255,0.42), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 14px 28px rgba(42,91,255,0.32), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
          >
            Khám phá toàn bộ Sheets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12 H 19 M 13 6 L 19 12 L 13 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

window.HeroV4 = HeroV4;
