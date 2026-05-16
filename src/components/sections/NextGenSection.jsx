import { useInView } from "../../hooks/useInView";
import { ASCII_FACE } from "../../data/constants";

export function NextGenSection({ scrollTo }) {
  const [ref, vis] = useInView(0.08);
  const ascii = ASCII_FACE;
  return (
    <section ref={ref} style={{ background: "#ADF4E6", padding: "clamp(48px, 8vw, 88px) 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px)" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <div style={{ width: "16px", height: "16px", background: "linear-gradient(135deg,#0dd9c4,#818cf8)", borderRadius: "3px" }} />
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "12px", color: "#0dd9c4", textTransform: "uppercase", letterSpacing: "0.12em" }}>Empowering Your Success</span>
          </div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#111", letterSpacing: "-0.02em", marginBottom: "12px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s" }}>
            The Next Generation of Transformation
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "#777", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
            Experience the powerful advantages we bring to help you navigate your digital transformation journey.
          </p>
        </div>
        <div className="responsive-grid" style={{ borderRadius: "20px", background: "linear-gradient(130deg,#1d3ed8 0%,#1e40af 40%,#2563eb 70%,#3b82f6 100%)", padding: "clamp(24px, 5vw, 52px) clamp(24px, 5vw, 56px)", gap: "clamp(24px, 4vw, 32px)", alignItems: "center", position: "relative", overflow: "hidden", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(28px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "22px 22px", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.3rem)", color: "#fff", letterSpacing: "-0.01em", marginBottom: "16px", lineHeight: 1.15 }}>
              Build your team now
            </h3>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "rgba(215,225,255,0.8)", lineHeight: 1.75, marginBottom: "28px", maxWidth: "320px" }}>
              Ready to explore the possibilities? Let's connect and make it happen.
            </p>
            <button onClick={() => scrollTo("contact")} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", color: "#1d3ed8", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "14px", padding: "13px 24px", borderRadius: "8px", border: "none", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f0f4ff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}>
              Schedule a call with an expert <span>→</span>
            </button>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "flex-end" }}>
            <pre style={{ fontFamily: "'Courier New',monospace", fontSize: "clamp(5.5px,0.85vw,8.5px)", lineHeight: 1.35, color: "rgba(255,255,255,0.2)", margin: 0, userSelect: "none", letterSpacing: "0.04em" }}>{ascii}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
