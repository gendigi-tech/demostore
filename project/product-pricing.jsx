// Product Detail — COMPARISON + PRICING (with bonus stack) + GUARANTEE + FAQ + FINAL CTA

// =====================================
// BEFORE / AFTER COMPARISON
// =====================================
function ProductComparison() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const rows = [
    {
      l: "Thời gian setup ban đầu",
      before: "12–40 giờ tự dựng Excel",
      after: "15 phút tải về & nhập số",
    },
    {
      l: "Theo dõi chi tiêu hàng ngày",
      before: "5–10 phút mỗi ngày, dễ bỏ",
      after: "2 phút mỗi tuần, có nhắc",
    },
    {
      l: "Báo cáo cuối tháng",
      before: "Phải tự tổng hợp, đoán mò",
      after: "Tự update, nhìn 3 giây hiểu",
    },
    {
      l: "Dự báo dòng tiền tương lai",
      before: "Không có",
      after: "Tự động cho 6 tháng tới",
    },
    {
      l: "Quản lý nhiều mục tiêu",
      before: "Quên hoặc bỏ giữa chừng",
      after: "Goal Mapper · tiến độ rõ ràng",
    },
    {
      l: "Cập nhật & cải tiến",
      before: "Tự sửa, dễ bể công thức",
      after: "Update miễn phí trọn đời",
    },
  ];

  return (
    <section
      data-screen-label="08 Comparison"
      style={{
        padding: "100px 28px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
            Trước · Sau
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
            Cuộc sống của bạn — trước và sau hệ thống.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr 1.4fr",
            gap: 0,
            border: "1px solid rgba(14,18,38,0.08)",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 16px 36px rgba(14,18,38,0.06)",
          }}
        >
          {/* header row */}
          <div
            style={{
              padding: "20px 24px",
              background: "#FAFAF7",
              borderBottom: "1px solid rgba(14,18,38,0.08)",
              fontSize: 11,
              fontWeight: 700,
              color: muted,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Tình huống
          </div>
          <div
            style={{
              padding: "20px 24px",
              background: "#FFF4ED",
              borderBottom: "1px solid rgba(14,18,38,0.08)",
              borderLeft: "1px solid rgba(14,18,38,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13.5,
              fontWeight: 700,
              color: "#9A4B12",
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                background: "rgba(249,115,22,0.18)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              ✕
            </span>
            Tự dựng / không có hệ thống
          </div>
          <div
            style={{
              padding: "20px 24px",
              background: "#EFF4FE",
              borderBottom: "1px solid rgba(14,18,38,0.08)",
              borderLeft: "1px solid rgba(14,18,38,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13.5,
              fontWeight: 700,
              color: accent,
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                background: `${accent}20`,
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
            Master Budget Tracker Pro
          </div>

          {/* rows */}
          {rows.map((r, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: ink,
                  borderBottom:
                    i === rows.length - 1
                      ? "none"
                      : "1px solid rgba(14,18,38,0.06)",
                }}
              >
                {r.l}
              </div>
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: 13,
                  color: muted,
                  borderLeft: "1px solid rgba(14,18,38,0.08)",
                  borderBottom:
                    i === rows.length - 1
                      ? "none"
                      : "1px solid rgba(14,18,38,0.06)",
                  background: "#FFFBF8",
                }}
              >
                {r.before}
              </div>
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: 13,
                  color: ink,
                  fontWeight: 500,
                  borderLeft: "1px solid rgba(14,18,38,0.08)",
                  borderBottom:
                    i === rows.length - 1
                      ? "none"
                      : "1px solid rgba(14,18,38,0.06)",
                  background: "#F7FAFF",
                }}
              >
                {r.after}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================
// PRICING SECTION — value stack + price + bonus + guarantee
// =====================================
function ProductPricing() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const valueStack = [
    { l: "Master Budget Tracker Pro — Sheet chính", v: "599.000₫" },
    { l: "Goal Mapper Framework", v: "199.000₫" },
    { l: "Forecast Dashboard 6 tháng", v: "149.000₫" },
    { l: "Bộ 5 video hướng dẫn", v: "99.000₫" },
  ];
  const bonuses = [
    {
      tag: "BONUS 01",
      title: "Habit Tracker Lite",
      desc: "Sheet phụ giúp duy trì thói quen ghi chép tài chính 21 ngày.",
      value: "129.000₫",
      icon: "🎯",
    },
    {
      tag: "BONUS 02",
      title: "Quick Reference PDF",
      desc: "1 trang in ra dán bàn — công thức + phím tắt + best practices.",
      value: "49.000₫",
      icon: "📋",
    },
    {
      tag: "BONUS 03",
      title: "Cộng đồng Telegram VIP",
      desc: "Hỏi đáp 1-1, chia sẻ best practice với 1.000+ thành viên.",
      value: "Vô giá",
      icon: "💬",
    },
  ];

  const totalNumeric = 599 + 199 + 149 + 99 + 129 + 49;
  const totalLabel = totalNumeric.toLocaleString("vi-VN") + ".000₫";

  return (
    <section
      id="pricing"
      data-screen-label="09 Pricing"
      style={{
        padding: "100px 28px",
        background: "#FAFAF7",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
            Bảng giá · ưu đãi giới hạn
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.4vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              color: ink,
            }}
          >
            Giá trị thực:{" "}
            <span
              style={{
                fontSize: "0.9em",
                color: muted,
                textDecoration: "line-through",
                fontWeight: 500,
              }}
            >
              {totalLabel}
            </span>
          </h2>
          <p style={{ fontSize: 16, color: muted, marginTop: 12 }}>
            Hôm nay bạn chỉ trả{" "}
            <strong style={{ color: ink, fontWeight: 700 }}>299.000₫</strong> —
            tiết kiệm{" "}
            <span style={{ color: "#10B981", fontWeight: 700 }}>
              {Math.round(((totalNumeric - 299) / totalNumeric) * 100)}%
            </span>
          </p>
        </div>

        {/* Main pricing card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            background: "#fff",
            borderRadius: 24,
            border: "1px solid rgba(14,18,38,0.08)",
            overflow: "hidden",
            boxShadow:
              "0 28px 56px rgba(14,18,38,0.10), 0 4px 8px rgba(14,18,38,0.05)",
          }}
        >
          {/* LEFT — value stack */}
          <div style={{ padding: "36px 32px" }}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              ✦ Bạn nhận được
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 28,
              }}
            >
              {valueStack.map((v, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom:
                      i === valueStack.length - 1
                        ? "none"
                        : "1px solid rgba(14,18,38,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                    <span style={{ fontSize: 13.5, color: ink, fontWeight: 500 }}>
                      {v.l}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: muted,
                      fontWeight: 600,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {v.v}
                  </span>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: "#F97316",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              🎁 Quà tặng kèm
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {bonuses.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 14px",
                    background: "#FFF4ED",
                    borderRadius: 10,
                    border: "1px dashed rgba(249,115,22,0.3)",
                  }}
                >
                  <span style={{ fontSize: 18, flex: "0 0 18px" }}>{b.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 8,
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: ink,
                        }}
                      >
                        {b.tag} · {b.title}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "#9A4B12",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {b.value}
                      </span>
                    </div>
                    <div style={{ fontSize: 11.5, color: muted, lineHeight: 1.45 }}>
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — price + CTA */}
          <div
            style={{
              padding: "36px 32px",
              background: `linear-gradient(160deg, ${ink} 0%, #1a2244 100%)`,
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-30%",
                right: "-10%",
                width: 400,
                height: 400,
                background:
                  "radial-gradient(ellipse, rgba(42,91,255,0.30), transparent 70%)",
                filter: "blur(40px)",
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
                  background: "rgba(255,107,156,0.15)",
                  border: "1px solid rgba(255,107,156,0.3)",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FF8FAE",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                ⚡ Còn 27 suất với giá này
              </div>

              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "line-through",
                  }}
                >
                  {totalLabel}
                </span>
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  marginBottom: 8,
                }}
              >
                299.000₫
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 28,
                }}
              >
                Một lần · trọn đời · không phí ẩn
              </div>

              <a
                href="#checkout"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: accent,
                  color: "#fff",
                  padding: "18px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "-0.01em",
                  boxShadow:
                    "0 18px 36px rgba(42,91,255,0.40), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "transform .18s ease, box-shadow .18s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 22px 42px rgba(42,91,255,0.50), inset 0 1px 0 rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 36px rgba(42,91,255,0.40), inset 0 1px 0 rgba(255,255,255,0.2)";
                }}
              >
                Bắt đầu tối ưu hóa ngay hôm nay
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

              <div
                style={{
                  marginTop: 14,
                  textAlign: "center",
                  fontSize: 11.5,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                💳 Thanh toán an toàn · ⚡ Nhận file trong 60 giây
              </div>

              {/* payment icons */}
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  justifyContent: "center",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                {["VISA", "MC", "MoMo", "ZaloPay", "VietQR"].map((p) => (
                  <span
                    key={p}
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 8px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 6,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div
          style={{
            marginTop: 32,
            background: "#fff",
            borderRadius: 18,
            border: "1px solid rgba(14,18,38,0.08)",
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            gap: 28,
            boxShadow: "0 12px 28px rgba(14,18,38,0.05)",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: `linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              flex: "0 0 80px",
              boxShadow: "0 8px 18px rgba(16,185,129,0.20)",
            }}
          >
            🛡️
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: "#15803D",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Cam kết của Bestlist
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: ink,
                letterSpacing: "-0.02em",
                marginBottom: 6,
              }}
            >
              Hoàn tiền 100% trong 14 ngày — không hỏi lý do.
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: muted,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Nếu sau 14 ngày dùng thử bạn cảm thấy hệ thống không phù hợp, gửi
              email đến hello@bestlist.ai — chúng tôi hoàn 100% tiền, bạn vẫn
              giữ được toàn bộ file đã tải về.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================
// FAQ
// =====================================
function ProductFAQ() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";

  const [open, setOpen] = React.useState(0);

  const faqs = [
    {
      q: "Tôi không biết dùng Excel / Google Sheets — có dùng được không?",
      a: "Hoàn toàn được. Hệ thống đi kèm 5 video hướng dẫn ngắn (mỗi video 60-90 giây) chỉ cho bạn cách nhập liệu cơ bản. Không cần biết công thức — bạn chỉ điền số, sheet tự tính tất cả.",
    },
    {
      q: "Sheet này dùng trên Google Sheets hay Excel?",
      a: "Bạn nhận được cả 2 bản: Google Sheets (.xlsx import) và Microsoft Excel (.xlsx). Khuyên dùng Google Sheets vì có thể truy cập từ điện thoại miễn phí.",
    },
    {
      q: "Mua một lần dùng được mãi mãi đúng không?",
      a: "Đúng. Bạn trả 299.000₫ một lần và sở hữu trọn đời — bao gồm tất cả các bản cập nhật trong tương lai. Không có phí định kỳ, không có subscription.",
    },
    {
      q: "Nếu tôi không hài lòng thì sao?",
      a: "Trong 14 ngày kể từ khi mua, bạn có thể email hello@bestlist.ai yêu cầu hoàn tiền 100% mà không cần lý do. Bạn vẫn giữ được file đã tải về.",
    },
    {
      q: "Hệ thống có phù hợp với người làm freelancer / chủ doanh nghiệp nhỏ?",
      a: "Có. Sheet hỗ trợ phân loại theo nguồn thu nhập (lương, freelance, kinh doanh, đầu tư) và có cột riêng để theo dõi thu chi theo dự án. Phù hợp cả cá nhân lẫn chủ doanh nghiệp nhỏ.",
    },
    {
      q: "Tôi có thể chia sẻ file với vợ/chồng / đối tác không?",
      a: "Được. Sheet không có DRM. Bạn có thể chia sẻ quyền edit với bao nhiêu người cũng được trong gia đình hoặc đội nhóm — chúng tôi không kiểm soát.",
    },
  ];

  return (
    <section
      id="faq"
      data-screen-label="10 FAQ"
      style={{
        padding: "100px 28px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
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
            Câu hỏi thường gặp
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
            Trước khi bạn{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                color: accent,
                fontWeight: 500,
              }}
            >
              hỏi.
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: "#FAFAF7",
                  borderRadius: 14,
                  border: `1px solid ${
                    isOpen ? "rgba(42,91,255,0.25)" : "rgba(14,18,38,0.06)"
                  }`,
                  overflow: "hidden",
                  transition: "border-color .2s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 14,
                    color: ink,
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {f.q}
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isOpen ? accent : "rgba(14,18,38,0.06)",
                      color: isOpen ? "#fff" : ink,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "0 0 28px",
                      fontSize: 14,
                      transition: "all .2s",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 22px 20px",
                      fontSize: 14,
                      color: muted,
                      lineHeight: 1.6,
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =====================================
// FINAL CTA
// =====================================
function ProductFinalCTA() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";

  return (
    <section
      data-screen-label="11 Final CTA"
      style={{ padding: "0 28px 60px" }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          background: `linear-gradient(135deg, ${accent} 0%, #1B43D9 60%, ${ink} 100%)`,
          borderRadius: 28,
          padding: "80px 48px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "10%",
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
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            ✦ Quyết định nằm ở đây
          </div>
          <h2
            style={{
              fontSize: "clamp(40px, 5.6vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              margin: 0,
              color: "#fff",
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Bắt đầu{" "}
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              tối ưu hóa
            </span>{" "}
            ngay hôm nay.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              marginTop: 22,
              maxWidth: 560,
              margin: "22px auto 0",
              lineHeight: 1.55,
            }}
          >
            299.000₫ hôm nay · vs. nhiều năm sống trong sự mơ hồ tài chính.
            Lựa chọn này thật sự dễ hơn bạn nghĩ.
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
              href="#pricing"
              style={{
                background: "#fff",
                color: ink,
                padding: "18px 36px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                boxShadow:
                  "0 18px 36px rgba(14,18,38,0.30), inset 0 1px 0 rgba(255,255,255,0.6)",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "transform .18s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Mua ngay 299.000₫
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
            <a
              href="#faq"
              style={{
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1.5px solid rgba(255,255,255,0.45)",
                paddingBottom: 2,
                transition: "border-color .15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.45)")
              }
            >
              Tôi còn thắc mắc ↗
            </a>
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 12.5,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.02em",
            }}
          >
            🛡️ Hoàn tiền 14 ngày · ⚡ Tải về dùng ngay · 🔁 Cập nhật trọn đời
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  ProductComparison,
  ProductPricing,
  ProductFAQ,
  ProductFinalCTA,
});
