// Landing - SOLUTION section (V6 framework: dashed selection + tilted dashboard)
function LandingSolution() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  return (
    <section
      id="solution"
      data-screen-label="03 Solution"
      style={{
        position: "relative",
        padding: "120px 28px 0",
        overflow: "hidden",
        background: "#FAFAF7",
      }}
    >
      {/* Dotted background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(14,18,38,0.10) 1.1px, transparent 1.1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 30%, #000 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 30%, #000 30%, transparent 95%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* small section eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 12px",
            background: "#fff",
            border: "1px solid rgba(14,18,38,0.08)",
            borderRadius: 999,
            fontSize: 11.5,
            fontWeight: 700,
            color: accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 22,
            boxShadow: "0 4px 12px rgba(14,18,38,0.05)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: accent,
            }}
          />
          Giải pháp tối ưu
        </div>

        <h2
          style={{
            fontSize: "clamp(40px, 5.8vw, 76px)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
            margin: 0,
            color: accent,
            display: "inline-flex",
            alignItems: "baseline",
            gap: 18,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>Chuyển từ</span>
          <span
            style={{
              position: "relative",
              display: "inline-block",
              color: "rgba(14,18,38,0.32)",
              padding: "2px 14px",
              border: "1.5px dashed rgba(14,18,38,0.35)",
              borderRadius: 4,
              fontStyle: "italic",
              fontFamily:
                "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
              fontWeight: 500,
            }}
          >
            cảm tính
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
            <span
              style={{
                position: "absolute",
                top: "100%",
                marginTop: 10,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(14,18,38,0.85)",
                color: "#fff",
                fontSize: 10.5,
                fontWeight: 600,
                fontFamily: "'Geist', sans-serif",
                fontStyle: "normal",
                padding: "3px 9px",
                borderRadius: 4,
                whiteSpace: "nowrap",
              }}
            >
              [legacy]
            </span>
          </span>
          <span>sang</span>
          <span style={{ color: ink }}>số liệu.</span>
        </h2>

        <p
          style={{
            fontSize: 17,
            color: muted,
            marginTop: 80,
            maxWidth: 620,
            margin: "80px auto 0",
            lineHeight: 1.55,
          }}
        >
          Chúng tôi không bán file mẫu — chúng tôi bán <strong style={{ color: ink, fontWeight: 600 }}>phím tắt</strong> để
          bạn đạt đến trạng thái tối ưu nhanh nhất. Mỗi template:
          <em style={{ color: ink, fontStyle: "normal", fontWeight: 600 }}> dễ vận hành · rõ chỉ số · ra kết quả ngay.</em>
        </p>

        {/* Pillars row of mini-features */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "⚙️", text: "Dễ vận hành" },
            { icon: "📊", text: "Rõ chỉ số" },
            { icon: "🎯", text: "Ra kết quả ngay" },
          ].map((f) => (
            <div
              key={f.text}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                background: "#fff",
                borderRadius: 999,
                border: "1px solid rgba(14,18,38,0.08)",
                fontSize: 13.5,
                fontWeight: 600,
                color: ink,
                boxShadow: "0 6px 14px rgba(14,18,38,0.05)",
              }}
            >
              <span style={{ fontSize: 14 }}>{f.icon}</span>
              {f.text}
            </div>
          ))}
        </div>
      </div>

      {/* TILTED DASHBOARD rising from below */}
      <div
        style={{
          maxWidth: 1180,
          margin: "70px auto -40px",
          height: 420,
          position: "relative",
          perspective: "1600px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 40% at 50% 70%, rgba(42,91,255,0.20), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "rotateX(34deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#fff",
              border: "1px solid rgba(14,18,38,0.08)",
              borderRadius: "22px 22px 8px 8px",
              boxShadow:
                "0 50px 100px rgba(14,18,38,0.22), 0 6px 18px rgba(14,18,38,0.10)",
              overflow: "hidden",
            }}
          >
            {/* top bar */}
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
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF6259" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
              </div>
              <div
                style={{
                  marginLeft: 14,
                  fontSize: 12,
                  fontWeight: 600,
                  color: ink,
                }}
              >
                Bestlist · Tổng quan hệ thống
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
                <span>Tháng 7 · 2025</span>
                <span style={{ color: accent, fontWeight: 600 }}>● Đang đồng bộ</span>
              </div>
            </div>

            <div style={{ display: "flex", height: "calc(100% - 47px)" }}>
              {/* sidebar */}
              <div
                style={{
                  width: 180,
                  borderRight: "1px solid rgba(14,18,38,0.06)",
                  padding: "16px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  background: "#FCFBF7",
                }}
              >
                {[
                  { l: "Tài chính", c: "#F97316", active: true },
                  { l: "Sức khỏe", c: "#FF6B9C" },
                  { l: "Mối quan hệ", c: "#8B5CF6" },
                  { l: "Habits", c: accent },
                  { l: "Goals 2025", c: "#10B981" },
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
                      fontSize: 11.5,
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
                  padding: 18,
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: 12,
                }}
              >
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
                      fontSize: 11,
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    Cashflow tháng 7
                    <span style={{ color: "#10B981" }}>↑ 18%</span>
                  </div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    +9.8M₫
                  </div>
                  <svg viewBox="0 0 320 90" style={{ width: "100%", height: 90, marginTop: "auto" }}>
                    <defs>
                      <linearGradient id="land-cobalt-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
                        <stop offset="100%" stopColor={accent} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 70 C 40 60, 70 30, 110 36 S 180 18, 220 26 S 290 6, 320 12 L 320 90 L 0 90 Z"
                      fill="url(#land-cobalt-area)"
                    />
                    <path
                      d="M0 70 C 40 60, 70 30, 110 36 S 180 18, 220 26 S 290 6, 320 12"
                      stroke={accent}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8 }}>
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

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8 }}>
                    Sắp gặp
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      { n: "Ba mẹ", c: "#8B5CF6" },
                      { n: "An", c: "#F97316" },
                    ].map((x, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11 }}>
                        <span
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: x.c,
                            color: "#fff",
                            fontSize: 9,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {x.n[0]}
                        </span>
                        {x.n}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 6 }}>
                    Tiết kiệm
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 36 }}>
                    {[35, 50, 28, 62, 44, 70, 88].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background: i === 6 ? "#10B981" : "rgba(16,185,129,0.4)",
                          borderRadius: 2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,18,38,0.06)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 6 }}>
                    Goal: 50M tiết kiệm
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
                  <div style={{ fontSize: 10, color: muted, marginTop: 6 }}>37M / 50M · 74%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.LandingSolution = LandingSolution;
