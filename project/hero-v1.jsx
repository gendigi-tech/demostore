// Hero V1 — Cobalt (close to reference, clean tech blue)
function HeroV1() {
  const accent = "#2A5BFF";
  const ink = "#0E1226";
  const muted = "rgba(14,18,38,0.55)";
  const bgCard = "#F5F4EF";

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
        ctaBg={ink}
        ctaFg="#fff"
        ctaText="Dùng thử miễn phí"
      />

      {/* The big rounded hero card */}
      <div
        style={{
          margin: "8px 28px 28px",
          height: "calc(100% - 110px)",
          background: bgCard,
          borderRadius: 26,
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(14,18,38,0.06)",
        }}
      >
        <DotPattern color="rgba(14,18,38,0.16)" size={22} dot={1.2} />

        {/* Top-left: sticky note + checkbox chip */}
        <div style={{ position: "absolute", top: 38, left: 56 }}>
          <StickyNote
            bg="#FFF188"
            rotate={-5}
            width={210}
            height={210}
            pin={true}
            pinColor="#E23B3B"
          >
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.2,
                color: "#3a2f0a",
                fontWeight: 500,
              }}
            >
              Lên kế hoạch tài chính — không còn đoán mò mỗi tháng.
            </div>
          </StickyNote>
          {/* second blank yellow card behind */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: 26,
              width: 200,
              height: 200,
              background: "#FFF7C2",
              transform: "rotate(3deg)",
              zIndex: -1,
              boxShadow: "0 12px 24px rgba(40,30,0,0.10)",
            }}
          />
          {/* checkbox chip */}
          <FloatChip
            rotate={-8}
            style={{
              position: "absolute",
              left: -10,
              top: 168,
              padding: 0,
              width: 56,
              height: 56,
              borderRadius: 14,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: accent,
                width: 36,
                height: 36,
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12 L 10 17 L 19 7"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </FloatChip>
        </div>

        {/* Top-right: deadline card */}
        <div style={{ position: "absolute", top: 50, right: 56 }}>
          <DeadlineCard
            title="Sheet mới ra"
            task="Habit Tracker 30 ngày"
            meta="Reviewed by community"
            time="08:00 — 09:30"
            accent={accent}
          />
        </div>

        {/* Bottom-left: mini sheet preview */}
        <div style={{ position: "absolute", bottom: 60, left: 56 }}>
          <MiniSheetCard
            title="Sheets đang dùng"
            accent={accent}
            rows={[
              {
                icon: "💸",
                color: "#F97316",
                label: "Cashflow tháng 7",
                pct: 64,
              },
              {
                icon: "🌿",
                color: "#10B981",
                label: "Sleep tracker",
                pct: 82,
              },
            ]}
          />
        </div>

        {/* Bottom-right: automation stack */}
        <div style={{ position: "absolute", bottom: 70, right: 56 }}>
          <AutomationStack
            title="Tự động đồng bộ"
            accent={accent}
          />
        </div>

        {/* Center content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          {/* small logo mark */}
          <div
            style={{
              width: 56,
              height: 56,
              background: "#fff",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
              boxShadow:
                "0 10px 24px rgba(14,18,38,0.08), 0 1px 2px rgba(14,18,38,0.04)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: accent,
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" fill="#fff"/>
                <path d="M8 8 H 16 M 8 11 H 16 M 8 14 H 16 M 8 17 H 13" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <h1
            style={{
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: 0,
              color: ink,
            }}
          >
            Ngừng thử nghiệm.
          </h1>
          <h1
            style={{
              fontSize: 78,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: "6px 0 0",
              color: "rgba(14,18,38,0.42)",
              position: "relative",
              display: "inline-block",
            }}
          >
            Bắt đầu{" "}
            <span style={{ position: "relative", color: ink, fontWeight: 600 }}>
              tối ưu
              <HandUnderline color={accent} strokeWidth={5}/>
            </span>
            .
          </h1>

          <p
            style={{
              fontSize: 17,
              color: muted,
              marginTop: 38,
              maxWidth: 520,
              lineHeight: 1.45,
            }}
          >
            Sheets sẵn sàng cho tài chính, sức khỏe và mối quan hệ —
            tối ưu sẵn, chỉ cần dùng.
          </p>

          <a
            href="#"
            style={{
              marginTop: 28,
              background: accent,
              color: "#fff",
              padding: "16px 32px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "-0.01em",
              boxShadow:
                "0 14px 28px rgba(42,91,255,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform .18s ease, box-shadow .18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 18px 32px rgba(42,91,255,0.42), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 14px 28px rgba(42,91,255,0.32), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
          >
            Khám phá Sheets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* tiny social proof */}
          <div
            style={{
              marginTop: 22,
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12.5,
              color: muted,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#FFB088", "#A5C8FF", "#C7B0FF"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid #fff",
                    marginLeft: i === 0 ? 0 : -8,
                  }}
                />
              ))}
            </div>
            2.400+ người đã dùng sheet tuần này
          </div>
        </div>
      </div>
    </div>
  );
}

window.HeroV1 = HeroV1;
