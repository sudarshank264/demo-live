import { useInView } from "../../hooks/useInView";
import { Reveal } from "../ui/Reveal";
import { GradBadge } from "../ui/GradBadge";
import { SERVICES } from "../../data/constants";

export function ContactSection() {
  const [ref, vis] = useInView(0.08);
  return (
    <section ref={ref} id="contact" style={{ background: "#0F3A3E", padding: "clamp(48px, 8vw, 96px) 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px)" }}>
        <div className="responsive-grid" style={{ gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>
          <Reveal dir="left">
            <GradBadge>Get In Touch</GradBadge>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "18px" }}>
              Ready to <span style={{ color: "#0dd9c4" }}>get started?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14.5px", color: "rgba(185,175,175,0.65)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "420px" }}>
              Have a full brief or just a rough idea? We'd love to hear from you. Expect a reply within 24 hours.
            </p>
            {[["📧", "Email", "hello@skorasoft.com"], ["📞", "Phone", "+91 98765 43210"], ["📍", "Location", "Greater Noida, Uttar Pradesh, India"]].map(([ic, l, v]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(13,217,196,0.08)", border: "1px solid rgba(13,217,196,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{ic}</div>
                <div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(180,165,165,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 500, color: "rgba(230,220,220,0.88)" }}>{v}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal dir="right" delay={0.15}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "36px 32px", backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[["Your Name", "text"], ["Email Address", "email"], ["Company (optional)", "text"]].map(([ph, tp]) => (
                  <input key={ph} type={tp} placeholder={ph} style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "#fff", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "rgba(13,217,196,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                ))}
                <select style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "rgba(200,190,190,0.6)", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", outline: "none", boxSizing: "border-box" }}>
                  <option value="">Service you need</option>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea rows={4} placeholder="Tell us about your project..." style={{ width: "100%", padding: "14px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "#fff", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", outline: "none", resize: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "rgba(13,217,196,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                <button style={{ width: "100%", padding: "15px", borderRadius: "10px", background: "linear-gradient(135deg,#0dd9c4,#38bdf8,#818cf8)", color: "#0F3A3E", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 0 24px rgba(13,217,196,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg,#0a9e90,#6d28d9)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(135deg,#0dd9c4,#818cf8)"; e.currentTarget.style.transform = "none"; }}>
                  Send Message →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
