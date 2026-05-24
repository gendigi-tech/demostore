// Hero V7 — Cobalt × Fluid Editorial
// V1 palette + image-overlay hero card (painterly gradient background +
// floating sheet papers) + stats row underneath, à la "Fluid Asset Streams".

function HeroV7() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const stats = [
    { value: "9", label: "sheets được tuyển", suffix: "" },
    { value: "2.4K", label: "người dùng đang dùng", suffix: "+" },
    { value: "4.9", label: "đánh giá trung bình", suffix: "★" },
    { value: "<2", label: "phút để bắt đầu", suffix: "p" },
  ];

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
        ctaText="Đăng ký"
      />

      <div
        style={{
          margin: "8px 28px 28px",
          height: "calc(100% - 110px)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* === HERO IMAGE CARD === */}
        <div
          style={{
            flex: "1 1 auto",
            position: "relative",
            borderRadius: 26,
            overflow: "hidden",
            // Painterly multi-stop gradient base — fluid editorial vibe
            background: `
              radial-gradient(ellipse 70% 60% at 80% 20%, rgba(255,200,170,0.55), transparent 60%),
              radial-gradient(ellipse 50% 50% at 20% 30%, rgba(168,194,255,0.65), transparent 60%),
              radial-gradient(ellipse 60% 70% at 50% 90%, rgba(42,91,255,0.50), transparent 60%),
              radial-gradient(ellipse 50% 50% at 90% 80%, rgba(255,235,200,0.55), transparent 60%),
              linear-gradient(180deg, #C9D6F2 0%, #A8C2FF 45%, #6B8FE8 100%)
            `,
            boxShadow:
              "0 30px 60px rgba(14,18,38,0.18), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {/* Painterly noise overlay (soft grain) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px), radial-gradient(rgba(14,18,38,0.10) 1px, transparent 1px)",
              backgroundSize: "8px 8px, 14px 14px",
              backgroundPosition: "0 0, 5px 5px",
              mixBlendMode: "overlay",
              opacity: 0.5,
            }}
          />

          {/* Soft cloud blobs to add depth */}
          <div
            style={{
              position: "absolute",
              top: "-10%",
              left: "10%",
              width: 420,
              height: 280,
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.55), transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "5%",
              width: 480,
              height: 320,
              background:
                "radial-gradient(ellipse, rgba(42,91,255,0.50), transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* Floating sheet papers — abstract objects like the stones/sofa */}
          {/* Left stack: a tilted spreadsheet paper */}
          <div
            style={{
              position: "absolute",
              left: 60,
              bottom: 36,
              width: 220,
              background: "rgba(255,255,255,0.92)",
              borderRadius: 10,
              padding: "12px 14px",
              transform: "rotate(-8deg)",
              boxShadow:
                "0 18px 40px rgba(14,18,38,0.20), 0 2px 4px rgba(14,18,38,0.10)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                color: ink,
                marginBottom: 6,
              }}
            >
              Cashflow · T7
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 3,
                height: 50,
              }}
            >
              {[35, 50, 28, 62, 44, 70, 88].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background:
                      i === 6 ? accent : `rgba(42,91,255,${0.25 + i * 0.05})`,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right floating object: a habit sphere */}
          <div
            style={{
              position: "absolute",
              right: 90,
              bottom: 50,
              width: 110,
              height: 110,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 30%, #ffffff 0%, #6B8FE8 35%, #1B43D9 100%)",
              boxShadow:
                "0 20px 40px rgba(27,67,217,0.40), inset -10px -16px 30px rgba(0,0,0,0.25), inset 10px 14px 24px rgba(255,255,255,0.4)",
              transform: "rotate(8deg)",
            }}
          />

          {/* Smaller floating paper top-right */}
          <div
            style={{
              position: "absolute",
              right: 60,
              top: 80,
              width: 156,
              background: "rgba(255,255,255,0.92)",
              borderRadius: 10,
              padding: "10px 12px",
              transform: "rotate(6deg)",
              boxShadow:
                "0 14px 30px rgba(14,18,38,0.16), 0 2px 4px rgba(14,18,38,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 6 }}>
              Habit · streak 12
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 3,
              }}
            >
              {[1, 1, 1, 0, 1, 1, 1].map((on, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: "1",
                    borderRadius: 2,
                    background: on ? accent : "rgba(42,91,255,0.18)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sticky note for personality */}
          <StickyNote
            bg="#FFF188"
            rotate={-7}
            width={140}
            height={130}
            pin
            pinColor="#E23B3B"
            style={{
              position: "absolute",
              left: 80,
              top: 60,
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: 18,
                lineHeight: 1.2,
                color: "#3a2f0a",
                fontWeight: 500,
              }}
            >
              Mọi sheet đã được tối ưu rồi ✦
            </div>
          </StickyNote>

          {/* === Text overlay === */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              padding: "44px 56px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 13px 5px 7px",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: 999,
                fontSize: 11.5,
                fontWeight: 600,
                color: ink,
                marginBottom: 22,
                boxShadow: "0 6px 16px rgba(14,18,38,0.10)",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 5,
                  background: accent,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24">
                  <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff"/>
                  <path d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </span>
              store.bestlist.ai · 9 sheets · v2025
            </div>

            <h1
              style={{
                fontSize: 76,
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.0,
                margin: 0,
                color: "#fff",
                textShadow: "0 4px 30px rgba(14,18,38,0.20)",
              }}
            >
              Ngừng thử nghiệm.
            </h1>
            <h1
              style={{
                fontSize: 76,
                fontWeight: 500,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                margin: "4px 0 0",
                color: "rgba(255,255,255,0.85)",
                textShadow: "0 4px 30px rgba(14,18,38,0.20)",
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
                  color: "#fff",
                  fontSize: 86,
                  position: "relative",
                  paddingRight: 6,
                }}
              >
                tối ưu
                <HandUnderline color="#fff" strokeWidth={6}/>
              </span>
              .
            </h1>

            <p
              style={{
                fontSize: 15.5,
                color: "rgba(255,255,255,0.92)",
                marginTop: 26,
                maxWidth: 480,
                lineHeight: 1.5,
                textShadow: "0 2px 12px rgba(14,18,38,0.20)",
              }}
            >
              Sheet đã được tối ưu sẵn cho tài chính, sức khỏe và mối quan hệ —
              bạn chỉ việc dùng và sống tốt hơn.
            </p>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <a
                href="#"
                style={{
                  background: "#fff",
                  color: ink,
                  padding: "14px 28px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  boxShadow:
                    "0 14px 28px rgba(14,18,38,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "transform .18s ease, box-shadow .18s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Khám phá Sheets
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#"
                style={{
                  color: "#fff",
                  fontSize: 13.5,
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: "1.5px solid rgba(255,255,255,0.55)",
                  paddingBottom: 2,
                  transition: "border-color .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)")}
              >
                Xem demo 90s ↗
              </a>
            </div>
          </div>
        </div>

        {/* === STATS STRIP === */}
        <div
          style={{
            flex: "0 0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            padding: "0 16px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "10px 16px",
                borderLeft:
                  i === 0 ? "none" : "1px solid rgba(14,18,38,0.10)",
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: ink,
                  lineHeight: 1.05,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.value}
                <span style={{ color: accent }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: muted,
                  marginTop: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.HeroV7 = HeroV7;
