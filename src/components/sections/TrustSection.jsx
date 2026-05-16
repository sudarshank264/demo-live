import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";
import { CheckItem } from "../ui/CheckItem";
import { TRUST_ITEMS } from "../../data/constants";

export function TrustSection() {
  const [ref, vis] = useInView(0.08);
  return (
    <section ref={ref} style={{ background:"#0F3A3E", padding:"0 16px 16px" }}>
      <div style={{ position:"relative", borderRadius:"20px", overflow:"hidden", minHeight:"460px" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=85')", backgroundSize:"cover", backgroundPosition:"center 55%", filter:"grayscale(100%)", opacity: vis ? 0.3 : 0, transition:"opacity 1.4s ease" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(15, 58, 62, 0.94) 0%, rgba(15, 58, 62, 0.88) 40%, rgba(15, 58, 62, 0.82) 70%, rgba(15, 58, 62, 0.75) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 35%, rgba(13,217,196,0.10) 0%, rgba(168,85,247,0.08) 40%, transparent 60%)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:10, padding:"clamp(32px, 6vw, 60px) clamp(16px, 4vw, 48px)", maxWidth:"900px", margin:"0 auto", textAlign:"center" }}>
          <GradBadge>Enterprise Grade</GradBadge>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"clamp(1.6rem,3.5vw,2.4rem)", color:"#fff", letterSpacing:"0.02em", marginBottom:"12px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition:"opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s" }}>
            WHY GOVERNMENT & ENTERPRISE TRUST US
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"14px", color:"rgba(205,190,190,0.62)", lineHeight:1.75, margin:"0 auto 36px", maxWidth:"500px", opacity: vis ? 1 : 0, transition:"opacity 0.9s ease 0.3s" }}>
            SkoraSoft follows compliance-aligned, documentation-driven delivery practices designed for enterprise and government engagements.
          </p>
          <div style={{ background:"rgba(15, 58, 62, 0.85)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"16px", padding:"32px 36px", backdropFilter:"blur(10px)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition:"opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s" }}>
            <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"1rem", color:"#fff", marginBottom:"24px" }}>Our Governance Strengths Include:</h3>
            <div className="responsive-grid" style={{ gap:"14px 32px", textAlign:"left" }}>
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-10px)", transition:`opacity 0.6s ease ${0.5 + i * 0.07}s, transform 0.6s ease ${0.5 + i * 0.07}s` }}>
                  <CheckItem text={item} dark/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
