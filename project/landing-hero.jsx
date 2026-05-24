// Landing - HERO section (V7 framework: painterly card + stats strip)
function LandingHero() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const stats = [
    { value: "+1.200", label: "người dùng tin tưởng" },
    { value: "9", label: "templates được tuyển" },
    { value: "4.9", label: "đánh giá trung bình", suffix: "★" },
    { value: "90%", label: "thời gian tiết kiệm" },
  ];

  return (
    <section
      data-screen-label="01 Hero"
      style={{
        padding: "0 28px 32px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: `
            radial-gradient(ellipse 70% 60% at 80% 15%, rgba(255,200,170,0.55), transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 25%, rgba(168,194,255,0.65), transparent 60%),
            radial-gradient(ellipse 60% 70% at 50% 95%, rgba(42,91,255,0.55), transparent 60%),
            radial-gradient(ellipse 50% 50% at 90% 85%, rgba(255,235,200,0.55), transparent 60%),
            linear-gradient(180deg, #C9D6F2 0%, #A8C2FF 50%, #6B8FE8 100%)
          `,
          boxShadow:
            "0 30px 70px rgba(14,18,38,0.20), inset 0 1px 0 rgba(255,255,255,0.4)",
          minHeight: 680,
        }}
      >
        {/* grain */}
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
            pointerEvents: "none",
          }}
        />

        {/* Cloud blobs */}
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
            width: 520,
            height: 360,
            background:
              "radial-gradient(ellipse, rgba(42,91,255,0.55), transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Floating sheet papers */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 60,
            width: 240,
            background: "rgba(255,255,255,0.94)",
            borderRadius: 12,
            padding: "14px 16px",
            transform: "rotate(-8deg)",
            boxShadow:
              "0 20px 44px rgba(14,18,38,0.22), 0 2px 4px rgba(14,18,38,0.10)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: ink,
              marginBottom: 8,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Cashflow · T7
            <span style={{ color: "#10B981" }}>↑ 18%</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 3,
              height: 60,
            }}
          >
            {[35, 50, 28, 62, 44, 70, 58, 80, 66, 88].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background:
                    i === 9 ? accent : `rgba(42,91,255,${0.25 + (i % 5) * 0.08})`,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 100,
            bottom: 80,
            width: 130,
            height: 130,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, #ffffff 0%, #6B8FE8 35%, #1B43D9 100%)",
            boxShadow:
              "0 24px 50px rgba(27,67,217,0.40), inset -10px -16px 30px rgba(0,0,0,0.25), inset 10px 14px 24px rgba(255,255,255,0.4)",
            transform: "rotate(8deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 70,
            top: 100,
            width: 170,
            background: "rgba(255,255,255,0.94)",
            borderRadius: 10,
            padding: "10px 12px",
            transform: "rotate(6deg)",
            boxShadow:
              "0 14px 30px rgba(14,18,38,0.16), 0 2px 4px rgba(14,18,38,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ fontSize: 10.5, fontWeight: 700, marginBottom: 6 }}>
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

        <StickyNote
          bg="#FFF188"
          rotate={-7}
          width={160}
          height={140}
          pin
          pinColor="#E23B3B"
          style={{
            position: "absolute",
            left: 100,
            top: 80,
            zIndex: 2,
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
            Hệ thống đã có. Bạn chỉ việc dùng. ✦
          </div>
        </StickyNote>

        {/* === TEXT === */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            padding: "76px 56px 110px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
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
              marginBottom: 26,
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
                <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff" />
                <path
                  d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16"
                  stroke={accent}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            store.bestlist.ai · Tài chính · Sức khỏe · Mối quan hệ
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 700,
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
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: "4px 0 0",
              color: "rgba(255,255,255,0.88)",
              textShadow: "0 4px 30px rgba(14,18,38,0.20)",
              display: "inline-flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 18,
            }}
          >
            <span>Bắt đầu</span>
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#fff",
                fontSize: "clamp(56px, 8vw, 100px)",
                position: "relative",
                paddingRight: 6,
                lineHeight: 1,
              }}
            >
              tối ưu
              <HandUnderline color="#fff" strokeWidth={6} />
            </span>
            <span>.</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.94)",
              marginTop: 30,
              maxWidth: 620,
              lineHeight: 1.55,
              textShadow: "0 2px 12px rgba(14,18,38,0.20)",
            }}
          >
            Hệ thống Template &amp; Framework thiết kế sẵn giúp bạn kiểm soát 3 trụ
            cột lớn nhất của cuộc sống: Tài chính, Sức khỏe và Mối quan hệ. Tiết
            kiệm 90% thời gian thiết lập, tập trung 100% vào kết quả.
          </p>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href="#pillars"
              style={{
                background: "#fff",
                color: ink,
                padding: "16px 30px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14.5,
                boxShadow:
                  "0 14px 28px rgba(14,18,38,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform .18s ease, box-shadow .18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 36px rgba(14,18,38,0.24), inset 0 1px 0 rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 14px 28px rgba(14,18,38,0.18), inset 0 1px 0 rgba(255,255,255,0.6)";
              }}
            >
              Khám phá kho Template
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12 H 19 M 13 6 L 19 12 L 13 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#solution"
              style={{
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1.5px solid rgba(255,255,255,0.55)",
                paddingBottom: 2,
                transition: "border-color .15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.55)")
              }
            >
              Xem cách hoạt động ↗
            </a>
          </div>

          {/* social proof under CTA */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13,
              color: "rgba(255,255,255,0.95)",
            }}
          >
            <div style={{ display: "flex" }}>
              {["#FFB088", "#A5C8FF", "#C7B0FF", "#FFD584"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid #fff",
                    marginLeft: i === 0 ? 0 : -10,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
                  }}
                />
              ))}
            </div>
            Được tin dùng bởi +1.200 cá nhân và nhà quản lý hiệu suất cao.
          </div>
        </div>
      </div>

      {/* stats strip below the painterly card */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          padding: "32px 24px 0",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "8px 22px",
              borderLeft:
                i === 0 ? "none" : "1px solid rgba(14,18,38,0.10)",
            }}
          >
            <div
              style={{
                fontSize: 44,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: ink,
                lineHeight: 1.0,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.value}
              {s.suffix && <span style={{ color: accent }}>{s.suffix}</span>}
            </div>
            <div
              style={{
                fontSize: 11.5,
                color: muted,
                marginTop: 6,
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
    </section>
  );
}

window.LandingHero = LandingHero;
