import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";
import { CLIENT_EXP } from "../../data/constants";

export function ClientExperienceSection() {
  const [ref, vis] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: "#ADF4E6" }}>
      <div className="responsive-container">
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <GradBadge>Client Experience</GradBadge>
          <h2 className="text-fluid-h2" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, color: "#0f3a3e", letterSpacing: "0.04em", marginBottom: "12px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
            CLIENT EXPERIENCE MODEL
          </h2>
          <p className="text-fluid-p" style={{ fontFamily: "'DM Sans',sans-serif", color: "#666", marginBottom: "8px", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.15s" }}>
            At SkoraSoft, client relationships are built around long-term reliability and accountability.
          </p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#111", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.25s" }}>Every engagement includes:</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexWrap: "wrap", gap: "16px" }}>
          {CLIENT_EXP.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", flexShrink: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "clamp(100px,13vw,150px)", padding: "0 6px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(22px)", transition: `opacity 0.7s ease ${0.2 + i * 0.09}s, transform 0.7s ease ${0.2 + i * 0.09}s` }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "#fff", boxShadow: "0 4px 20px rgba(13,217,196,0.12),0 1px 6px rgba(0,0,0,0.06)", border: "1px solid rgba(13,217,196,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="url(#gcheck)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", color: "#333", lineHeight: 1.55, textAlign: "center" }}>{item.label}</p>
              </div>
              {i < CLIENT_EXP.length - 1 && (
                <div style={{ flexShrink: 0, paddingTop: "22px", opacity: vis ? 1 : 0, transition: `opacity 0.6s ease ${0.35 + i * 0.09}s` }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                    <path d="M5 12h14M15 8l4 4-4 4" stroke="url(#gcheck)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
