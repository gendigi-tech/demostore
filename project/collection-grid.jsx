// Collection — PRODUCT GRID + featured combo + bottom CTA

// Product catalog
const PRODUCTS = [
  // ===== TÀI CHÍNH =====
  {
    id: "master-budget",
    cat: "finance",
    catLabel: "Tài chính",
    catColor: "#F97316",
    badge: "Hot · Bestseller",
    badgeColor: "#9A4B12",
    badgeBg: "#FFE2CB",
    title: "Master Budget Tracker Pro",
    desc: "Hệ thống ngân sách toàn diện với dự báo dòng tiền tự động và báo cáo hàng tháng.",
    price: 299,
    oldPrice: 599,
    visual: "cashflow",
  },
  {
    id: "starter",
    cat: "finance",
    catLabel: "Tài chính",
    catColor: "#F97316",
    badge: "Miễn phí",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
    title: "Chi Tiêu Cơ Bản Starter",
    desc: "Template theo dõi chi tiêu đơn giản. 5 danh mục, cập nhật chỉ 2 phút mỗi ngày.",
    price: 0,
    visual: "starter",
  },
  {
    id: "portfolio",
    cat: "finance",
    catLabel: "Tài chính",
    catColor: "#F97316",
    badge: "Mới",
    badgeColor: "#1B43D9",
    badgeBg: "#DBE6FE",
    title: "Investment Portfolio Tracker",
    desc: "Quản lý danh mục đầu tư đa kênh: cổ phiếu, bất động sản, tiết kiệm. ROI tự động.",
    price: 449,
    oldPrice: 699,
    visual: "portfolio",
  },
  {
    id: "emergency",
    cat: "finance",
    catLabel: "Tài chính",
    catColor: "#F97316",
    title: "Quỹ Khẩn Cấp Planner",
    desc: "Framework xây dựng quỹ 6 tháng chi tiêu với lộ trình tích lũy rõ ràng.",
    price: 199,
    visual: "emergency",
  },

  // ===== SỨC KHỎE =====
  {
    id: "sleep",
    cat: "health",
    catLabel: "Sức khỏe",
    catColor: "#FF6B9C",
    badge: "Hot",
    badgeColor: "#BE185D",
    badgeBg: "#FCE7F0",
    title: "Sleep & Energy Tracker",
    desc: "Theo dõi giấc ngủ, năng lượng và tâm trạng. Báo cáo hàng tuần với insights tự động.",
    price: 249,
    oldPrice: 399,
    visual: "sleep",
  },
  {
    id: "habit",
    cat: "health",
    catLabel: "Sức khỏe",
    catColor: "#FF6B9C",
    badge: "Miễn phí",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
    title: "Habit Tracker 30 ngày",
    desc: "Bảng theo dõi 5 thói quen trong 30 ngày. Có streak counter và biểu đồ trực quan.",
    price: 0,
    visual: "habit",
  },
  {
    id: "nutrition",
    cat: "health",
    catLabel: "Sức khỏe",
    catColor: "#FF6B9C",
    title: "Nutrition Plan Pro",
    desc: "Plan dinh dưỡng & lịch tập luyện. Tính calo, macro tự động — kết quả thấy rõ sau 4 tuần.",
    price: 349,
    visual: "nutrition",
  },

  // ===== MỐI QUAN HỆ =====
  {
    id: "crm",
    cat: "relations",
    catLabel: "Mối quan hệ",
    catColor: "#8B5CF6",
    badge: "Bestseller",
    badgeColor: "#6D28D9",
    badgeBg: "#EDE3FE",
    title: "Personal CRM Pro",
    desc: "CRM cá nhân quản lý khách hàng VIP, đối tác, mentor. Nhắc nhở tương tác tự động.",
    price: 399,
    oldPrice: 599,
    visual: "crm",
  },
  {
    id: "family",
    cat: "relations",
    catLabel: "Mối quan hệ",
    catColor: "#8B5CF6",
    badge: "Miễn phí",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
    title: "Family Sync Lite",
    desc: "Lịch chung gia đình + danh sách sinh nhật + nhắc gọi điện. Sheet đơn giản dùng được ngay.",
    price: 0,
    visual: "family",
  },
];

