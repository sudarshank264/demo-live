import { useInView } from "../../hooks/useInView";
import { GOVERNANCE_ITEMS } from "../../data/constants";

export function GovernanceSection() {
  const [ref, vis] = useInView(0.08);
  return (
    <section ref={ref} style={{ background:"#0F3A3E", padding:"16px" }}>
      <div style={{ position:"relative", borderRadius:"20px", overflow:"hidden", minHeight:"400px" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=85')", backgroundSize:"cover", backgroundPosition:"center right", opacity: vis ? 0.22 : 0, transition:"opacity 1.2s ease", animation: vis ? "panRightToLeft 25s linear infinite alternate" : "none" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(4,6,12,0.98) 0%, rgba(5,8,16,0.95) 40%, rgba(6,14,28,0.90) 60%, rgba(8,20,40,0.65) 80%, rgba(13,217,196,0.06) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 70% 50%, rgba(13,217,196,0.10) 0%, rgba(168,85,247,0.08) 40%, transparent 60%)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:10, padding:"clamp(40px, 6vw, 64px) clamp(24px, 4vw, 56px)" }}>
          <h2 className="text-fluid-h2" style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, color:"#fff", letterSpacing:"-0.01em", lineHeight:1.1, marginBottom:"10px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition:"opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s" }}>
            OUR DELIVERY<br className="desktop-only"/>GOVERNANCE MODEL
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"14px", color:"rgba(200,185,185,0.65)", marginBottom:"32px", opacity: vis ? 1 : 0, transition:"opacity 0.9s ease 0.3s" }}>Our Execution Approach Includes</p>
          <div style={{ display:"flex", flexDirection:"column", gap:"12px", maxWidth:"520px" }}>
            {GOVERNANCE_ITEMS.map((item, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"14px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"10px", padding:"12px 16px", backdropFilter:"blur(4px)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-18px)", transition:`opacity 0.7s ease ${0.35 + i * 0.08}s, transform 0.7s ease ${0.35 + i * 0.08}s` }}>
                <svg viewBox="0 0 22 22" width="20" height="20" style={{ flexShrink:0 }}>
                  <rect x="1.5" y="1.5" width="19" height="19" rx="4" fill="none" stroke="rgba(13,217,196,0.55)" strokeWidth="1.5"/>
                  <path d="M6 11l4 4 6-6" stroke="url(#gcheck)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"13.5px", color:"rgba(225,210,210,0.88)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
