import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";
import { TESTIMONIALS } from "../../data/constants";

export function BuildTeamSection() {
  const [ref, vis] = useInView(0.06);
  const steps = [
    { icon: "💡", title: "Brainstorm the Mission", desc: "Let's have an enriching discussion about your product/idea. We help you plan your mission timeline and goals." },
    { icon: "🔍", title: "Review + Deploy the Team", desc: "After evaluating requirements, our formation team assembles your team using the resource matrix — signaling who works best with whom." },
    { icon: "🚀", title: "Manage & Scale", desc: "Once deployed, you get full control and visibility of your team and mission dashboard. Manage, monitor, and modify along the way." },
  ];
  return (
    <section ref={ref} style={{ background: "#ADF4E6" }}>
      <div className="responsive-container">
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <GradBadge>How We Work</GradBadge>
          <h2 className="text-fluid-h2" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", marginBottom: "12px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>Let's Build Your Team</h2>
          <p className="text-fluid-p" style={{ fontFamily: "'DM Sans',sans-serif", color: "#777", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.15s" }}>Build, manage, monitor and modify your team with complete control and transparency</p>
        </div>
        <div className="responsive-grid-4" style={{ marginBottom: "64px" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "28px 24px", border: "1px solid rgba(13,217,196,0.12)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(24px)", transition: `opacity 0.7s ease ${0.2 + i * 0.1}s, transform 0.7s ease ${0.2 + i * 0.1}s` }}>
              <span style={{ fontSize: "28px", display: "block", marginBottom: "14px" }}>{s.icon}</span>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "15px", color: "#080c14", marginBottom: "10px" }}>{s.title}</h4>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", color: "#080c14", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        {/* Testimonials */}
        <div style={{ textAlign: "center", marginBottom: "36px", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
          <GradBadge>How it works</GradBadge>
          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#111", marginBottom: "8px" }}>
            Discover how we assist you in building<br className="desktop-only" />and managing high-performing teams
          </h3>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "#888" }}>Explore how we empower you to create and manage elite teams effortlessly</p>
        </div>

        <style>
          {`
            @keyframes scroll-testimonials {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: scroll-testimonials 50s linear infinite;
            }
            .marquee-container:hover .marquee-track {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="marquee-container" style={{ overflow: "hidden", width: "100%", padding: "10px 0 20px", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}>
          <div className="marquee-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} style={{ flex: "0 0 320px", marginRight: "24px", background: "#ffffff", border: "1px solid #e8eef8", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: t.tc, flexShrink: 0, fontFamily: "'Outfit',sans-serif" }}>{t.avatar}</div>
                  <div>
                    <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "13.5px", color: "#111", lineHeight: 1.2 }}>{t.name}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", color: "#999" }}>{t.role}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  {[...Array(5)].map((_, s) => <svg key={s} viewBox="0 0 12 12" width="10" height="10"><path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.6l-3 1.4.6-3.2L1.2 4.5 4.5 4z" fill="url(#gcheck)" /></svg>)}
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "#555", lineHeight: 1.65, whiteSpace: "normal" }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