// =====================================
// MINI PRODUCT VISUAL (per product)
// =====================================
function ProductVisual({ kind, color }) {
  const accent = "#2A5BFF";

  if (kind === "cashflow") {
    return (
      <div style={{ padding: 14 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#0E1226",
            marginBottom: 6,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Tháng 7 <span style={{ color: "#10B981" }}>↑18%</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 60 }}>
          {[30, 45, 28, 60, 40, 70, 55, 78, 64, 88].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: i === 9 ? color : `${color}80`,
                borderRadius: 2,
                opacity: 0.4 + (i / 10) * 0.6,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (kind === "starter") {
    return (
      <div style={{ padding: 14 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          5 danh mục
        </div>
        {[
          { l: "🍔 Ăn uống", pct: 38 },
          { l: "🚗 Đi lại", pct: 22 },
          { l: "🏠 Cố định", pct: 18 },
        ].map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 5,
              fontSize: 9.5,
            }}
          >
            <span style={{ width: 60 }}>{r.l}</span>
            <div
              style={{
                flex: 1,
                height: 4,
                background: "rgba(14,18,38,0.08)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div style={{ height: "100%", width: `${r.pct}%`, background: color }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "portfolio") {
    return (
      <div style={{ padding: 14 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          ROI · 12 tháng
        </div>
        <svg viewBox="0 0 180 60" style={{ width: "100%", height: 60 }}>
          <path
            d="M0 50 C 20 45, 40 30, 60 36 S 100 18, 120 24 S 160 6, 180 10"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {[
            [0, 50],
            [60, 36],
            [120, 24],
            [180, 10],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill={color} />
          ))}
        </svg>
        <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
          {["CK", "BĐS", "TK"].map((t, i) => (
            <span
              key={i}
              style={{
                fontSize: 9,
                fontWeight: 700,
                padding: "2px 6px",
                background: `${color}20`,
                color: color,
                borderRadius: 4,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "emergency") {
    return (
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 4 }}>
          🎯 Quỹ khẩn cấp
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: color,
            letterSpacing: "-0.02em",
            marginBottom: 6,
          }}
        >
          54 / 180M
        </div>
        <div
          style={{
            height: 8,
            background: "rgba(14,18,38,0.08)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "30%",
              background: `linear-gradient(90deg, ${color}, ${color}99)`,
              borderRadius: 4,
            }}
          />
        </div>
        <div style={{ fontSize: 9, color: "rgba(14,18,38,0.5)", marginTop: 4 }}>
          còn 14 tháng · 9M/tháng
        </div>
      </div>
    );
  }
  if (kind === "sleep") {
    return (
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 4 }}>
          😴 Trung bình giấc ngủ
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: color,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          7h12m
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {[7.2, 6.8, 7.5, 6.4, 7.8, 8.1, 7.0].map((h, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div
                style={{
                  height: 28,
                  background: `linear-gradient(180deg, ${color} ${h * 8}%, rgba(14,18,38,0.08) ${h * 8}%)`,
                  borderRadius: 2,
                }}
              />
              <div style={{ fontSize: 8, color: "rgba(14,18,38,0.5)", textAlign: "center", marginTop: 2 }}>
                {["2","3","4","5","6","7","CN"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "habit") {
    return (
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 6 }}>
          5 thói quen · 30 ngày
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: 2,
          }}
        >
          {[
            1,1,1,0,1,1,1,1,1,0,
            1,1,0,1,1,1,1,1,1,1,
            1,0,1,1,1,1,1,0,1,1,
          ].map((on, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                borderRadius: 2,
                background: on ? color : `${color}20`,
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: 9, color: "rgba(14,18,38,0.5)", marginTop: 6 }}>
          streak 18 ngày 🔥
        </div>
      </div>
    );
  }
  if (kind === "nutrition") {
    return (
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 6 }}>
          Hôm nay · 1.842 kcal
        </div>
        {[
          { l: "Protein", pct: 75, c: color },
          { l: "Carb", pct: 60, c: `${color}99` },
          { l: "Fat", pct: 48, c: `${color}66` },
        ].map((r, i) => (
          <div key={i} style={{ marginBottom: 5 }}>
            <div
              style={{
                fontSize: 9,
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <span>{r.l}</span>
              <span style={{ fontWeight: 700 }}>{r.pct}%</span>
            </div>
            <div
              style={{
                height: 4,
                background: "rgba(14,18,38,0.08)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div style={{ height: "100%", width: `${r.pct}%`, background: r.c }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "crm") {
    return (
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 8 }}>
          Sắp nhắc tương tác
        </div>
        {[
          { n: "Anh Hùng · VP Sales", note: "1 tuần chưa gặp", c: color },
          { n: "Mentor Lan", note: "Sinh nhật T7", c: `${color}99` },
        ].map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 9.5,
              marginBottom: 4,
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: r.c,
                color: "#fff",
                fontSize: 8,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "0 0 18px",
              }}
            >
              {r.n[0]}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600 }}>{r.n}</div>
              <div style={{ fontSize: 8, color: "rgba(14,18,38,0.5)" }}>{r.note}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // family
  return (
    <div style={{ padding: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 6 }}>
        🎂 Sắp tới
      </div>
      {[
        { d: "12/8", n: "Sinh nhật Linh", c: color },
        { d: "18/8", n: "Gọi ba mẹ", c: `${color}99` },
        { d: "22/8", n: "Cafe với An", c: `${color}66` },
      ].map((e, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 0",
            fontSize: 10,
            borderBottom: i === 2 ? "none" : "1px solid rgba(14,18,38,0.06)",
          }}
        >
          <span
            style={{
              fontSize: 8,
              fontWeight: 700,
              padding: "2px 6px",
              background: e.c,
              color: "#fff",
              borderRadius: 4,
            }}
          >
            {e.d}
          </span>
          <span style={{ fontWeight: 500 }}>{e.n}</span>
        </div>
      ))}
    </div>
  );
}

// =====================================
// PRODUCT CARD
// =====================================
function ProductCard({ p, accent }) {
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  return (
    <a
      href="Product.html"
      style={{
        textDecoration: "none",
        background: "#fff",
        borderRadius: 18,
        padding: 12,
        border: "1px solid rgba(14,18,38,0.06)",
        boxShadow:
          "0 12px 28px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)",
        transition: "transform .25s ease, box-shadow .25s ease",
        display: "flex",
        flexDirection: "column",
        color: ink,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 22px 46px rgba(14,18,38,0.10), 0 4px 8px ${p.catColor}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 12px 28px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)";
      }}
    >
      {/* preview area */}
      <div
        style={{
          height: 150,
          borderRadius: 12,
          background: `radial-gradient(120% 100% at 50% 100%, ${p.catColor} 0%, ${p.catColor}66 30%, ${p.catColor}1a 60%, #fff 100%)`,
          position: "relative",
          overflow: "hidden",
          marginBottom: 14,
        }}
      >
        {/* tags row */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            display: "flex",
            justifyContent: "space-between",
            gap: 6,
            zIndex: 2,
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)",
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: 999,
              color: ink,
              border: "1px solid rgba(14,18,38,0.06)",
            }}
          >
            {p.catLabel}
          </span>
          {p.badge && (
            <span
              style={{
                background: p.badgeBg,
                color: p.badgeColor,
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 9px",
                borderRadius: 999,
              }}
            >
              {p.badge}
            </span>
          )}
        </div>

        {/* inner card with mini visual */}
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 12,
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 8px 18px rgba(14,18,38,0.10)",
            border: "1px solid rgba(14,18,38,0.04)",
          }}
        >
          <ProductVisual kind={p.visual} color={p.catColor} />
        </div>
      </div>

      {/* text */}
      <div style={{ padding: "0 6px 6px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: ink,
            letterSpacing: "-0.01em",
            marginBottom: 4,
          }}
        >
          {p.title}
        </div>
        <div
          style={{
            fontSize: 12.5,
            color: muted,
            lineHeight: 1.45,
            marginBottom: 14,
            flex: 1,
          }}
        >
          {p.desc}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 12,
            borderTop: "1px solid rgba(14,18,38,0.06)",
          }}
        >
          {p.price === 0 ? (
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#15803D",
              }}
            >
              Miễn phí
            </span>
          ) : (
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: ink }}>
                {p.price}.000₫
              </span>
              {p.oldPrice && (
                <span
                  style={{
                    fontSize: 11.5,
                    color: muted,
                    textDecoration: "line-through",
                  }}
                >
                  {p.oldPrice}.000₫
                </span>
              )}
            </div>
          )}
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: ink,
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background .15s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12 H 19 M 13 6 L 19 12 L 13 18"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

// =====================================
// GRID SECTION
// =====================================
function CollectionGrid({ active }) {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const [sort, setSort] = React.useState("popular");
  const [priceFilter, setPriceFilter] = React.useState("all");

  // filter
  let products = PRODUCTS.filter((p) => active === "all" || p.cat === active);
  if (priceFilter === "free") products = products.filter((p) => p.price === 0);
  if (priceFilter === "paid") products = products.filter((p) => p.price > 0);

  // sort
  if (sort === "price-asc") products = [...products].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") products = [...products].sort((a, b) => b.price - a.price);

  const cat = CATEGORIES.find((c) => c.id === active);

  return (
    <section
      id="grid"
      data-screen-label="03 Grid"
      style={{
        padding: "60px 28px 100px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section heading + count */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 18,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                fontWeight: 700,
                color: muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              <span style={{ width: 28, height: 1.5, background: muted }} />
              Bộ sưu tập {active !== "all" && `· ${cat.label}`}
            </div>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                color: ink,
              }}
            >
              {products.length} sản phẩm{" "}
              <span
                style={{
                  fontFamily:
                    "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                  fontStyle: "italic",
                  color: cat.accent,
                  fontWeight: 500,
                }}
              >
                tinh gọn.
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {/* Price filter chips */}
            <div
              style={{
                display: "inline-flex",
                gap: 4,
                padding: 4,
                background: "#FAFAF7",
                borderRadius: 999,
                border: "1px solid rgba(14,18,38,0.06)",
              }}
            >
              {[
                { id: "all", l: "Tất cả" },
                { id: "free", l: "Miễn phí" },
                { id: "paid", l: "Premium" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setPriceFilter(f.id)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    background: priceFilter === f.id ? ink : "transparent",
                    color: priceFilter === f.id ? "#fff" : ink,
                    padding: "7px 14px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "inherit",
                    transition: "all .15s",
                  }}
                >
                  {f.l}
                </button>
              ))}
            </div>
            {/* Sort */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 10px 6px 14px",
                background: "#FAFAF7",
                border: "1px solid rgba(14,18,38,0.06)",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
              }}
            >
              <span style={{ color: muted }}>Sắp xếp</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  fontSize: 12.5,
                  color: ink,
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="popular">Phổ biến</option>
                <option value="price-asc">Giá thấp → cao</option>
                <option value="price-desc">Giá cao → thấp</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {products.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: "60px 24px",
              textAlign: "center",
              background: "#FAFAF7",
              borderRadius: 18,
              color: muted,
              fontSize: 14,
            }}
          >
            Không có sản phẩm phù hợp với lọc hiện tại.
          </div>
        )}
      </div>
    </section>
  );
}

