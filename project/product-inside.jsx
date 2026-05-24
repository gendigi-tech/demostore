// Product Detail — WHAT'S INSIDE + DEMO GALLERY + TESTIMONIALS

// =====================================
// WHAT'S INSIDE — 3 deliverables
// =====================================
function ProductInside() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const items = [
    {
      tag: "01",
      title: "Framework định hướng",
      shortHook:
        "Nhập mục tiêu → tự động bóc tách lộ trình hành động.",
      desc:
        "Hệ thống nhập một mục tiêu tài chính lớn (mua nhà, nghỉ hưu, quỹ khẩn cấp...). Sheet tự chia thành cột mốc tháng — bạn biết chính xác cần tiết kiệm bao nhiêu mỗi tuần.",
      bullets: ["Goal Mapper", "Lộ trình 12 tháng", "Cảnh báo lệch mục tiêu"],
      visual: "framework",
    },
    {
      tag: "02",
      title: "Dashboard Tracking 1-Page",
      shortHook: "Nhìn 3 giây → nắm trọn toàn bộ chỉ số cốt lõi.",
      desc:
        "Một trang duy nhất hiển thị: dòng tiền tháng, phân bổ chi tiêu, tốc độ tiết kiệm, dự báo 6 tháng. Tất cả tự update khi bạn nhập 1 dòng giao dịch.",
      bullets: ["Pivot tự động", "Conditional formatting", "Mobile-friendly"],
      visual: "dashboard",
    },
    {
      tag: "03",
      title: "Hướng dẫn vận hành tinh gọn",
      shortHook: "Xem 5 phút → dùng được ngay.",
      desc:
        "5 video ngắn (mỗi video 60-90s) hướng dẫn nhập liệu, tùy chỉnh danh mục, đọc dashboard. Không cần biết công thức Excel.",
      bullets: ["5 video < 8 phút", "Quick reference PDF", "Hỗ trợ qua email"],
      visual: "guide",
    },
  ];

  function VisualPreview({ kind }) {
    if (kind === "framework") {
      return (
        <div
          style={{
            width: "100%",
            background: "#fff",
            borderRadius: 12,
            padding: "16px 18px",
            border: "1px solid rgba(14,18,38,0.06)",
            boxShadow: "0 14px 28px rgba(14,18,38,0.10)",
          }}
        >
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              color: muted,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 6,
            }}
          >
            Goal Mapper
          </div>
          <div
            style={{
              padding: "10px 12px",
              background: "#F8F4E9",
              border: "1px dashed rgba(249,115,22,0.4)",
              borderRadius: 8,
              fontSize: 12.5,
              fontWeight: 600,
              color: ink,
              marginBottom: 12,
            }}
          >
            🎯 Mục tiêu: Tiết kiệm 200 triệu mua xe (24 tháng)
          </div>
          {/* Roadmap */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginBottom: 10,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
              <React.Fragment key={n}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background:
                      i < 3 ? accent : i === 3 ? "#FFF" : "rgba(42,91,255,0.10)",
                    border: i === 3 ? `2px solid ${accent}` : "none",
                    color: i < 3 ? "#fff" : muted,
                    fontSize: 10,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 28px",
                  }}
                >
                  {i < 3 ? "✓" : n * 3}
                </div>
                {i < 7 && (
                  <div
                    style={{
                      flex: 1,
                      height: 2,
                      background:
                        i < 2 ? accent : "rgba(42,91,255,0.15)",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10.5,
              color: muted,
              fontWeight: 500,
            }}
          >
            <span>Tháng 3 · ✓ 25M</span>
            <span style={{ color: accent, fontWeight: 700 }}>Hiện tại</span>
            <span>Mốc 24 · 200M</span>
          </div>
        </div>
      );
    }
    if (kind === "dashboard") {
      return (
        <div
          style={{
            width: "100%",
            background: "#fff",
            borderRadius: 12,
            padding: 16,
            border: "1px solid rgba(14,18,38,0.06)",
            boxShadow: "0 14px 28px rgba(14,18,38,0.10)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 8,
              marginBottom: 12,
            }}
          >
            {[
              { l: "Net", v: "+9.8M", c: "#10B981" },
              { l: "Spend", v: "18.6M", c: "#F97316" },
              { l: "Save %", v: "34%", c: accent },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#FAFAF7",
                  padding: "8px 10px",
                  borderRadius: 8,
                }}
              >
                <div style={{ fontSize: 9, color: muted, marginBottom: 2 }}>
                  {s.l}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: s.c,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 280 70" style={{ width: "100%", height: 70 }}>
            <defs>
              <linearGradient id="inside-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 55 C 30 48, 60 30, 100 36 S 180 18, 220 22 S 270 6, 280 10 L 280 70 L 0 70 Z"
              fill="url(#inside-area)"
            />
            <path
              d="M0 55 C 30 48, 60 30, 100 36 S 180 18, 220 22 S 270 6, 280 10"
              stroke={accent}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      );
    }
    // guide
    return (
      <div
        style={{
          width: "100%",
          background: "#fff",
          borderRadius: 12,
          padding: 16,
          border: "1px solid rgba(14,18,38,0.06)",
          boxShadow: "0 14px 28px rgba(14,18,38,0.10)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            marginBottom: 10,
            color: ink,
          }}
        >
          5 video hướng dẫn
        </div>
        {[
          { t: "Cài đặt ban đầu", d: "1:24" },
          { t: "Nhập giao dịch hàng ngày", d: "0:58" },
          { t: "Đọc dashboard", d: "1:42" },
        ].map((v, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              borderBottom:
                i === 2 ? "none" : "1px solid rgba(14,18,38,0.06)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: `linear-gradient(135deg, ${accent}, #1B43D9)`,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                flex: "0 0 36px",
              }}
            >
              ▶
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: ink }}>
                {v.t}
              </div>
              <div style={{ fontSize: 10, color: muted }}>video · {v.d}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      id="inside"
      data-screen-label="05 What's Inside"
      style={{
        padding: "60px 28px 100px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
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
            What's Inside
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4.6vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: 0,
              color: ink,
              maxWidth: 740,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Bạn nhận được gì bên trong{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: accent,
                fontWeight: 500,
              }}
            >
              hệ thống Plug-and-Play?
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {items.map((it) => (
            <div
              key={it.tag}
              style={{
                background: "#fff",
                borderRadius: 22,
                border: "1px solid rgba(14,18,38,0.08)",
                padding: 20,
                boxShadow:
                  "0 12px 28px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 44px rgba(14,18,38,0.10), 0 4px 6px rgba(14,18,38,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)";
              }}
            >
              {/* Visual preview */}
              <div
                style={{
                  padding: 16,
                  background: `linear-gradient(135deg, #F4F7FE 0%, #E8EEFB 100%)`,
                  borderRadius: 14,
                }}
              >
                <VisualPreview kind={it.visual} />
              </div>
              {/* Content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: accent,
                      fontFamily:
                        "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                      fontStyle: "italic",
                      lineHeight: 1,
                    }}
                  >
                    {it.tag}
                  </span>
                  <div
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: ink,
                    }}
                  >
                    {it.title}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: accent,
                    marginBottom: 10,
                  }}
                >
                  {it.shortHook}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: muted,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {it.desc}
                </p>
                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {it.bullets.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "4px 10px",
                        background: `${accent}10`,
                        color: accent,
                        borderRadius: 999,
                      }}
                    >
                      ✦ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================
// DEMO GALLERY — screenshot strip
// =====================================
function ProductDemoGallery() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const [active, setActive] = React.useState(0);
  const screens = [
    { label: "Dashboard tổng quan", visual: "main" },
    { label: "Phân loại chi tiêu", visual: "breakdown" },
    { label: "Dự báo dòng tiền", visual: "forecast" },
    { label: "Goal mapper", visual: "goal" },
  ];

  function Screen({ kind }) {
    if (kind === "main") {
      return (
        <div style={{ padding: 16 }}>
          <div
            style={{
              fontSize: 11,
              color: muted,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Master Budget · Tháng 7
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: ink,
              marginBottom: 18,
              letterSpacing: "-0.02em",
            }}
          >
            +9.8M₫ <span style={{ color: "#10B981", fontSize: 14 }}>↑18%</span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
              marginBottom: 18,
            }}
          >
            {[
              { l: "Thu", v: "28.4M", c: "#10B981" },
              { l: "Chi", v: "18.6M", c: "#F97316" },
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
                <div style={{ fontSize: 10, color: muted }}>{s.l}</div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: s.c,
                  }}
                >
                  {s.v}₫
                </div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 420 100" style={{ width: "100%", height: 100 }}>
            <defs>
              <linearGradient id="dem-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 80 C 40 70, 80 50, 120 56 S 200 30, 240 36 S 320 8, 360 14 S 410 4, 420 8 L 420 100 L 0 100 Z"
              fill="url(#dem-area)"
            />
            <path
              d="M0 80 C 40 70, 80 50, 120 56 S 200 30, 240 36 S 320 8, 360 14 S 410 4, 420 8"
              stroke={accent}
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>
      );
    }
    if (kind === "breakdown") {
      const rows = [
        { l: "🍔 Ăn uống · siêu thị", pct: 38, val: "4.2M", c: "#F97316" },
        { l: "🚗 Đi lại · xăng xe", pct: 22, val: "2.4M", c: "#2A5BFF" },
        { l: "🎬 Giải trí", pct: 16, val: "1.8M", c: "#FF6B9C" },
        { l: "🏠 Cố định · hoá đơn", pct: 14, val: "1.5M", c: "#8B5CF6" },
        { l: "🎯 Khác", pct: 10, val: "1.1M", c: "#10B981" },
      ];
      return (
        <div style={{ padding: 18 }}>
          <div
            style={{
              fontSize: 13.5,
              fontWeight: 700,
              color: ink,
              marginBottom: 14,
            }}
          >
            Phân loại chi tiêu · T7
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "9px 0",
                fontSize: 12.5,
                borderBottom:
                  i === rows.length - 1
                    ? "none"
                    : "1px solid rgba(14,18,38,0.06)",
              }}
            >
              <span style={{ flex: 1, color: ink, fontWeight: 500 }}>{r.l}</span>
              <div
                style={{
                  width: 140,
                  height: 6,
                  background: "rgba(14,18,38,0.06)",
                  borderRadius: 3,
                  overflow: "hidden",
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
                  minWidth: 50,
                  textAlign: "right",
                }}
              >
                {r.val}
              </span>
            </div>
          ))}
        </div>
      );
    }
    if (kind === "forecast") {
      return (
        <div style={{ padding: 18 }}>
          <div
            style={{
              fontSize: 13.5,
              fontWeight: 700,
              color: ink,
              marginBottom: 14,
            }}
          >
            Dự báo dòng tiền · 6 tháng tới
          </div>
          <svg viewBox="0 0 420 160" style={{ width: "100%", height: 160 }}>
            {[1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                x2="420"
                y1={i * 30}
                y2={i * 30}
                stroke="rgba(14,18,38,0.05)"
                strokeWidth="1"
              />
            ))}
            <path
              d="M0 90 L 70 80 L 140 75 L 210 60 L 280 50 L 350 35 L 420 20"
              stroke={accent}
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M0 90 L 70 80 L 140 75 L 210 60 L 280 50 L 350 35 L 420 20"
              stroke={accent}
              strokeWidth="2.5"
              strokeDasharray="0"
              fill="none"
              opacity="0"
            />
            {/* future dashed segment */}
            <path
              d="M210 60 L 280 50 L 350 35 L 420 20"
              stroke={accent}
              strokeWidth="2.5"
              strokeDasharray="6 4"
              fill="none"
            />
            {[
              [0, 90, "T7"],
              [70, 80, "T8"],
              [140, 75, "T9"],
              [210, 60, "T10"],
              [280, 50, "T11"],
              [350, 35, "T12"],
              [420, 20, "T1"],
            ].map(([x, y, l], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="#fff" stroke={accent} strokeWidth="2" />
                <text x={x} y="150" textAnchor="middle" fontSize="10" fill="rgba(14,18,38,0.5)" fontWeight="600">
                  {l}
                </text>
              </g>
            ))}
            <text x="420" y="14" textAnchor="end" fontSize="11" fill={accent} fontWeight="700">
              80M dự báo
            </text>
          </svg>
        </div>
      );
    }
    // goal
    return (
      <div style={{ padding: 18 }}>
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 700,
            color: ink,
            marginBottom: 14,
          }}
        >
          Goal Mapper
        </div>
        {[
          { l: "Quỹ khẩn cấp", goal: "30M", cur: 27, c: "#10B981" },
          { l: "Mua xe máy", goal: "60M", cur: 65, c: accent },
          { l: "Du lịch Nhật", goal: "40M", cur: 38, c: "#F97316" },
          { l: "Học phí MBA", goal: "200M", cur: 18, c: "#8B5CF6" },
        ].map((g, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                fontWeight: 600,
                color: ink,
                marginBottom: 4,
              }}
            >
              <span>🎯 {g.l}</span>
              <span style={{ color: muted, fontWeight: 500 }}>
                {g.cur}% · mục tiêu {g.goal}
              </span>
            </div>
            <div
              style={{
                height: 8,
                background: "rgba(14,18,38,0.06)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${Math.min(100, g.cur)}%`,
                  background: g.c,
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      data-screen-label="06 Demo Gallery"
      style={{
        padding: "0 28px 100px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Xem trước
          </div>
          <h3
            style={{
              fontSize: "clamp(28px, 3.6vw, 40px)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: 0,
              color: ink,
            }}
          >
            4 màn hình bên trong sheet
          </h3>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                border: "none",
                cursor: "pointer",
                background: active === i ? ink : "#FAFAF7",
                color: active === i ? "#fff" : muted,
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all .15s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Screen frame */}
        <div
          style={{
            background: `linear-gradient(135deg, #F4F7FE 0%, #E8EEFB 100%)`,
            borderRadius: 22,
            padding: 28,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 720,
              background: "#fff",
              borderRadius: 16,
              border: "1px solid rgba(14,18,38,0.08)",
              boxShadow:
                "0 30px 60px rgba(14,18,38,0.14), 0 4px 8px rgba(14,18,38,0.06)",
              overflow: "hidden",
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 14px",
                borderBottom: "1px solid rgba(14,18,38,0.06)",
                background: "#FAFAF7",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6259" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  fontSize: 11,
                  fontWeight: 600,
                  color: muted,
                }}
              >
                {screens[active].label}
              </div>
            </div>
            <Screen kind={screens[active].visual} />
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================
// TESTIMONIALS — social proof
// =====================================
function ProductTestimonials() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const reviews = [
    {
      name: "Linh Trần",
      role: "Product Designer · TP.HCM",
      avatar: "#FFB088",
      quote:
        "Mình đã tự dựng Excel theo dõi chi tiêu 3 lần và bỏ cả 3 lần. Master Budget chỉ mất 15 phút setup và mình đã duy trì được 4 tháng. Lần đầu tiên mình thật sự biết tiền đi đâu.",
      rating: 5,
      tag: "Đã dùng 4 tháng",
    },
    {
      name: "Hà Minh",
      role: "Founder Startup · Hà Nội",
      avatar: "#A5C8FF",
      quote:
        "Phần dự báo dòng tiền 6 tháng là gold. Mình dùng để present cho co-founder mỗi cuối tháng. Tiết kiệm khoảng 4-5 giờ work mỗi tháng so với tự build.",
      rating: 5,
      tag: "Đã dùng 2 tháng",
    },
    {
      name: "Nguyễn Phương",
      role: "Marketing Lead · Đà Nẵng",
      avatar: "#C7B0FF",
      quote:
        "Cái Goal Mapper khiến mình thấy việc tiết kiệm 200tr mua xe không còn xa vời. Có lộ trình rõ ràng, mỗi tháng tick được 1 mốc thật sự rất thoả mãn.",
      rating: 5,
      tag: "Đã dùng 6 tháng",
    },
  ];

  return (
    <section
      id="reviews"
      data-screen-label="07 Reviews"
      style={{
        padding: "100px 28px",
        background: "#FAFAF7",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            Người dùng nói gì
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.2vw, 48px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              color: ink,
            }}
          >
            +1.247 người đã{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: accent,
                fontWeight: 500,
              }}
            >
              kiểm soát được tài chính
            </span>{" "}
            của họ.
          </h2>
        </div>

        {/* Rating block on top */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 60,
            marginBottom: 48,
            padding: "28px 0",
            background: "#fff",
            borderRadius: 18,
            border: "1px solid rgba(14,18,38,0.06)",
            boxShadow: "0 12px 28px rgba(14,18,38,0.06)",
            flexWrap: "wrap",
          }}
        >
          {[
            { v: "4.9", l: "Đánh giá trung bình", suffix: "/ 5.0" },
            { v: "1.247", l: "Người mua", suffix: "" },
            { v: "312", l: "Reviews tuần này", suffix: "" },
            { v: "98%", l: "Khuyên dùng", suffix: "" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: ink,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.v}
                <span
                  style={{ fontSize: 14, color: muted, fontWeight: 500 }}
                >
                  {s.suffix}
                </span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: muted,
                  marginTop: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: 24,
                border: "1px solid rgba(14,18,38,0.06)",
                boxShadow: "0 8px 22px rgba(14,18,38,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* stars */}
              <div style={{ display: "flex", gap: 2 }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <span
                    key={s}
                    style={{ color: "#F59E0B", fontSize: 14 }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  color: ink,
                  lineHeight: 1.55,
                  margin: 0,
                  flex: 1,
                }}
              >
                "{r.quote}"
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 14,
                  borderTop: "1px solid rgba(14,18,38,0.06)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: r.avatar,
                    flex: "0 0 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {r.name[0]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: ink }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: muted }}>{r.role}</div>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    background: `${accent}10`,
                    color: accent,
                    borderRadius: 999,
                    flexShrink: 0,
                  }}
                >
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProductInside, ProductDemoGallery, ProductTestimonials });
