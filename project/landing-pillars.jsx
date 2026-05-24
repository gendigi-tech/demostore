// Landing - 3 PILLARS section (V5 framework: vibrant gradient cards)
function LandingPillars() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const pillars = [
    {
      id: "finance",
      eyebrow: "01 · TÀI CHÍNH",
      ringColor: "#C2410C",
      title: "Làm chủ dòng tiền. Ngừng mơ hồ.",
      bullets: [
        "Tracking chi tiêu tự động, dự báo dòng tiền tương lai.",
        "Framework hoạch định mục tiêu tự do tài chính.",
      ],
      cta: "Xem các bản mẫu Tài chính",
      gradient:
        "linear-gradient(155deg, #FFE6B3 0%, #FFB066 40%, #F97316 100%)",
      glowColor: "rgba(247,115,22,0.35)",
      widget: "finance",
    },
    {
      id: "health",
      eyebrow: "02 · SỨC KHỎE",
      ringColor: "#BE185D",
      title: "Số hóa thể trạng. Tăng trưởng năng lượng.",
      bullets: [
        "Bảng thiết lập Plan dinh dưỡng và lịch tập luyện tinh gọn.",
        "Hệ thống tracking chỉ số sinh học và hiệu suất giấc ngủ.",
      ],
      cta: "Xem các bản mẫu Sức khỏe",
      gradient:
        "linear-gradient(160deg, #FFC2C2 0%, #FF8FAE 50%, #FF6B9C 100%)",
      glowColor: "rgba(255,107,156,0.35)",
      widget: "health",
    },
    {
      id: "relations",
      eyebrow: "03 · MỐI QUAN HỆ",
      ringColor: "#6D28D9",
      title: "Định hình kết nối. Giữ vững vòng ảnh hưởng.",
      bullets: [
        "CRM cá nhân quản lý danh sách liên lạc chất lượng cao (Khách hàng, Đối tác, Mentor).",
        "Hệ thống nhắc nhở và tối ưu hóa thời gian cho gia đình/đội ngũ.",
      ],
      cta: "Xem các bản mẫu Mối quan hệ",
      gradient:
        "linear-gradient(150deg, #F5E6FF 0%, #C9A5FF 50%, #8B5CF6 100%)",
      glowColor: "rgba(139,92,246,0.35)",
      gridOverlay: true,
      widget: "relations",
    },
  ];

  function Widget({ kind, ringColor }) {
    if (kind === "finance") {
      return (
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "12px 14px",
            boxShadow: "0 14px 28px rgba(160,80,10,0.28)",
            width: 220,
            transform: "rotate(-2deg)",
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
            Tháng 7 <span style={{ color: "#F97316" }}>↑ 18%</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 4,
              height: 60,
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
      );
    }
    if (kind === "health") {
      return (
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "14px 16px",
            boxShadow: "0 14px 28px rgba(200,40,80,0.28)",
            width: 230,
            transform: "rotate(2deg)",
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
            Habit · tuần này
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 4,
            }}
          >
            {[
              1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
            ].map((on, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: "1",
                  borderRadius: 4,
                  background: on ? "#FF6B9C" : "rgba(255,107,156,0.18)",
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontSize: 10,
              color: muted,
              marginTop: 10,
            }}
          >
            17/21 thói quen · streak 12 ngày
          </div>
        </div>
      );
    }
    // relations
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "0 14px 28px rgba(80,40,180,0.28)",
          width: 230,
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
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: r.color,
                flex: "0 0 24px",
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
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: ink,
                }}
              >
                {r.name}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: muted,
                }}
              >
                {r.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      id="pillars"
      data-screen-label="04 Pillars"
      style={{
        position: "relative",
        padding: "160px 28px 100px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontSize: 12,
              fontWeight: 700,
              color: muted,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 28,
                height: 1.5,
                background: muted,
              }}
            />
            3 trụ cột sản phẩm
            <span
              style={{
                width: 28,
                height: 1.5,
                background: muted,
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: 0,
              color: ink,
            }}
          >
            Chọn trụ cột của bạn —{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: accent,
              }}
            >
              kiểm soát ngay hôm nay.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16.5,
              color: muted,
              marginTop: 16,
              maxWidth: 560,
              margin: "16px auto 0",
              lineHeight: 1.55,
            }}
          >
            Mỗi card là một bộ sưu tập đã được tuyển chọn. Click để xem các
            template bên trong.
          </p>
        </div>

        {/* cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {pillars.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              style={{
                textDecoration: "none",
                background: "#fff",
                borderRadius: 24,
                padding: 14,
                border: "1px solid rgba(14,18,38,0.06)",
                boxShadow:
                  "0 16px 36px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)",
                transition: "transform .25s ease, box-shadow .25s ease",
                cursor: "pointer",
                color: ink,
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 28px 56px rgba(14,18,38,0.10), 0 4px 6px ${p.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 16px 36px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)";
              }}
            >
              {/* gradient hero */}
              <div
                style={{
                  position: "relative",
                  height: 220,
                  borderRadius: 16,
                  background: p.gradient,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {p.gridOverlay && (
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
                <Widget kind={p.widget} ringColor={p.ringColor} />
              </div>

              {/* body */}
              <div style={{ padding: "20px 12px 12px" }}>
                <div
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: p.ringColor,
                    marginBottom: 10,
                  }}
                >
                  {p.eyebrow}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: ink,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    marginBottom: 14,
                  }}
                >
                  {p.title}
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginBottom: 22,
                  }}
                >
                  {p.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        position: "relative",
                        paddingLeft: 22,
                        fontSize: 13.5,
                        color: muted,
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 5,
                          width: 14,
                          height: 14,
                          borderRadius: 4,
                          background: `${p.ringColor}20`,
                          color: p.ringColor,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12 L 10 17 L 19 7"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: ink,
                    borderBottom: `1.5px solid ${p.ringColor}`,
                    paddingBottom: 1,
                  }}
                >
                  {p.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12 H 19 M 13 6 L 19 12 L 13 18"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.LandingPillars = LandingPillars;
