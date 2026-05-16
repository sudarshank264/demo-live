export function MarqueeSection() {
  const clients = [
    "RADIUS", "NAWAH", "Jingl", "EETBAAR", "NOVATEK", "VORTEX",
    "Zephyr", "LUMIQ", "STRATIX", "Orbis", "PINNACLE", "NEXGEN"
  ];

  return (
    <section
      style={{
        background: "#0F3A3E",
        padding: "48px 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "11px",
          color: "rgba(248, 243, 245, 0.28)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "32px",
        }}
      >
        Clients we are serving right now
      </p>

      {/* ===== LINE 1 (Right → Left) ===== */}
      <div className="marquee-mask" style={{ marginBottom: "20px" }}>
        <div className="marquee">
          {[...Array(3)].map((_, p) => (
            <div key={p} className="marquee-group">
              {clients.map((c, i) => (
                <span key={i} className="marquee-item">
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== LINE 2 (Left → Right) ===== */}
      <div className="marquee-mask">
        <div className="marquee reverse">
          {[...Array(3)].map((_, p) => (
            <div key={p} className="marquee-group">
              {clients.map((c, i) => (
                <span key={i} className="marquee-item">
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}