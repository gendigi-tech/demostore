// Hero V2 — Sage / Paper (warm cream, ink, sage green; paper feel)
function HeroV2() {
  const accent = "#2F8A57";      // sage green
  const accentDeep = "#1F6840";
  const ink = "#1A2018";
  const muted = "rgba(26,32,24,0.58)";
  const paper = "#F4EFE3";       // cream paper

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#FBF8F0",
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
        ctaBg={accentDeep}
        ctaFg="#fff"
        ctaText="Dùng thử miễn phí"
      />

      <div
        style={{
          margin: "8px 28px 28px",
          height: "calc(100% - 110px)",
          background: paper,
          borderRadius: 26,
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(26,32,24,0.06)",
          // subtle paper grain via dual radial overlays
          backgroundImage:
            `radial-gradient(at 20% 10%, rgba(255,255,255,0.5), transparent 50%),
             radial-gradient(at 80% 90%, rgba(47,138,87,0.06), transparent 55%)`,
        }}
      >
        {/* grid lines (faint, like ruled paper) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,32,24,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            maskImage:
              "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 35%, #000 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 35%, #000 80%)",
            pointerEvents: "none",
          }}
        />

        {/* Top-left: sage-tinted sticky note */}
        <div style={{ position: "absolute", top: 44, left: 60 }}>
          <StickyNote
            bg="#CFE8D6"
            rotate={-3}
            width={224}
            height={196}
            pin={true}
            pinColor="#3a2f0a"
            shadow="0 14px 30px rgba(20,40,28,0.16), 0 2px 4px rgba(20,40,28,0.08)"
          >
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.22,
                color: "#1c3a26",
                fontWeight: 500,
              }}
            >
              Một sheet — một thói quen tốt hơn cho hôm nay.
            </div>
          </StickyNote>
          {/* taped corner */}
          <div
            style={{
              position: "absolute",
              top: -10,
              left: 80,
              width: 60,
              height: 18,
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(26,32,24,0.05)",
              transform: "rotate(-6deg)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
            }}
          />
        </div>

        {/* Top-right: deadline-style card recast as "Sheet sẵn dùng" */}
        <div style={{ position: "absolute", top: 60, right: 60 }}>
          <DeadlineCard
            title="Sheet hôm nay"
            task="Bảng chi tiêu tuần"
            meta="42 templates · 4.9★"
            time="Mới · Tháng 7"
            accent={accent}
          />
        </div>

        {/* Bottom-left: a paper-style mini sheet (different vibe) */}
        <div style={{ position: "absolute", bottom: 70, left: 60 }}>
          <div
            style={{
              width: 320,
              background: "#fff",
              borderRadius: 14,
              padding: "16px 18px",
              boxShadow:
                "0 18px 40px rgba(20,40,28,0.10), 0 2px 4px rgba(20,40,28,0.05)",
              border: "1px solid rgba(26,32,24,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Tài chính · tháng 7
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: accent,
                  fontWeight: 600,
                  padding: "3px 8px",
                  background: `${accent}15`,
                  borderRadius: 999,
                }}
              >
                +18%
              </div>
            </div>
            {/* mini bar chart */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 5,
                height: 56,
              }}
            >
              {[35, 50, 28, 62, 44, 70, 58, 80, 66, 90].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background:
                      i === 9
                        ? accent
                        : i % 2 === 0
                        ? "rgba(47,138,87,0.6)"
                        : "rgba(47,138,87,0.35)",
                    borderRadius: 3,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                fontSize: 10,
                color: muted,
              }}
            >
              <span>T2</span>
              <span>T3</span>
              <span>T4</span>
              <span>T5</span>
              <span>T6</span>
              <span>T7</span>
              <span>CN</span>
            </div>
          </div>
        </div>

        {/* Bottom-right: automation stack with sage accent */}
        <div style={{ position: "absolute", bottom: 80, right: 60 }}>
          <AutomationStack
            title="Tự động đồng bộ"
            accent={accent}
            rotate={2}
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
          {/* small badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px 6px 8px",
              background: "#fff",
              border: "1px solid rgba(26,32,24,0.08)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              color: muted,
              marginBottom: 28,
              boxShadow:
                "0 4px 12px rgba(20,40,28,0.05)",
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: 5,
                background: accent,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24">
                <path d="M5 12 L 10 17 L 19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </span>
            store.bestlist.ai · v2.1
          </div>

          <h1
            style={{
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              margin: 0,
              color: ink,
              fontFamily: "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
            }}
          >
            Ngừng thử nghiệm.
          </h1>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              margin: "4px 0 0",
              color: "rgba(26,32,24,0.45)",
              fontFamily: "'Instrument Serif', 'Source Serif Pro', Georgia, serif",
              fontStyle: "italic",
              position: "relative",
              display: "inline-block",
            }}
          >
            bắt đầu{" "}
            <span style={{ position: "relative", color: accentDeep, fontStyle: "italic", fontWeight: 500 }}>
              tối ưu
              <HandUnderline color={accent} strokeWidth={4}/>
            </span>
            .
          </h1>

          <p
            style={{
              fontSize: 17,
              color: muted,
              marginTop: 38,
              maxWidth: 500,
              lineHeight: 1.5,
              fontFamily: "'Geist', sans-serif",
            }}
          >
            Sheets được thiết kế sẵn cho tài chính, sức khỏe và mối quan hệ — bạn chỉ việc dùng và sống tốt hơn.
          </p>

          <a
            href="#"
            style={{
              marginTop: 30,
              background: accentDeep,
              color: "#fff",
              padding: "16px 32px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "-0.01em",
              boxShadow:
                "0 14px 28px rgba(31,104,64,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform .18s ease, box-shadow .18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 18px 34px rgba(31,104,64,0.42), inset 0 1px 0 rgba(255,255,255,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 14px 28px rgba(31,104,64,0.32), inset 0 1px 0 rgba(255,255,255,0.18)";
            }}
          >
            Khám phá Sheets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div
            style={{
              marginTop: 22,
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12.5,
              color: muted,
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <div style={{ display: "flex" }}>
              {["#A8C5A4", "#D4B98B", "#C5A8E0"].map((c, i) => (
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
            2.400+ người đang dùng sheet này
          </div>
        </div>
      </div>
    </div>
  );
}

window.HeroV2 = HeroV2;
