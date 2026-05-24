// Hero V3 — Ink + Apricot, asymmetric / editorial layout
function HeroV3() {
  const accent = "#0E1226";         // deep ink
  const accentSoft = "#1f2547";
  const apricot = "#FF7A4D";        // primary highlight
  const apricotSoft = "#FFE7DC";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.6)";
  const bg = "#FAF6F0";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: bg,
        fontFamily:
          "'Geist', 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
        color: ink,
        overflow: "hidden",
      }}
    >
      <NavBar
        brand="store.bestlist.ai"
        accent={apricot}
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
          position: "relative",
          overflow: "hidden",
          borderRadius: 26,
          border: "1px solid rgba(14,18,38,0.06)",
          background: `linear-gradient(135deg, #FFF6EE 0%, ${apricotSoft} 100%)`,
        }}
      >
        <DotPattern color="rgba(14,18,38,0.14)" size={24} dot={1.2} />

        {/* Vertical divider, hand-drawn */}
        <svg
          width="3"
          height="80%"
          viewBox="0 0 3 600"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            left: "52%",
            top: "10%",
            opacity: 0.18,
          }}
        >
          <path
            d="M1.5 0 C 2.5 100, 0.5 200, 2 300 C 1 400, 2.5 500, 1.5 600"
            stroke={ink}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="2 6"
          />
        </svg>

        {/* LEFT SIDE — text block */}
        <div
          style={{
            position: "absolute",
            left: 72,
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: 600,
          }}
        >
          {/* Eyebrow tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px 5px 6px",
              background: "#fff",
              border: "1px solid rgba(14,18,38,0.08)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              color: ink,
              marginBottom: 26,
              boxShadow: "0 4px 12px rgba(14,18,38,0.05)",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: apricot,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff"/>
                <path d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16" stroke={apricot} strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </span>
            store.bestlist.ai <span style={{ color: muted }}>· Sheets thật, không demo</span>
          </div>

          <h1
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.96,
              margin: 0,
              color: ink,
            }}
          >
            Ngừng <br />
            thử nghiệm.
          </h1>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              margin: "6px 0 0",
              color: muted,
              position: "relative",
              display: "inline-block",
            }}
          >
            Bắt đầu{" "}
            <span style={{ position: "relative", color: ink, fontWeight: 600 }}>
              tối ưu
              <HandUnderline color={apricot} strokeWidth={6}/>
            </span>
            .
          </h1>

          <p
            style={{
              fontSize: 17,
              color: muted,
              marginTop: 32,
              maxWidth: 460,
              lineHeight: 1.5,
            }}
          >
            Bộ sưu tập sheet đã được tối ưu cho tài chính, sức khỏe và mối quan hệ — sống có hệ thống mà không cần lập trình.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 32,
            }}
          >
            <a
              href="#"
              style={{
                background: ink,
                color: "#fff",
                padding: "16px 30px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "-0.01em",
                boxShadow:
                  "0 14px 28px rgba(14,18,38,0.30), inset 0 1px 0 rgba(255,255,255,0.12)",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "transform .18s ease, box-shadow .18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 36px rgba(14,18,38,0.36), inset 0 1px 0 rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 14px 28px rgba(14,18,38,0.30), inset 0 1px 0 rgba(255,255,255,0.12)";
              }}
            >
              Khám phá Sheets
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              style={{
                color: ink,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                paddingBottom: 2,
                borderBottom: "1.5px solid rgba(14,18,38,0.25)",
                transition: "border-color .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = ink)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(14,18,38,0.25)")}
            >
              Xem bundle 5 sheets ↗
            </a>
          </div>

          {/* Tiny social proof */}
          <div
            style={{
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13,
              color: muted,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#FFB088", "#A5C8FF", "#C7B0FF", "#FFD584"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid #fff",
                    marginLeft: i === 0 ? 0 : -8,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                  }}
                />
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 600, color: ink }}>2.400+ người dùng</div>
              <div style={{ fontSize: 11 }}>đã thay đổi cách quản lý cuộc sống</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — collage of floating cards */}
        <div
          style={{
            position: "absolute",
            right: 60,
            top: "50%",
            transform: "translateY(-50%)",
            width: 480,
            height: 520,
          }}
        >
          {/* Sticky note, upper area */}
          <StickyNote
            bg="#FFF188"
            rotate={-6}
            width={196}
            height={170}
            pin={true}
            pinColor="#E23B3B"
            style={{ position: "absolute", top: 0, left: 40, zIndex: 3 }}
          >
            <div
              style={{
                fontSize: 21,
                lineHeight: 1.2,
                color: "#3a2f0a",
                fontWeight: 500,
              }}
            >
              Tiết kiệm 6 triệu sau 90 ngày dùng sheet ✦
            </div>
          </StickyNote>

          {/* Main sheet preview */}
          <div
            style={{
              position: "absolute",
              top: 110,
              right: 0,
              width: 340,
              background: "#fff",
              borderRadius: 16,
              padding: "16px 18px 18px",
              boxShadow:
                "0 24px 50px rgba(14,18,38,0.12), 0 2px 4px rgba(14,18,38,0.05)",
              border: "1px solid rgba(14,18,38,0.06)",
              transform: "rotate(2deg)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Cashflow · Tháng 7
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: apricot,
                  fontWeight: 700,
                  padding: "3px 8px",
                  background: apricotSoft,
                  borderRadius: 999,
                }}
              >
                ↑ 24%
              </div>
            </div>

            {/* Mini chart */}
            <svg viewBox="0 0 320 90" style={{ width: "100%", height: 90 }}>
              <defs>
                <linearGradient id="apgrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={apricot} stopOpacity="0.32"/>
                  <stop offset="100%" stopColor={apricot} stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M0 70 C 30 60, 50 50, 80 55 S 130 30, 160 40 S 220 20, 260 25 S 310 10, 320 18 L 320 90 L 0 90 Z"
                fill="url(#apgrad)"
              />
              <path
                d="M0 70 C 30 60, 50 50, 80 55 S 130 30, 160 40 S 220 20, 260 25 S 310 10, 320 18"
                stroke={apricot}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {[
                [0, 70], [80, 55], [160, 40], [260, 25], [320, 18],
              ].map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#fff"
                  stroke={apricot}
                  strokeWidth="2"
                />
              ))}
            </svg>

            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              {["Thu nhập", "Chi tiêu", "Tiết kiệm"].map((l, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    background: "#F6F5F0",
                    borderRadius: 8,
                    fontSize: 10,
                    fontWeight: 500,
                  }}
                >
                  <div style={{ color: muted, marginBottom: 2 }}>{l}</div>
                  <div style={{ fontWeight: 700, color: ink, fontSize: 12 }}>
                    {["28.4M", "18.6M", "9.8M"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health / Habit tile */}
          <div
            style={{
              position: "absolute",
              top: 290,
              left: 10,
              width: 220,
              background: "#fff",
              borderRadius: 16,
              padding: "14px 16px",
              boxShadow:
                "0 18px 40px rgba(14,18,38,0.10), 0 2px 4px rgba(14,18,38,0.05)",
              border: "1px solid rgba(14,18,38,0.06)",
              transform: "rotate(-4deg)",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "#E8F5E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21 C -3 12, 3 3, 12 9 C 21 3, 27 12, 12 21 Z" fill="#2F8A57"/>
                </svg>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600 }}>Sleep tracker</div>
            </div>
            {/* week dots */}
            <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
              {[1,1,1,0,1,1,1].map((on, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 18,
                    borderRadius: 4,
                    background: on ? "#2F8A57" : "rgba(47,138,87,0.18)",
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: 10, color: muted }}>
              6/7 ngày · trung bình 7h12m
            </div>
          </div>

          {/* Automation chip */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 30,
              transform: "rotate(3deg)",
              zIndex: 2,
            }}
          >
            <AutomationStack
              title="Tự động đồng bộ"
              accent={apricot}
              style={{ width: 220 }}
            />
          </div>

          {/* Hand-drawn arrow pointing from text to main card */}
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            style={{
              position: "absolute",
              top: 30,
              left: -110,
              opacity: 0.7,
            }}
          >
            <path
              d="M5 10 C 30 8, 60 30, 95 36"
              fill="none"
              stroke={ink}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="2 4"
            />
            <path
              d="M86 30 L 97 37 L 88 44"
              fill="none"
              stroke={ink}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

window.HeroV3 = HeroV3;
