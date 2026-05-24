// Landing - header, problem, why, final CTA, footer
// =====================================================

// ============================
// HEADER (sticky top nav)
// ============================
function LandingHeader() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.65)";
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { l: "Tài chính", h: "#finance" },
    { l: "Sức khỏe", h: "#health" },
    { l: "Mối quan hệ", h: "#relations" },
    { l: "Vì sao Bestlist", h: "#why" },
    { l: "Bảng giá", h: "#pricing" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(250,250,247,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(14,18,38,0.06)"
          : "1px solid transparent",
        transition: "all .25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: ink,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            fontSize: 17,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: accent,
              borderRadius: 9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff" />
              <path
                d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16 M 8 17 H 13"
                stroke={accent}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          store.bestlist.ai
        </a>

        <nav style={{ display: "flex", gap: 32 }}>
          {items.map((x) => (
            <a
              key={x.l}
              href={x.h}
              style={{
                color: muted,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
            >
              {x.l}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <a
            href="#"
            style={{
              color: muted,
              textDecoration: "none",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ink)}
            onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
          >
            Đăng nhập
          </a>
          <a
            href="#pillars"
            style={{
              background: ink,
              color: "#fff",
              padding: "9px 18px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              transition: "transform .15s, box-shadow .15s",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 10px 22px rgba(0,0,0,0.16)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Khám phá kho →
          </a>
        </div>
      </div>
    </header>
  );
}

// ============================
// PROBLEM section
// ============================
function LandingProblem() {
  const ink = "#0E1226";
  const accent = "#2A5BFF";
  const muted = "rgba(255,255,255,0.55)";

  return (
    <section
      data-screen-label="02 Problem"
      style={{
        position: "relative",
        padding: "100px 28px",
        background: "#0E1226",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* faint dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 95%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left: label + heading */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px",
              background: "rgba(255,107,156,0.12)",
              border: "1px solid rgba(255,107,156,0.25)",
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 700,
              color: "#FF8FAE",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: 12 }}>✦</span>
            Vấn đề
          </div>
          <h2
            style={{
              fontSize: "clamp(34px, 4.4vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
              color: "#fff",
            }}
          >
            Bạn đang quản lý cuộc sống, hay đang bị{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: "#FF8FAE",
                fontWeight: 500,
              }}
            >
              sự hỗn loạn
            </span>{" "}
            dẫn dắt?
          </h2>
        </div>

        {/* Right: body + symptoms */}
        <div>
          <p
            style={{
              fontSize: 16.5,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Mỗi ngày trôi qua, bạn mất hàng giờ chỉ để tạo file Excel theo dõi
            chi tiêu, loay hoay lên lịch tập luyện, hoặc quên mất việc duy trì
            kết nối với các mối quan hệ quan trọng.
          </p>
          <p
            style={{
              fontSize: 16.5,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.65,
              marginTop: 18,
            }}
          >
            Việc tự xây dựng hệ thống quản lý từ đầu là một{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              cái bẫy tiêu tốn thời gian
            </strong>
            . Bạn không cần thêm công cụ — bạn cần{" "}
            <em
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: 600,
                borderBottom: `2px solid ${accent}`,
                paddingBottom: 1,
              }}
            >
              hệ thống đã chứng minh có hiệu quả.
            </em>
          </p>

          {/* Symptom chips */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 32,
            }}
          >
            {[
              "Tạo file Excel rồi bỏ dở sau 2 tuần.",
              "Quên gọi ba mẹ, quên sinh nhật bạn thân.",
              "Mỗi cuối tháng đoán mò xem tiền đi đâu.",
              "Đặt mục tiêu rồi quên mất mục tiêu là gì.",
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    background: "rgba(255,107,156,0.18)",
                    color: "#FF8FAE",
                    flex: "0 0 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    marginTop: 1,
                  }}
                >
                  ✕
                </span>
                <span
                  style={{
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.4,
                  }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================
// WHY CHOOSE US
// ============================
function LandingWhy() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const benefits = [
    {
      tag: "01",
      title: "Thực chiến",
      desc:
        "Không rườm rà. Chỉ giữ lại những chỉ số cốt lõi giúp bạn ra quyết định.",
      accent: "#F97316",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 L 15 9 L 22 10 L 17 15 L 18 22 L 12 18 L 6 22 L 7 15 L 2 10 L 9 9 Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      tag: "02",
      title: "Mở rộng tức thì",
      desc:
        "Tương thích hoàn hảo với các nền tảng tối ưu hiệu suất phổ biến nhất hiện nay.",
      accent: accent,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 17 L 17 7 M 12 7 H 17 V 12"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      tag: "03",
      title: "Sử dụng trọn đời",
      desc:
        "Mua một lần, nâng cấp tư duy quản trị mãi mãi. Cập nhật miễn phí cho phiên bản tương lai.",
      accent: "#8B5CF6",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M9 12 L 11 14 L 16 9"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why"
      data-screen-label="05 Why"
      style={{
        padding: "100px 28px",
        background: "#FAFAF7",
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
              marginBottom: 16,
            }}
          >
            Sự khác biệt
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4.6vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
              color: ink,
            }}
          >
            Tại sao chọn{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: accent,
                fontWeight: 500,
              }}
            >
              hệ thống của Bestlist?
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            background: "#fff",
            borderRadius: 22,
            border: "1px solid rgba(14,18,38,0.08)",
            overflow: "hidden",
            boxShadow:
              "0 18px 40px rgba(14,18,38,0.06), 0 2px 4px rgba(14,18,38,0.04)",
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={b.tag}
              style={{
                padding: "36px 32px 32px",
                borderLeft:
                  i === 0 ? "none" : "1px solid rgba(14,18,38,0.08)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${b.accent}15`,
                  color: b.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                {b.icon}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: muted,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {b.tag}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: ink,
                  marginBottom: 10,
                }}
              >
                {b.title}
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  color: muted,
                  lineHeight: 1.55,
                }}
              >
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================
// FINAL CTA
// ============================
function LandingFinalCTA() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";

  return (
    <section
      id="pricing"
      data-screen-label="06 Final CTA"
      style={{
        padding: "0 28px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          background: `linear-gradient(135deg, ${accent} 0%, #1B43D9 60%, #0E1226 100%)`,
          borderRadius: 28,
          padding: "88px 56px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "20%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(255,200,170,0.25), transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "5%",
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(168,194,255,0.3), transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              margin: 0,
              color: "#fff",
            }}
          >
            Ngừng lãng phí{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              hiệu suất
            </span>{" "}
            của bạn.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              marginTop: 22,
              maxWidth: 580,
              margin: "22px auto 0",
              lineHeight: 1.55,
            }}
          >
            Chọn một hệ thống thích hợp và bắt đầu kiểm soát cuộc sống của bạn
            ngay hôm nay.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                background: "#fff",
                color: ink,
                padding: "16px 32px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14.5,
                boxShadow:
                  "0 14px 28px rgba(14,18,38,0.30), inset 0 1px 0 rgba(255,255,255,0.6)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform .18s ease, box-shadow .18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Truy cập kho sản phẩm
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
              href="#"
              style={{
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1.5px solid rgba(255,255,255,0.45)",
                paddingBottom: 2,
                transition: "border-color .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.45)")
              }
            >
              Miễn phí &amp; trả phí ↗
            </a>
          </div>

          {/* tiny social proof */}
          <div
            style={{
              marginTop: 28,
              fontSize: 12.5,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.04em",
            }}
          >
            ✦ Cập nhật miễn phí trọn đời · ⚡ Tải về dùng ngay · 💌 Hỗ trợ qua
            email
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================
// FOOTER
// ============================
function LandingFooter() {
  const ink = "#0E1226";
  const accent = "#2A5BFF";
  const muted = "rgba(255,255,255,0.5)";
  const mutedStrong = "rgba(255,255,255,0.75)";

  const cols = [
    {
      title: "Sản phẩm",
      links: ["Tài chính", "Sức khỏe", "Mối quan hệ", "Combo", "Bảng giá"],
    },
    {
      title: "Tài nguyên",
      links: ["Hướng dẫn", "Blog", "Khách hàng", "Affiliate"],
    },
    {
      title: "Công ty",
      links: ["Về Bestlist", "Liên hệ", "Điều khoản", "Bảo mật"],
    },
  ];

  return (
    <footer
      style={{
        background: ink,
        color: "#fff",
        padding: "64px 28px 28px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: 40,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              fontSize: 18,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: accent,
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff" />
                <path
                  d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16 M 8 17 H 13"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            store.bestlist.ai
          </div>
          <p
            style={{
              fontSize: 13.5,
              color: mutedStrong,
              lineHeight: 1.6,
              maxWidth: 320,
              margin: 0,
            }}
          >
            Hệ thống template được thiết kế cho người muốn tối ưu cuộc sống —
            không cần lập trình, không cần thử nghiệm.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            {["TG", "FB", "YT"].map((x, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "background .15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.12)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)")
                }
              >
                {x}
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {c.title}
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      color: mutedStrong,
                      fontSize: 13.5,
                      textDecoration: "none",
                      transition: "color .15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = mutedStrong)
                    }
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12.5,
          color: muted,
        }}
      >
        <span>© 2025 store.bestlist.ai · All rights reserved.</span>
        <span>Made with ✦ in Vietnam</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  LandingHeader,
  LandingProblem,
  LandingWhy,
  LandingFinalCTA,
  LandingFooter,
});
