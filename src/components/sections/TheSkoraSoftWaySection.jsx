import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";

export function TheSkoraSoftWaySection() {
  const [ref, vis] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: "#BBD2CF" }}>
      <div className="responsive-container">
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <GradBadge>How It Works</GradBadge>
          <h2 className="text-fluid-h2" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, color: "#0f3a3e", letterSpacing: "-0.02em", marginBottom: "14px", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s" }}>
            The SkoraSoft Way
          </h2>
          <p className="text-fluid-p" style={{ fontFamily: "'DM Sans',sans-serif", color: "#666", maxWidth: "540px", margin: "0 auto", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
            Most vendors rely on individuals — quality varies. SkoraSoft operates on a system-governed delivery model ensuring consistency, accountability, and transparency.
          </p>
        </div>
        <div className="responsive-flex" style={{ gap: "40px", alignItems: "center", justifyContent: "center" }}>
          {/* Others */}
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-40px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0dd9c4", marginBottom: "24px" }}>Others Way</h3>
            {["Individual Driven", "Reactive Delivery", "Short-Term Engagement", "Limited Accountability"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", border: "2px solid #0dd9c4", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "#555" }}>{item}</span>
              </div>
            ))}
          </div>
          {/* Center 3D Illustration */}
          <div style={{ width: "clamp(260px,28vw,340px)", margin: "0 24px", borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5", opacity: vis ? 1 : 0, transition: "opacity 1.2s ease 0.15s", background: "linear-gradient(145deg,#080c18 0%,#0d1428 40%,#0a1020 70%,#070c1a 100%)", border: "1px solid rgba(13,217,196,0.15)", boxShadow: "0 32px 80px rgba(13,217,196,0.12), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)", flexShrink: 0, position: "relative" }}>
            {/* Top gradient border line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,transparent,#0dd9c4,#818cf8,transparent)", zIndex: 2 }} />
            {/* Glow orbs inside card */}
            <div style={{ position: "absolute", top: "-20%", left: "-20%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle,rgba(13,217,196,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />

            <svg viewBox="0 0 280 360" width="100%" height="100%" style={{ display: "block" }}>
              <defs>
                <linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0dd9c4" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
                <linearGradient id="tg3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0dd9c4" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.05" />
                </linearGradient>
                <filter id="glow1">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softblur"><feGaussianBlur stdDeviation="8" /></filter>
              </defs>

              {/* Background grid */}
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={40 + i * 40} x2="280" y2={40 + i * 40} stroke="rgba(13,217,196,0.05)" strokeWidth="0.5" />
              ))}
              {[...Array(8)].map((_, i) => (
                <line key={`v${i}`} x1={20 + i * 36} y1="0" x2={20 + i * 36} y2="360" stroke="rgba(13,217,196,0.04)" strokeWidth="0.5" />
              ))}

              {/* Central glowing orb */}
              <ellipse cx="140" cy="180" rx="70" ry="70" fill="url(#tg3)" filter="url(#softblur)" />

              {/* OUTER ORBIT RING */}
              <ellipse cx="140" cy="180" rx="100" ry="30" fill="none" stroke="url(#tg1)" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 6" transform="rotate(-15,140,180)" />
              <ellipse cx="140" cy="180" rx="80" ry="24" fill="none" stroke="#818cf8" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 8" transform="rotate(30,140,180)" />

              {/* FLOATING PLATFORM */}
              <polygon points="140,220 200,240 140,260 80,240" fill="rgba(13,217,196,0.10)" stroke="url(#tg1)" strokeWidth="0.8" />
              <polygon points="200,240 200,270 140,290 140,260" fill="rgba(56,189,248,0.07)" stroke="#38bdf8" strokeWidth="0.6" />
              <polygon points="80,240 140,260 140,290 80,270" fill="rgba(129,140,248,0.07)" stroke="#818cf8" strokeWidth="0.6" />

              {/* 3D FIGURE / ROBOT */}
              <ellipse cx="140" cy="170" rx="28" ry="35" fill="rgba(13,217,196,0.08)" filter="url(#softblur)" />

              <rect x="127" y="200" width="10" height="22" rx="5" fill="rgba(56,189,248,0.5)" stroke="#38bdf8" strokeWidth="0.8" />
              <rect x="143" y="200" width="10" height="22" rx="5" fill="rgba(56,189,248,0.5)" stroke="#38bdf8" strokeWidth="0.8" />
              <rect x="123" y="218" width="16" height="6" rx="3" fill="rgba(13,217,196,0.6)" stroke="#0dd9c4" strokeWidth="0.7" />
              <rect x="141" y="218" width="16" height="6" rx="3" fill="rgba(13,217,196,0.6)" stroke="#0dd9c4" strokeWidth="0.7" />

              <rect x="118" y="155" width="44" height="50" rx="10" fill="rgba(8,18,40,0.9)" stroke="url(#tg1)" strokeWidth="1.2" />
              <rect x="125" y="163" width="30" height="20" rx="4" fill="rgba(13,217,196,0.12)" stroke="#0dd9c4" strokeWidth="0.6" />
              <circle cx="131" cy="170" r="3" fill="#0dd9c4" opacity="0.9" filter="url(#glow1)" />
              <circle cx="140" cy="170" r="3" fill="#38bdf8" opacity="0.9" filter="url(#glow1)" />
              <circle cx="149" cy="170" r="3" fill="#818cf8" opacity="0.9" filter="url(#glow1)" />
              <rect x="127" y="177" width="26" height="2" rx="1" fill="rgba(13,217,196,0.4)" />

              <rect x="100" y="158" width="14" height="36" rx="7" fill="rgba(8,18,40,0.9)" stroke="url(#tg1)" strokeWidth="1" />
              <rect x="166" y="158" width="14" height="36" rx="7" fill="rgba(8,18,40,0.9)" stroke="url(#tg1)" strokeWidth="1" />
              <circle cx="107" cy="198" r="7" fill="rgba(13,217,196,0.4)" stroke="#0dd9c4" strokeWidth="0.8" />
              <circle cx="173" cy="198" r="7" fill="rgba(13,217,196,0.4)" stroke="#0dd9c4" strokeWidth="0.8" />

              <rect x="132" y="148" width="16" height="10" rx="4" fill="rgba(13,217,196,0.3)" stroke="#0dd9c4" strokeWidth="0.7" />

              <rect x="115" y="118" width="50" height="35" rx="12" fill="rgba(8,18,40,0.95)" stroke="url(#tg1)" strokeWidth="1.2" />
              <rect x="120" y="124" width="40" height="18" rx="6" fill="rgba(13,217,196,0.15)" stroke="#0dd9c4" strokeWidth="0.7" />
              <rect x="124" y="128" width="12" height="8" rx="3" fill="#0dd9c4" opacity="0.9" filter="url(#glow1)" />
              <rect x="144" y="128" width="12" height="8" rx="3" fill="#0dd9c4" opacity="0.9" filter="url(#glow1)" />
              <line x1="140" y1="118" x2="140" y2="104" stroke="#0dd9c4" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="140" cy="101" r="4" fill="#0dd9c4" filter="url(#glow1)" opacity="0.9" />

              <g transform="translate(22,120)">
                <rect width="60" height="36" rx="6" fill="rgba(8,14,30,0.9)" stroke="rgba(13,217,196,0.4)" strokeWidth="0.7" />
                <rect x="6" y="8" width="20" height="2" rx="1" fill="#0dd9c4" opacity="0.7" />
                <rect x="6" y="14" width="32" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
                <rect x="6" y="20" width="26" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
                <circle cx="48" cy="10" r="5" fill="rgba(13,217,196,0.3)" stroke="#0dd9c4" strokeWidth="0.6" />
                <path d="M45,10 l2,2 4-4" stroke="#0dd9c4" strokeWidth="1" fill="none" strokeLinecap="round" />
              </g>

              <g transform="translate(198,130)">
                <rect width="58" height="34" rx="6" fill="rgba(8,14,30,0.9)" stroke="rgba(129,140,248,0.4)" strokeWidth="0.7" />
                <rect x="6" y="7" width="18" height="2" rx="1" fill="#818cf8" opacity="0.7" />
                <rect x="6" y="13" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
                <rect x="6" y="19" width="22" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
                <circle cx="46" cy="9" r="5" fill="rgba(168,85,247,0.3)" stroke="#818cf8" strokeWidth="0.6" />
                <line x1="43" y1="7" x2="49" y2="13" stroke="#818cf8" strokeWidth="1" strokeLinecap="round" />
                <line x1="49" y1="7" x2="43" y2="13" stroke="#818cf8" strokeWidth="1" strokeLinecap="round" />
              </g>

              <g transform="translate(90,58)">
                <rect width="100" height="28" rx="14" fill="rgba(8,14,30,0.9)" stroke="url(#tg1)" strokeWidth="0.8" />
                <circle cx="14" cy="14" r="5" fill="rgba(13,217,196,0.3)" stroke="#0dd9c4" strokeWidth="0.6" />
                <rect x="24" y="10" width="50" height="2.5" rx="1.25" fill="url(#tg1)" opacity="0.8" />
                <rect x="24" y="16" width="34" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
              </g>

              <line x1="82" y1="138" x2="118" y2="155" stroke="rgba(13,217,196,0.2)" strokeWidth="0.6" strokeDasharray="3 4" />
              <line x1="198" y1="147" x2="166" y2="165" stroke="rgba(129,140,248,0.2)" strokeWidth="0.6" strokeDasharray="3 4" />
              <line x1="140" y1="86" x2="140" y2="118" stroke="rgba(13,217,196,0.2)" strokeWidth="0.6" strokeDasharray="3 4" />

              {[[40, 60], [240, 55], [30, 290], [250, 285], [60, 200], [220, 195], [140, 30], [80, 320], [200, 315]].map(([px, py], i) => (
                <circle key={i} cx={px} cy={py} r={i % 3 === 0 ? 2 : 1.2} fill={i % 3 === 0 ? "#0dd9c4" : i % 3 === 1 ? "#818cf8" : "#38bdf8"} opacity={0.3 + ((i * 7) % 5) * 0.1} />
              ))}

              <text x="140" y="320" textAnchor="middle" fill="url(#tg1)" fontSize="11" fontFamily="'Outfit',sans-serif" fontWeight="700" letterSpacing="3" opacity="0.8">SYSTEM GOVERNED</text>
              <line x1="70" y1="325" x2="115" y2="325" stroke="url(#tg1)" strokeWidth="0.5" opacity="0.4" />
              <line x1="165" y1="325" x2="210" y2="325" stroke="url(#tg1)" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>
          {/* SkoraSoft */}
          <div style={{ textAlign: "right", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(40px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#111", marginBottom: "24px" }}>SkoraSoft</h3>
            {["System Governed", "Predictable Execution", "Long-Term Partnership", "Transparent Governance"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "12px", marginBottom: "14px" }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "#222", fontWeight: 500 }}>{item}</span>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg,#0dd9c4,#818cf8)", flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
