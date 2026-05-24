// Product Detail — HERO + STICKY PURCHASE BAR
// Product: Master Budget Tracker Pro (flagship Tài chính)

function StickyBuyBar() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        transform: show ? "translateY(0)" : "translateY(-100%)",
        transition: "transform .25s ease",
        background: "rgba(14,18,38,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "10px 28px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: `linear-gradient(140deg, ${accent}, #1B43D9)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            💸
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>
              Master Budget Tracker Pro
            </div>
            <div
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              ⭐ 4.9 · 1.247 lượt mua · Mua 1 lần dùng trọn đời
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "line-through",
              }}
            >
              599.000₫
            </span>
            <span style={{ fontSize: 18, fontWeight: 700 }}>299.000₫</span>
          </div>
          <a
            href="#pricing"
            style={{
              background: accent,
              color: "#fff",
              padding: "11px 22px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 13.5,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 8px 20px rgba(42,91,255,0.40)",
            }}
          >
            Mua ngay
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12 H 19 M 13 6 L 19 12 L 13 18"
                stroke="currentColor"
                strokeWidth="2.6"
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

function ProductHero() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  return (
    <section
      data-screen-label="01 Hero"
      style={{
        position: "relative",
        padding: "20px 28px 60px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr",
          gap: 60,
          alignItems: "center",
          minHeight: 640,
        }}
      >
        {/* LEFT — content */}
        <div>
          {/* breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12.5,
              color: muted,
              marginBottom: 22,
            }}
          >
            <a href="#" style={{ color: muted, textDecoration: "none" }}>
              Sheets
            </a>
            <span>·</span>
            <a href="#" style={{ color: muted, textDecoration: "none" }}>
              Tài chính
            </a>
            <span>·</span>
            <span style={{ color: ink, fontWeight: 600 }}>
              Master Budget Tracker Pro
            </span>
          </div>

          {/* category tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px",
              background: "#FFE2CB",
              border: "1px solid rgba(249,115,22,0.25)",
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#9A4B12",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            <span>💸</span>
            Tài chính · Hot · Bestseller
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 4.6vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: 0,
              color: ink,
            }}
          >
            Ngừng quản lý bằng cảm giác.
          </h1>
          <h1
            style={{
              fontSize: "clamp(38px, 4.6vw, 60px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              margin: "4px 0 0",
              color: muted,
              display: "inline-flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <span>Bắt đầu đo lường bằng</span>
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: accent,
                fontWeight: 500,
                fontSize: "clamp(44px, 5.2vw, 68px)",
                position: "relative",
                paddingRight: 4,
                lineHeight: 1,
              }}
            >
              số liệu.
              <HandUnderline color={accent} strokeWidth={5} />
            </span>
          </h1>

          <p
            style={{
              fontSize: 16.5,
              color: muted,
              marginTop: 28,
              lineHeight: 1.55,
              maxWidth: 540,
            }}
          >
            Hệ thống <strong style={{ color: ink, fontWeight: 600 }}>Master Budget Tracker Pro</strong> tinh gọn giúp bạn
            kiểm soát 100% Tài chính của mình — chỉ với{" "}
            <em
              style={{
                fontStyle: "normal",
                color: ink,
                fontWeight: 600,
                borderBottom: `2px solid ${accent}`,
                paddingBottom: 1,
              }}
            >
              10 phút mỗi tuần.
            </em>
          </p>

          {/* feature bullets */}
          <ul
            style={{
              margin: "28px 0 0",
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              "Dashboard 1-page · nhìn 3 giây nắm hết chỉ số",
              "Dự báo dòng tiền tự động cho 6 tháng tới",
              "Framework hoạch định mục tiêu tự do tài chính",
              "Tải về dùng ngay · không cần kỹ thuật",
            ].map((b, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 14.5,
                  color: ink,
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: `${accent}15`,
                    color: accent,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12 L 10 17 L 19 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* CTA + price preview */}
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontSize: 11.5, color: muted, marginBottom: 2 }}>
                Giảm 50% còn:
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: ink,
                    letterSpacing: "-0.02em",
                  }}
                >
                  299.000₫
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: muted,
                    textDecoration: "line-through",
                  }}
                >
                  599.000₫
                </span>
              </div>
            </div>
            <a
              href="#pricing"
              style={{
                background: accent,
                color: "#fff",
                padding: "18px 32px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15.5,
                letterSpacing: "-0.01em",
                boxShadow:
                  "0 18px 36px rgba(42,91,255,0.36), inset 0 1px 0 rgba(255,255,255,0.2)",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "transform .18s ease, box-shadow .18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 42px rgba(42,91,255,0.46), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(42,91,255,0.36), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
            >
              Sở hữu hệ thống ngay
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

          {/* micro-copy + badges */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              fontSize: 12.5,
              color: muted,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              ⚡ Tải về dùng ngay
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              🔁 Cập nhật trọn đời
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              💌 Hỗ trợ qua email
            </span>
          </div>

          {/* trust bar */}
          <div
            style={{
              marginTop: 28,
              padding: "14px 18px",
              background: "#fff",
              border: "1px solid rgba(14,18,38,0.08)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
              boxShadow: "0 6px 16px rgba(14,18,38,0.04)",
            }}
          >
            <div style={{ display: "flex" }}>
              {["#FFB088", "#A5C8FF", "#C7B0FF", "#FFD584", "#A8D5BA"].map(
                (c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: c,
                      border: "2px solid #fff",
                      marginLeft: i === 0 ? 0 : -8,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                    }}
                  />
                )
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: ink }}>
                ⭐⭐⭐⭐⭐ <span style={{ marginLeft: 6 }}>4.9 / 5.0</span>
              </div>
              <div style={{ fontSize: 11.5, color: muted }}>
                1.247 người đã mua · 312 đánh giá tuần này
              </div>
            </div>
            <div
              style={{
                width: 1,
                height: 32,
                background: "rgba(14,18,38,0.08)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: ink }}>
                💸 Hoàn tiền 14 ngày
              </div>
              <div style={{ fontSize: 11.5, color: muted }}>
                Không hỏi lý do
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — product preview */}
        <div
          style={{
            position: "relative",
            height: 600,
          }}
        >
          {/* background painterly card */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 28,
              background: `
                radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,200,170,0.45), transparent 60%),
                radial-gradient(ellipse 50% 50% at 20% 80%, rgba(168,194,255,0.55), transparent 60%),
                linear-gradient(160deg, #E4ECFB 0%, #C9D6F2 60%, #8FA8E6 100%)
              `,
              boxShadow:
                "0 30px 60px rgba(14,18,38,0.14), inset 0 1px 0 rgba(255,255,255,0.4)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
                mixBlendMode: "overlay",
                opacity: 0.5,
              }}
            />
          </div>

          {/* Main dashboard preview */}
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 36,
              right: 36,
              background: "#fff",
              borderRadius: 16,
              padding: "16px 18px 20px",
              boxShadow:
                "0 30px 60px rgba(14,18,38,0.22), 0 4px 8px rgba(14,18,38,0.10)",
              border: "1px solid rgba(14,18,38,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
                paddingBottom: 12,
                borderBottom: "1px solid rgba(14,18,38,0.06)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: muted,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Tổng quan T7 · 2025
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: ink,
                    marginTop: 2,
                  }}
                >
                  Master Budget Tracker
                </div>
              </div>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  padding: "4px 9px",
                  background: "#DCFCE7",
                  color: "#15803D",
                  borderRadius: 999,
                }}
              >
                ↑ +18% tháng này
              </span>
            </div>

            {/* Big stat row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 14,
                marginBottom: 18,
              }}
            >
              {[
                { l: "Thu nhập", v: "28.4M", c: "#10B981" },
                { l: "Chi tiêu", v: "18.6M", c: "#F97316" },
                { l: "Tiết kiệm", v: "9.8M", c: accent },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FAFAF7",
                    padding: "10px 12px",
                    borderRadius: 10,
                  }}
                >
                  <div style={{ fontSize: 10.5, color: muted, marginBottom: 4 }}>
                    {s.l}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: s.c,
                      letterSpacing: "-0.02em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {s.v}₫
                  </div>
                </div>
              ))}
            </div>

            {/* Big chart */}
            <svg viewBox="0 0 420 130" style={{ width: "100%", height: 130 }}>
              <defs>
                <linearGradient id="prod-cobalt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity="0.30" />
                  <stop offset="100%" stopColor={accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 110 C 40 95, 80 70, 120 78 S 200 55, 240 60 S 320 30, 360 38 S 410 12, 420 18 L 420 130 L 0 130 Z"
                fill="url(#prod-cobalt)"
              />
              <path
                d="M0 110 C 40 95, 80 70, 120 78 S 200 55, 240 60 S 320 30, 360 38 S 410 12, 420 18"
                stroke={accent}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {[
                [0, 110],
                [120, 78],
                [240, 60],
                [360, 38],
                [420, 18],
              ].map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3.5"
                  fill="#fff"
                  stroke={accent}
                  strokeWidth="2"
                />
              ))}
            </svg>

            {/* Category breakdown */}
            <div
              style={{
                marginTop: 14,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                { l: "Ăn uống · siêu thị", pct: 38, c: "#F97316", val: "4.2M" },
                {
                  l: "Đi lại · xăng xe",
                  pct: 22,
                  c: "#2A5BFF",
                  val: "2.4M",
                },
                { l: "Giải trí", pct: 16, c: "#FF6B9C", val: "1.8M" },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 11.5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: r.c,
                    }}
                  />
                  <span style={{ flex: 1, fontWeight: 500, color: ink }}>
                    {r.l}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 5,
                      background: "rgba(14,18,38,0.06)",
                      borderRadius: 3,
                      overflow: "hidden",
                      maxWidth: 120,
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${r.pct}%`,
                        background: r.c,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontWeight: 700,
                      color: ink,
                      fontVariantNumeric: "tabular-nums",
                      minWidth: 40,
                      textAlign: "right",
                    }}
                  >
                    {r.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating notification: target reached */}
          <div
            style={{
              position: "absolute",
              right: -10,
              top: 30,
              background: "#fff",
              borderRadius: 12,
              padding: "10px 14px",
              boxShadow: "0 18px 36px rgba(14,18,38,0.18)",
              border: "1px solid rgba(14,18,38,0.06)",
              transform: "rotate(4deg)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              maxWidth: 220,
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#DCFCE7",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                flex: "0 0 32px",
              }}
            >
              🎯
            </span>
            <div>
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: ink,
                }}
              >
                Đạt mục tiêu tiết kiệm!
              </div>
              <div style={{ fontSize: 10, color: muted }}>
                9.8M / 9M · vượt 8%
              </div>
            </div>
          </div>

          {/* Floating sticky note */}
          <StickyNote
            bg="#FFF188"
            rotate={-8}
            width={140}
            height={130}
            pin
            pinColor="#E23B3B"
            style={{
              position: "absolute",
              left: -14,
              bottom: 50,
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
              "Tháng đầu đã thấy rõ tiền đi đâu" ✦
            </div>
          </StickyNote>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { StickyBuyBar, ProductHero });