// =====================================
// BOTTOM CTA — combo deal banner
// =====================================
function CollectionBottomCTA() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";

  return (
    <section
      data-screen-label="04 Combo CTA"
      style={{
        padding: "0 28px 60px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          background: `linear-gradient(135deg, ${ink} 0%, #1a2244 50%, ${accent} 100%)`,
          borderRadius: 28,
          padding: "56px 48px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30%",
            right: "10%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(255,200,170,0.20), transparent 70%)",
            filter: "blur(40px)",
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

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 12px",
              background: "rgba(255,200,170,0.18)",
              border: "1px solid rgba(255,200,170,0.3)",
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#FFD584",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            🎁 Combo · Tiết kiệm 40%
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: 0,
              color: "#fff",
            }}
          >
            Trọn bộ 3 trụ cột —{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              kiểm soát toàn diện cuộc sống.
            </span>
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: "rgba(255,255,255,0.78)",
              marginTop: 14,
              lineHeight: 1.55,
              maxWidth: 500,
            }}
          >
            Master Budget + Sleep & Energy + Personal CRM — 3 hệ thống Bestseller
            kết hợp thành một dashboard duy nhất.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              marginTop: 26,
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "line-through",
              }}
            >
              947.000₫
            </span>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              569.000₫
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "4px 10px",
                background: "rgba(16,185,129,0.18)",
                color: "#86EFAC",
                borderRadius: 999,
              }}
            >
              Tiết kiệm 378k
            </span>
          </div>

          <a
            href="Product.html"
            style={{
              marginTop: 22,
              background: "#fff",
              color: ink,
              padding: "16px 32px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14.5,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow:
                "0 14px 28px rgba(14,18,38,0.30), inset 0 1px 0 rgba(255,255,255,0.6)",
              transition: "transform .18s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Mua trọn bộ
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

        {/* visual stack on right */}
        <div
          style={{
            position: "relative",
            height: 240,
            zIndex: 2,
          }}
        >
          {[
            { c: "#F97316", lbl: "💸", rot: -8, top: 0, left: 0 },
            { c: "#FF6B9C", lbl: "🌿", rot: 4, top: 30, left: 60 },
            { c: "#8B5CF6", lbl: "🤝", rot: -3, top: 60, left: 120 },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
                width: 180,
                height: 120,
                background: "rgba(255,255,255,0.95)",
                borderRadius: 12,
                transform: `rotate(${s.rot}deg)`,
                boxShadow: "0 18px 36px rgba(0,0,0,0.20)",
                padding: 12,
                color: ink,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: s.c,
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                {s.lbl}
              </div>
              <div style={{ height: 6, background: "rgba(14,18,38,0.08)", borderRadius: 3, marginBottom: 4 }} />
              <div style={{ height: 4, width: "70%", background: "rgba(14,18,38,0.06)", borderRadius: 2, marginBottom: 4 }} />
              <div style={{ height: 4, width: "50%", background: "rgba(14,18,38,0.06)", borderRadius: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PRODUCTS, CollectionGrid, CollectionBottomCTA });
