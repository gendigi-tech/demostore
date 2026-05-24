// Collection — HERO with filter tabs + dynamic pitch + mantra

// Category definitions
const CATEGORIES = [
  {
    id: "all",
    label: "Tất cả",
    icon: "✦",
    headline: "Công cụ tốt nhất cho hiệu suất đỉnh cao.",
    accentWord: "hiệu suất đỉnh cao",
    sub:
      "Tổng hợp các bộ công cụ, bảng hướng dẫn, tracking report và plan định hướng đã được tối ưu hóa cấu trúc. Lọc theo nhu cầu của bạn bên dưới để bắt đầu x2 hiệu suất thời gian.",
    mantra: null,
    accent: "#2A5BFF",
    accentSoft: "rgba(42,91,255,0.10)",
    gradient: `
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,200,170,0.45), transparent 60%),
      radial-gradient(ellipse 50% 50% at 20% 70%, rgba(168,194,255,0.50), transparent 60%),
      linear-gradient(160deg, #E4ECFB 0%, #C9D6F2 60%, #8FA8E6 100%)
    `,
  },
  {
    id: "finance",
    label: "Tài chính",
    icon: "💸",
    headline: "Kiểm soát từng đồng xu. Tự động hóa tương lai.",
    accentWord: "Tự động hóa",
    sub:
      "Nếu bạn không thể đo lường tài chính, bạn không thể quản lý nó. Các template tại đây giúp bạn loại bỏ sự mơ hồ trong dòng tiền, thiết lập kế hoạch tích lũy và kiểm soát bài toán tài chính cá nhân/kinh doanh chỉ trên một màn hình.",
    mantra: '"Người giàu quản lý tiền của họ; người nghèo trốn tránh việc đó."',
    mantraAttr: "Robert Kiyosaki",
    accent: "#F97316",
    accentSoft: "rgba(249,115,22,0.10)",
    gradient: `
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,189,46,0.45), transparent 60%),
      radial-gradient(ellipse 50% 50% at 15% 70%, rgba(255,170,120,0.55), transparent 60%),
      linear-gradient(160deg, #FFE6B3 0%, #FFB066 55%, #F97316 100%)
    `,
  },
  {
    id: "health",
    label: "Sức khỏe",
    icon: "🌿",
    headline: "Sức khỏe là chỉ số có thể đo lường.",
    accentWord: "đo lường",
    sub:
      "Năng lượng là gốc rễ của mọi thành công. Hãy ngừng việc tập luyện và ăn uống theo cảm tính. Sử dụng các framework tracking report và kế hoạch hành động được thiết kế sẵn để đưa cơ thể bạn vào trạng thái vận hành tối ưu nhất.",
    mantra:
      '"Hiệu suất đỉnh cao bắt đầu từ một cơ thể được quản trị khoa học."',
    mantraAttr: "Bestlist",
    accent: "#FF6B9C",
    accentSoft: "rgba(255,107,156,0.10)",
    gradient: `
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,194,194,0.55), transparent 60%),
      radial-gradient(ellipse 50% 50% at 15% 70%, rgba(255,143,174,0.50), transparent 60%),
      linear-gradient(160deg, #FFD8DD 0%, #FFA5BD 55%, #FF6B9C 100%)
    `,
  },
  {
    id: "relations",
    label: "Mối quan hệ",
    icon: "🤝",
    headline: "Thiết kế mạng lưới chất lượng cao.",
    accentWord: "chất lượng cao",
    sub:
      "Mối quan hệ không tự nhiên bền vững, chúng cần sự quản trị. Từ đối tác chiến lược, khách hàng VIP cho đến các kết nối cốt lõi trong cuộc sống — các hệ thống này giúp bạn lưu trữ thông tin sâu, nhắc nhở tương tác và duy trì vòng ảnh hưởng một cách tinh tế, chuyên nghiệp.",
    mantra:
      '"Giá trị mạng lưới quan hệ định hình giá trị tài sản của bạn."',
    mantraAttr: "Bestlist",
    accent: "#8B5CF6",
    accentSoft: "rgba(139,92,246,0.10)",
    gradient: `
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(245,230,255,0.55), transparent 60%),
      radial-gradient(ellipse 50% 50% at 15% 70%, rgba(201,165,255,0.55), transparent 60%),
      linear-gradient(160deg, #F5E6FF 0%, #C9A5FF 55%, #8B5CF6 100%)
    `,
  },
];

