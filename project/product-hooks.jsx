// Product Detail — 3 HOOKS + CTA INTERRUPT
function ProductHooks() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const hooks = [
    {
      num: "01",
      label: "SỰ THẬT PHŨ PHÀNG",
      color: "#FF6B9C",
      colorSoft: "rgba(255,107,156,0.10)",
      headline: "Bạn không thiếu năng lực — bạn thiếu hệ thống đo lường.",
      body:
        "Bận rộn 12 tiếng mỗi ngày nhưng cuối tháng vẫn mơ hồ về kết quả? Nếu không thể số hóa, bạn không thể tối ưu.",
      visual: "chaos",
    },
    {
      num: "02",
      label: "CÁI BẪY CÔNG CỤ",
      color: "#F97316",
      colorSoft: "rgba(249,115,22,0.10)",
      headline: "Đừng tự mò mẫm — hãy mua lại thời gian.",
      body:
        "Đừng lãng phí hàng tuần trời tự dựng file Excel rườm rà rồi bỏ xó sau 3 ngày. Hệ thống này là phím tắt đã được chứng minh hiệu quả.",
      visual: "trap",
    },
    {
      num: "03",
      label: "CHI PHÍ CỦA SỰ TRÌ HOÃN",
      color: accent,
      colorSoft: "rgba(42,91,255,0.10)",
      headline: "Mỗi ngày trì hoãn = một ngày mất tiền.",
      body:
        "Mỗi ngày bạn sống trong sự hỗn loạn không có số liệu rõ ràng là một ngày bạn đang tự đánh mất tiền bạc, năng lượng và các cơ hội. Sự rõ ràng chính là sức mạnh.",
      visual: "cost",
    },
  ];

  function HookVisual({ kind, color }) {
    if (kind === "chaos") {
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            background: "#FAFAF7",
            borderRadius: 12,
            overflow: "hidden",
            padding: 14,
          }}
        >
          {/* Mess of scattered fake spreadsheet rows */}
          {[
            { x: -10, y: 8, rot: -8, w: 110 },
            { x: 100, y: 24, rot: 5, w: 90 },
            { x: -20, y: 60, rot: 4, w: 130 },
            { x: 110, y: 80, rot: -6, w: 100 },
            { x: 30, y: 110, rot: -3, w: 120 },
            { x: 140, y: 140, rot: 7, w: 80 },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: s.x,
                top: s.y,
                width: s.w,
                height: 26,
                background: "#fff",
                border: "1px solid rgba(14,18,38,0.08)",
                borderRadius: 4,
                transform: `rotate(${s.rot}deg)`,
                padding: "6px 8px",
                fontSize: 9,
                color: "rgba(14,18,38,0.5)",
                fontFamily: "monospace",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                boxShadow: "0 4px 10px rgba(14,18,38,0.06)",
              }}
            >
              chi tiêu cafe 35k...
            </div>
          ))}
          {/* big "?" overlay */}
          <div
            style={{
              position: "absolute",
              right: 14,
              top: 14,
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: color,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              boxShadow: `0 10px 20px ${color}55`,
            }}
          >
            ?
          </div>
        </div>
      );
    }
    if (kind === "trap") {
      // chart: time wasted bars
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            background: "#FAFAF7",
            borderRadius: 12,
            padding: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              fontSize: 11,
              fontWeight: 700,
              color: ink,
            }}
          >
            Thời gian tự dựng vs Hệ thống
            <span style={{ color, fontSize: 10 }}>tiết kiệm 32 giờ</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 24,
              height: 130,
              padding: "0 20px",
            }}
          >
            {/* DIY bar - massive */}
            <div
              style={{
                flex: 1,
                height: "100%",
                background: `linear-gradient(180deg, ${color} 0%, #C2410C 100%)`,
                borderRadius: "6px 6px 0 0",
                position: "relative",
                boxShadow: `0 10px 20px ${color}40`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -22,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: ink,
                  whiteSpace: "nowrap",
                }}
              >
                40 giờ
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -22,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: 10,
                  color: muted,
                  fontWeight: 600,
                }}
              >
                Tự dựng
              </div>
            </div>
            {/* System bar - tiny */}
            <div
              style={{
                flex: 1,
                height: "20%",
                background: `linear-gradient(180deg, ${accent} 0%, #1B43D9 100%)`,
                borderRadius: "6px 6px 0 0",
                position: "relative",
                boxShadow: `0 6px 14px rgba(42,91,255,0.32)`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -22,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: accent,
                  whiteSpace: "nowrap",
                }}
              >
                8 giờ
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -22,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: 10,
                  color: muted,
                  fontWeight: 600,
                }}
              >
                Hệ thống
              </div>
            </div>
          </div>
        </div>
      );
    }
    // cost
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 200,
          background: "#FAFAF7",
          borderRadius: 12,
          padding: 18,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: ink,
            marginBottom: 10,
          }}
        >
          Tiết kiệm 6 tháng — chậm 1 năm
        </div>
        <svg viewBox="0 0 320 140" style={{ width: "100%", height: 140 }}>
          {/* "if you start now" line */}
          <defs>
            <linearGradient id="cost-good" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 120 C 60 100, 120 60, 200 30 L 320 5 L 320 140 L 0 140 Z"
            fill="url(#cost-good)"
          />
          <path
            d="M0 120 C 60 100, 120 60, 200 30 L 320 5"
            stroke={accent}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* "if you wait" dashed */}
          <path
            d="M0 130 L 320 90"
            stroke="rgba(14,18,38,0.4)"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <text x="320" y="0" textAnchor="end" fontSize="9" fontWeight="700" fill={accent}>
            <tspan x="310" dy="14">+27M</tspan>
          </text>
          <text x="320" y="80" textAnchor="end" fontSize="9" fontWeight="700" fill="rgba(14,18,38,0.5)">
            <tspan x="310">trì hoãn: +9M</tspan>
          </text>
        </svg>
      </div>
    );
  }

  return (
    <section
      data-screen-label="03 Hooks"
      style={{
        padding: "100px 28px 60px",
        background: "#FAFAF7",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            ✦ Vì sao bạn cần hệ thống này ngay
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: 0,
              color: ink,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            3 sự thật mà 95% người{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: accent,
                fontWeight: 500,
              }}
            >
              chưa muốn thừa nhận.
            </span>
          </h2>
        </div>

        {/* Hooks stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {hooks.map((h, i) => (
            <div
              key={h.num}
              style={{
                background: "#fff",
                borderRadius: 22,
                border: "1px solid rgba(14,18,38,0.06)",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1.4fr 1fr" : "1fr 1.4fr",
                boxShadow:
                  "0 16px 36px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 48px rgba(14,18,38,0.10), 0 4px 6px rgba(14,18,38,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 16px 36px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)";
              }}
            >
              {/* content side */}
              <div
                style={{
                  padding: "44px 48px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  order: i % 2 === 0 ? 0 : 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      fontSize: 44,
                      fontWeight: 700,
                      color: h.color,
                      fontFamily:
                        "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                      fontStyle: "italic",
                      lineHeight: 1,
                    }}
                  >
                    {h.num}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      height: 1.5,
                      background: h.colorSoft,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: h.color,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {h.label}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.6vw, 32px)",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                    margin: 0,
                    color: ink,
                  }}
                >
                  {h.headline}
                </h3>
                <p
                  style={{
                    fontSize: 15.5,
                    color: muted,
                    marginTop: 14,
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  "{h.body}"
                </p>
              </div>
              {/* visual side */}
              <div
                style={{
                  padding: 24,
                  background: h.colorSoft,
                  display: "flex",
                  alignItems: "center",
                  order: i % 2 === 0 ? 1 : 0,
                }}
              >
                <HookVisual kind={h.visual} color={h.color} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA INTERRUPT — bold full-width banner between hooks and inside
function ProductCTAInterrupt() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  return (
    <section
      data-screen-label="04 CTA Interrupt"
      style={{
        padding: "32px 28px 60px",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          background: `linear-gradient(135deg, ${accent} 0%, #1B43D9 100%)`,
          borderRadius: 22,
          padding: "36px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 24px 50px rgba(42,91,255,0.32)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30%",
            right: "10%",
            width: 300,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.18), transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 60% 70% at 50% 50%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 70% at 50% 50%, #000 30%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, flex: 1, minWidth: 280 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 8,
            }}
          >
            CTA Interrupt · Đừng đợi
          </div>
          <h3
            style={{
              fontSize: "clamp(26px, 3.4vw, 38px)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: 0,
              color: "#fff",
            }}
          >
            Ngừng lãng phí hiệu suất của bạn —{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              ngay hôm nay.
            </span>
          </h3>
          <div
            style={{
              fontSize: 13.5,
              color: "rgba(255,255,255,0.75)",
              marginTop: 10,
            }}
          >
            Giá ưu đãi 299.000₫ chỉ áp dụng cho 100 lượt mua đầu — đã bán 73/100.
          </div>
          {/* progress bar */}
          <div
            style={{
              marginTop: 10,
              height: 5,
              background: "rgba(255,255,255,0.18)",
              borderRadius: 3,
              overflow: "hidden",
              maxWidth: 360,
            }}
          >
            <div
              style={{
                height: "100%",
                width: "73%",
                background: "#fff",
                borderRadius: 3,
              }}
            />
          </div>
        </div>
        <a
          href="#pricing"
          style={{
            position: "relative",
            zIndex: 2,
            background: "#fff",
            color: ink,
            padding: "18px 32px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 15,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            boxShadow:
              "0 14px 28px rgba(14,18,38,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
            transition: "transform .18s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          Mua ngay với ưu đãi
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
      </div>
    </section>
  );
}

Object.assign(window, { ProductHooks, ProductCTAInterrupt });
