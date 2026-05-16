import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";
import { INDUSTRIES, TECHNOLOGIES, ASCII_GLOBE } from "../../data/constants";

export function IndustriesSection() {
  const [ref, vis] = useInView(0.06);
  const [hovI, setHovI] = useState(null);

  return (
    <section ref={ref} id="industries" style={{ background: "#0F3A3E" }}>
      <div className="responsive-container" style={{ paddingBottom: 0 }}>
        <div
          className="responsive-flex"
          style={{ alignItems: "center", paddingBottom: "56px" }}
        >
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateX(-30px)",
              transition:
                "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            <GradBadge>Industries</GradBadge>

            <h2
              className="text-fluid-h2"
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Delivering innovative marketing
              <br className="desktop-only" />
              and branding solutions
            </h2>

            <p
              className="text-fluid-p"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "28px",
                maxWidth: "420px",
              }}
            >
              At the forefront of digital strategy, we provide cutting-edge
              branding, SEO, and targeted advertising tailored to your
              industry. Our expertise drives transformative growth across
              global markets.
            </p>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "#fff",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "11px 22px",
                borderRadius: "8px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0dd9c4";
                e.currentTarget.style.color = "#0dd9c4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Choose Transform <span>→</span>
            </button>
          </div>

          <div
            className="stack-on-mobile"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateX(30px)",
              transition:
                "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            <pre
              style={{
                fontFamily: "'Courier New',monospace",
                fontSize: "clamp(6px,1.1vw,10px)",
                lineHeight: 1.35,
                color: "rgba(200,200,200,0.35)",
                margin: 0,
                userSelect: "none",
                letterSpacing: "0.04em",
              }}
            >
              {ASCII_GLOBE}
            </pre>
          </div>
        </div>

        {/* Industry cards */}
        <div
          className="responsive-grid"
          style={{
            gap: "16px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "40px",
          }}
        >
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.05)",
                cursor: "pointer",
                background: hovI === i ? "#f5f5f5" : "#ffffff",
                boxShadow:
                  hovI === i
                    ? "0 20px 40px rgba(0,0,0,0.12)"
                    : "0 4px 12px rgba(0,0,0,0.05)",
                transform:
                  hovI === i
                    ? "scale(1.04) translateY(-6px)"
                    : "scale(1)",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                opacity: vis ? 1 : 0,
              }}
              onMouseEnter={() => setHovI(i)}
              onMouseLeave={() => setHovI(null)}
            >
              <span
                style={{
                  fontSize: "26px",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {ind.icon}
              </span>

              <h4
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#000",
                  marginBottom: "8px",
                }}
              >
                {ind.title}
              </h4>

              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech logos */}
        <div
          id="technologies"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              marginRight: "28px",
              whiteSpace: "nowrap",
              letterSpacing: "0.08em",
            }}
          >
            Tools and platforms we leverage
          </span>

          <div
            style={{
              display: "flex",
              overflow: "hidden",
              whiteSpace: "nowrap",
              flex: 1,
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "32px",
                animation: "marquee 20s linear infinite",
              }}
            >
              {[...TECHNOLOGIES, ...TECHNOLOGIES].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    opacity: 0.4,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "0.4")
                  }
                >
                  <span style={{ fontSize: "18px" }}>{t.icon}</span>
                  <span
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}