function CollectionHero({ active, setActive }) {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";
  const cat = CATEGORIES.find((c) => c.id === active);

  return (
    <section
      data-screen-label="01 Collection Hero"
      style={{
        padding: "20px 28px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: cat.gradient,
          boxShadow:
            "0 30px 60px rgba(14,18,38,0.18), inset 0 1px 0 rgba(255,255,255,0.4)",
          minHeight: 460,
          transition: "background .6s ease",
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
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* breadcrumb */}
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 36,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12.5,
            color: "rgba(255,255,255,0.85)",
            fontWeight: 500,
            zIndex: 2,
          }}
        >
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            store.bestlist.ai
          </a>
          <span>›</span>
          <span style={{ fontWeight: 700, color: "#fff" }}>
            Sheets {active !== "all" && `· ${cat.label}`}
          </span>
        </div>

        {/* Decorative floating chips */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 60,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 1,
          }}
        >
          <FloatChip rotate={-4} style={{ alignSelf: "flex-end" }}>
            <span style={{ fontSize: 14 }}>{cat.icon}</span>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: ink }}>
              9 templates · 4.9★
            </span>
          </FloatChip>
          <FloatChip rotate={3} style={{ alignSelf: "flex-end" }}>
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: 5,
                background: cat.accent,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: ink }}>
              1.247+ người dùng
            </span>
          </FloatChip>
        </div>

        {/* Sticky note pinned in corner */}
        <StickyNote
          bg="#FFF188"
          rotate={-9}
          width={140}
          height={130}
          pin
          pinColor="#E23B3B"
          style={{
            position: "absolute",
            left: 56,
            bottom: 56,
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
            Tải về dùng ngay — không cần học thêm gì ✦
          </div>
        </StickyNote>

        {/* Center text */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            padding: "100px 56px 90px",
            textAlign: "center",
            maxWidth: 880,
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px, 5.4vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
              margin: 0,
              color: "#fff",
              textShadow: "0 4px 30px rgba(14,18,38,0.20)",
            }}
          >
            {(() => {
            const parts = cat.headline.split(new RegExp(`(${cat.accentWord})`, "i"));
            return parts.map((part, idx) => {
              if (part.toLowerCase() === cat.accentWord.toLowerCase()) {
                return (
                  <span
                    key={idx}
                    style={{
                      fontFamily:
                        "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                      color: "#fff",
                      position: "relative",
                      paddingRight: 4,
                    }}
                  >
                    {part}
                    <HandUnderline color="#fff" strokeWidth={5} />
                  </span>
                );
              }
              return <React.Fragment key={idx}>{part}</React.Fragment>;
            });
          })()}
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.94)",
              marginTop: 22,
              lineHeight: 1.55,
              textShadow: "0 2px 12px rgba(14,18,38,0.20)",
            }}
          >
            {cat.sub}
          </p>
        </div>

        {/* Filter tabs at the bottom of the hero card */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            padding: "0 32px 28px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              gap: 6,
              padding: 6,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: 999,
              boxShadow: "0 14px 30px rgba(14,18,38,0.16)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  border: "none",
                  cursor: "pointer",
                  background: active === c.id ? ink : "transparent",
                  color: active === c.id ? "#fff" : ink,
                  padding: "10px 18px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all .2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 13 }}>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionMantra({ active }) {
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";
  const cat = CATEGORIES.find((c) => c.id === active);
  if (!cat.mantra) return null;

  return (
    <section
      data-screen-label="02 Mantra"
      style={{
        padding: "100px 28px 60px",
        background: "#FAFAF7",
      }}
    >
      <div
        style={{
          maxWidth: 880,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* big quote mark */}
        <div
          style={{
            fontFamily:
              "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
            fontStyle: "italic",
            fontSize: 200,
            fontWeight: 500,
            color: cat.accentSoft,
            lineHeight: 0.8,
            position: "absolute",
            top: -40,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          “
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: cat.accent,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            ✦ Mantra hành động
          </div>
          <blockquote
            style={{
              fontFamily:
                "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: ink,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            {cat.mantra}
          </blockquote>
          <div
            style={{
              marginTop: 22,
              fontSize: 13,
              fontWeight: 600,
              color: muted,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            — {cat.mantraAttr}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CATEGORIES, CollectionHero, CollectionMantra });
