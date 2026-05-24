// Hero V6 — Cobalt × Terra
// V1 palette + Terra-style centered blue headline with dashed
// "design-tool selection" box around the accent word, top badge,
// and a big tilted dashboard rising from the bottom (instead of a globe).

function HeroV6() {
  const accent = "#2A5BFF";
  const accentDeep = "#1B43D9";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

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
        ctaBg={accent}
        ctaFg="#fff"
        ctaText="Sign Up"
      />

      {/* Subtle dotted background on the page itself (no enclosing card) */}
      <div
        style={{
          position: "absolute",
          inset: "92px 0 0",
          backgroundImage:
            "radial-gradient(rgba(14,18,38,0.08) 1.1px, transparent 1.1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 95%)",
          pointerEvents: "none",
        }}
      />

      {/* === HERO TEXT === */}
      <div
        style={{
          position: "relative",
          paddingTop: 38,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {/* Product Hunt badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px 6px 8px",
            background: "#fff",
            border: "1px solid #FFB088",
            borderRadius: 999,
            fontSize: 11.5,
            fontWeight: 700,
            color: "#C2410C",
            letterSpacing: "0.04em",
            marginBottom: 24,
            boxShadow: "0 4px 14px rgba(247,115,22,0.10)",
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "#FFF1E6",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            🏆
          </span>
          <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.1, alignItems: "flex-start" }}>
            <span style={{ fontSize: 9, color: "#F97316", letterSpacing: "0.08em" }}>PRODUCT HUNT</span>
            <span style={{ fontSize: 11.5 }}>#1 Sheet Store của tuần</span>
          </span>
        </div>

        <h1
          style={{
            fontSize: 86,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.0,
            margin: 0,
            color: accent,
          }}
        >
          Ngừng thử nghiệm.
        </h1>
        <h1
          style={{
            fontSize: 86,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
            margin: "4px 0 0",
            color: accent,
            display: "inline-flex",
            alignItems: "baseline",
            gap: 18,
          }}
        >
          Bắt đầu{" "}
          {/* "Design-tool selection box" around the accent word */}
          <span
            style={{
              position: "relative",
              display: "inline-block",
              color: "rgba(14,18,38,0.32)",
              padding: "2px 14px",
              border: "1.5px dashed rgba(14,18,38,0.35)",
              borderRadius: 4,
            }}
          >
            tối ưu
            {/* corner handles */}
            {[
              { top: -5, left: -5 },
              { top: -5, right: -5 },
              { bottom: -5, left: -5 },
              { bottom: -5, right: -5 },
            ].map((pos, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  ...pos,
                  width: 9,
                  height: 9,
                  background: "#fff",
                  border: `1.5px solid ${accent}`,
                  borderRadius: 1.5,
                }}
              />
            ))}
            {/* tooltip label */}
            <span
              style={{
                position: "absolute",
                top: "100%",
                marginTop: 10,
                left: "50%",
                transform: "translateX(-50%)",
                background: accent,
                color: "#fff",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "'Geist', sans-serif",
                padding: "3px 10px",
                borderRadius: 5,
                letterSpacing: "0",
                whiteSpace: "nowrap",
              }}
            >
              ✦ store.bestlist.ai
            </span>
          </span>
        </h1>

        <p
          style={{
            fontSize: 16.5,
            color: muted,
            marginTop: 56,
            maxWidth: 540,
            lineHeight: 1.55,
          }}
        >
          store.bestlist.ai là nơi bạn tìm thấy sheet đã được tối ưu sẵn cho
          tài chính, sức khỏe và mối quan hệ — chỉ cần tải về và dùng.
        </p>

        <a
          href="#"
          style={{
            marginTop: 26,
            background: accent,
            color: "#fff",
            padding: "15px 32px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14.5,
            letterSpacing: "-0.01em",
            boxShadow:
              "0 14px 28px rgba(42,91,255,0.34), inset 0 1px 0 rgba(255,255,255,0.2)",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "transform .18s ease, box-shadow .18s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 18px 32px rgba(42,91,255,0.44), inset 0 1px 0 rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 14px 28px rgba(42,91,255,0.34), inset 0 1px 0 rgba(255,255,255,0.2)";
          }}
        >
          Dùng thử miễn phí
        </a>
      </div>

      {/* === BIG TILTED DASHBOARD rising from the bottom === */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: -120,
          transform: "translateX(-50%)",
          width: 1080,
          height: 360,
          perspective: "1400px",
          zIndex: 1,
        }}
      >
        {/* radial glow behind */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(42,91,255,0.18), transparent 70%)",
            filter: "blur(20px)",
            transform: "translateY(40px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "rotateX(38deg) translateZ(0)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* DASHBOARD shell */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#fff",
              border: "1px solid rgba(14,18,38,0.08)",
              borderRadius: "22px 22px 8px 8px",
              boxShadow:
                "0 40px 90px rgba(14,18,38,0.22), 0 6px 18px rgba(14,18,38,0.10)",
              overflow: "hidden",
            }}
          >
            {/* Dashboard top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                borderBottom: "1px solid rgba(14,18,38,0.06)",
                background: "#FAFAF7",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF6259" }}/>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }}/>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }}/>
              </div>
              <div
                style={{
                  marginLeft: 14,
                  fontSize: 12,
                  fontWeight: 600,
                  color: ink,
                }}
              >
                Tổng quan · store.bestlist.ai
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  gap: 16,
                  fontSize: 11,
                  color: muted,
                }}
              >
                <span>Tháng 7</span>
                <span style={{ color: accent, fontWeight: 600 }}>● Đang đồng bộ</span>
              </div>
            </div>

            {/* Body: sidebar + main */}
            <div style={{ display: "flex", height: "calc(100% - 47px)" }}>
              {/* sidebar */}
              <div
                style={{
                  width: 160,
                  borderRight: "1px solid rgba(14,18,38,0.06)",
                  padding: "14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  background: "#FCFBF7",
                }}
              >
                {[
                  { l: "Tài chính", c: "#F97316", active: true },
                  { l: "Sức khỏe", c: "#10B981" },
                  { l: "Mối quan hệ", c: "#8B5CF6" },
                  { l: "Habits", c: "#2A5BFF" },
                  { l: "Goals 2025", c: "#FF6B9C" },
                ].map((it, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "7px 8px",
                      borderRadius: 6,
                      background: it.active ? "#EEF2FF" : "transparent",
                      fontSize: 11,
                      fontWeight: it.active ? 600 : 500,
                      color: it.active ? accent : muted,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        background: it.c,
                      }}
                    />
                    {it.l}
                  </div>
                ))}
              </div>

              {/* main grid */}
              <div
                style={{
                  flex: 1,
                  padding: 16,
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr",
                  gap: 12,
                }}
              >
                {/* big cashflow card */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "12px 14px",
                    gridRow: "span 2",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 10.5,
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    Cashflow tháng 7
                    <span style={{ color: "#10B981" }}>↑ 18%</span>
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    +9.8M₫
                  </div>
                  <svg viewBox="0 0 320 80" style={{ width: "100%", height: 80, marginTop: "auto" }}>
                    <defs>
                      <linearGradient id="cobalt-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={accent} stopOpacity="0.28"/>
                        <stop offset="100%" stopColor={accent} stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 60 C 40 50, 70 30, 110 36 S 180 20, 220 28 S 290 8, 320 14 L 320 80 L 0 80 Z"
                      fill="url(#cobalt-area)"
                    />
                    <path
                      d="M0 60 C 40 50, 70 30, 110 36 S 180 20, 220 28 S 290 8, 320 14"
                      stroke={accent}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* habit grid */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 10.5, fontWeight: 600, marginBottom: 8 }}>
                    Habit · streak 12
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: 3,
                    }}
                  >
                    {[1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1].map((on, i) => (
                      <div
                        key={i}
                        style={{
                          aspectRatio: "1",
                          borderRadius: 2,
                          background: on ? accent : "rgba(42,91,255,0.15)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* relationship card */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 10.5, fontWeight: 600, marginBottom: 8 }}>
                    Sắp gặp
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      { n: "Ba mẹ", c: "#8B5CF6" },
                      { n: "An", c: "#F97316" },
                    ].map((x, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10 }}>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", background: x.c, color: "#fff", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{x.n[0]}</span>
                        {x.n}
                      </div>
                    ))}
                  </div>
                </div>

                {/* finance bars */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 10.5, fontWeight: 600, marginBottom: 6 }}>
                    Tiết kiệm
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 30 }}>
                    {[35, 50, 28, 62, 44, 70, 88].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? "#10B981" : "rgba(16,185,129,0.4)", borderRadius: 2 }}/>
                    ))}
                  </div>
                </div>

                {/* goals card */}
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 10.5, fontWeight: 600, marginBottom: 6 }}>
                    Goal: tiết kiệm 50M
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "rgba(255,107,156,0.18)",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "74%",
                        background: "#FF6B9C",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 9.5, color: muted, marginTop: 6 }}>37M / 50M · 74%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.HeroV6 = HeroV6;
