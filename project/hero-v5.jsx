// Hero V5 — Cobalt × Vibrant Feature Trio
// V1's headline structure on top, then 3 colorful gradient cards
// (warm / coral / violet) representing the 3 sheet categories.

function CategoryCard({
  eyebrow,
  title,
  gradient,
  gridOverlay = false,
  rotate = 0,
  children,
  ringColor,
}) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        borderRadius: 22,
        padding: 14,
        border: "1px solid rgba(14,18,38,0.06)",
        boxShadow:
          "0 14px 32px rgba(14,18,38,0.08), 0 2px 4px rgba(14,18,38,0.04)",
        transform: `rotate(${rotate}deg)`,
        transition: "transform .25s ease, box-shadow .25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `translateY(-6px) rotate(${rotate}deg)`;
        e.currentTarget.style.boxShadow =
          "0 24px 48px rgba(14,18,38,0.14), 0 4px 6px rgba(14,18,38,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `translateY(0) rotate(${rotate}deg)`;
        e.currentTarget.style.boxShadow =
          "0 14px 32px rgba(14,18,38,0.08), 0 2px 4px rgba(14,18,38,0.04)";
      }}
    >
      {/* gradient hero area */}
      <div
        style={{
          position: "relative",
          height: 200,
          borderRadius: 14,
          background: gradient,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gridOverlay && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)",
            }}
          />
        )}
        {children}
      </div>
      <div style={{ padding: "16px 8px 8px" }}>
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: ringColor,
            marginBottom: 6,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#0E1226",
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

function HeroV5() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";
  const bgCard = "#F5F4EF";

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

        <div
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "44px 60px 44px",
          }}
        >
          {/* TOP — text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            {/* CORE eyebrow */}
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#F97316",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              ✦ Bộ sưu tập sheet
            </div>

            <h1
              style={{
                fontSize: 60,
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
                margin: 0,
                color: ink,
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <span>Ngừng thử nghiệm.</span>
              <span
                style={{
                  position: "relative",
                  color: ink,
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
                    fontSize: 70,
                    position: "relative",
                  }}
                >
                  tối ưu
                  <HandUnderline color={accent} strokeWidth={5}/>
                </span>
                .
              </span>
            </h1>

            <p
              style={{
                fontSize: 16,
                color: muted,
                marginTop: 22,
                maxWidth: 540,
                lineHeight: 1.5,
              }}
            >
              Mọi sheet bạn cần để sống có hệ thống — tài chính, sức khỏe và mối
              quan hệ — đã được tối ưu sẵn.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 22,
              }}
            >
              <a
                href="#"
                style={{
                  background: accent,
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  boxShadow:
                    "0 14px 28px rgba(42,91,255,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
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
                Khám phá Sheets
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#"
                style={{
                  color: ink,
                  fontSize: 13.5,
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: "1.5px solid rgba(14,18,38,0.25)",
                  paddingBottom: 2,
                  transition: "border-color .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = ink)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(14,18,38,0.25)")}
              >
                Xem demo 90 giây ↗
              </a>
            </div>
          </div>

          {/* BOTTOM — 3 vibrant feature cards */}
          <div
            style={{
              flex: 1,
              display: "flex",
              gap: 18,
              alignItems: "stretch",
              minHeight: 0,
            }}
          >
            {/* CARD 1 — Tài chính (warm yellow→amber) */}
            <CategoryCard
              eyebrow="03 sheets"
              title="Tài chính · không đoán mò"
              ringColor="#C2410C"
              rotate={-1}
              gradient="linear-gradient(150deg, #FFE6B3 0%, #FFB066 45%, #F97316 100%)"
            >
              {/* Mini cashflow sheet mockup */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "12px 14px",
                  boxShadow: "0 12px 22px rgba(160,80,10,0.25)",
                  width: 200,
                  transform: "rotate(-2deg)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#0E1226",
                    marginBottom: 6,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Tháng 7 <span style={{ color: "#F97316" }}>↑ 18%</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 4,
                    height: 50,
                  }}
                >
                  {[30, 45, 28, 60, 40, 70, 55, 78, 64, 88].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background:
                          i === 9
                            ? "#F97316"
                            : i % 2 === 0
                            ? "#FFB066"
                            : "#FFD8AC",
                        borderRadius: 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </CategoryCard>

            {/* CARD 2 — Sức khỏe (coral pink) */}
            <CategoryCard
              eyebrow="04 sheets"
              title="Sức khỏe · từng ngày một"
              ringColor="#BE185D"
              rotate={1}
              gradient="linear-gradient(160deg, #FFC2C2 0%, #FF8FAE 50%, #FF6B9C 100%)"
            >
              {/* Habit dots widget */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "14px 16px",
                  boxShadow: "0 12px 22px rgba(200,40,80,0.25)",
                  width: 210,
                  transform: "rotate(2deg)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#0E1226",
                    marginBottom: 10,
                  }}
                >
                  Habit · tuần này
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 4,
                  }}
                >
                  {[1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0].map((on, i) => (
                    <div
                      key={i}
                      style={{
                        aspectRatio: "1",
                        borderRadius: 4,
                        background: on
                          ? "#FF6B9C"
                          : "rgba(255,107,156,0.18)",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: 9.5,
                    color: "rgba(14,18,38,0.5)",
                    marginTop: 8,
                  }}
                >
                  17/21 thói quen · streak 12 ngày
                </div>
              </div>
            </CategoryCard>

            {/* CARD 3 — Mối quan hệ (violet with grid) */}
            <CategoryCard
              eyebrow="02 sheets"
              title="Mối quan hệ · không bỏ quên ai"
              ringColor="#6D28D9"
              rotate={-1}
              gridOverlay
              gradient="linear-gradient(150deg, #F5E6FF 0%, #C9A5FF 50%, #8B5CF6 100%)"
            >
              {/* Reminder card */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "12px 14px",
                  boxShadow: "0 12px 22px rgba(80,40,180,0.25)",
                  width: 210,
                  transform: "rotate(-1.5deg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {[
                  { name: "Ba mẹ", note: "Gọi chiều CN", color: "#8B5CF6" },
                  { name: "An — bạn thân", note: "Cafe T7", color: "#F97316" },
                  { name: "Linh", note: "Sinh nhật 12/8", color: "#10B981" },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: r.color,
                        flex: "0 0 22px",
                        fontSize: 10,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      {r.name[0]}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#0E1226",
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          fontSize: 9.5,
                          color: "rgba(14,18,38,0.55)",
                        }}
                      >
                        {r.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CategoryCard>
          </div>
        </div>
      </div>
    </div>
  );
}

window.HeroV5 = HeroV5;
