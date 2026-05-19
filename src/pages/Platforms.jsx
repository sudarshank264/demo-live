import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  ArrowRight,
  Monitor,
  Search,
  Target,
  Megaphone,
  Globe,
  CheckCircle2,
} from "lucide-react";

const PLATFORMS_DATA = [
  {
    id: "brand-studio",
    title: "SkoraSoft Brand Studio",
    subtitle: "Creative Identity Management",
    description: "Build and manage a consistent brand identity across all digital touchpoints with our comprehensive suite of creative tools. Empower your team to deliver stunning visual experiences.",
    features: ["Brand Asset Management", "Centralized Design Systems", "Automated Creative Workflows"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    icon: <Monitor size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#000000",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: false
  },
  {
    id: "growth-hub",
    title: "SkoraSoft Growth Hub",
    subtitle: "Accelerated Business Scaling",
    description: "Unlock new growth opportunities with advanced user acquisition, engagement, and retention strategies. Track performance across your entire funnel in real-time.",
    features: ["Advanced A/B Testing Engine", "User Journey Mapping", "Conversion Rate Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: <Target size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#060A10",
    textColor: "#ffffff",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: true
  },
  {
    id: "marketing-suite",
    title: "SkoraSoft Marketing Suite",
    subtitle: "Omnichannel Campaign Execution",
    description: "Plan, execute, and analyze your marketing campaigns across multiple channels from a single, unified platform. Deliver personalized experiences at scale.",
    features: ["Intelligent Email Automation", "Cross-Channel Analytics", "Dynamic Campaign Planning"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    icon: <Megaphone size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#ffffff",
    reversed: false
  },
  {
    id: "analytics-pro",
    title: "SkoraSoft Analytics Pro",
    subtitle: "Data-Driven Decision Making",
    description: "Transform raw data into actionable insights with powerful analytics, custom dashboards, and predictive modeling. Understand your customers better than ever.",
    features: ["Real-Time Interactive Dashboards", "AI-Powered Predictive Analytics", "Custom Reporting Modules"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    icon: <Search size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#060A10",
    textColor: "#ffffff",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: true
  },
  {
    id: "social-engine",
    title: "SkoraSoft Social Engine",
    subtitle: "Social Media Command Center",
    description: "Manage your social presence, engage with your audience, and monitor brand sentiment effectively. Never miss a conversation that matters to your brand.",
    features: ["Intelligent Social Scheduling", "Real-Time Sentiment Analysis", "Unified Community Management"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2674&auto=format&fit=crop",
    icon: <Globe size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#F8FAFC",
    reversed: false
  }
];

export function Platforms() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollTo = (id) => {
    if (id === 'home') {
      navigate('/');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <div style={{ background: "#060A10", color: "#fff" }}>
      <Navbar scrollTo={scrollTo} />

      {/* Hero Section */}
      <section style={{
        position: "relative",
        padding: "180px 32px 120px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "70vh",
        background: "#ADF4E6"
      }}>
        {/* Background Gradients */}
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.15) 0%, transparent 60%)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.1) 0%, transparent 60%)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.5, zIndex: 0 }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "99px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "24px", backdropFilter: "blur(10px)" }}>
            <span style={{ color: "#0dd9c4", fontSize: "14px", fontWeight: 600 }}>Our Proprietary Technology</span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#000000",
            letterSpacing: "-0.02em"
          }}>
            Next-Gen Digital <span style={{ color: "#0dd9c4" }}>Platforms</span>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#000000",
            maxWidth: "750px",
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            Explore our ecosystem of proprietary platforms designed to streamline operations, enhance your digital presence, and accelerate enterprise growth with unmatched efficiency.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                const firstSection = document.getElementById(PLATFORMS_DATA[0].id);
                if (firstSection) firstSection.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: "16px 36px",
                borderRadius: "99px",
                background: "#0dd9c4", color: "#000", border: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(13, 217, 196, 0.2)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(13, 217, 196, 0.3)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(13, 217, 196, 0.2)" }}
            >
              Explore Platforms <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Platform Sections */}
      {PLATFORMS_DATA.map((platform, index) => {
        const isDark = platform.bgColor === "#060A10";
        const contentBlock = (
          <div style={{ flex: 1, padding: "40px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "24px",
                background: isDark ? "rgba(13, 217, 196, 0.1)" : "rgba(13, 217, 196, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isDark ? "none" : "0 10px 30px rgba(0,0,0,0.05)"
              }}>
                {platform.icon}
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "16px",
              color: platform.textColor,
              lineHeight: 1.1,
              letterSpacing: "-0.01em"
            }}>
              {platform.title}
            </h2>

            <h3 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#0dd9c4",
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              {platform.subtitle}
            </h3>

            <p style={{
              color: isDark ? "rgba(255,255,255,0.7)" : "#444",
              lineHeight: 1.8,
              fontSize: "1.15rem",
              marginBottom: "32px",
              fontFamily: "'DM Sans', sans-serif"
            }}>
              {platform.description}
            </p>

            <div style={{
              background: platform.cardBg,
              padding: "32px",
              borderRadius: "24px",
              border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              boxShadow: isDark ? "none" : "0 20px 40px rgba(0,0,0,0.02)"
            }}>
              <h4 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: platform.textColor,
                marginBottom: "20px"
              }}>
                Core Features
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {platform.features.map((item, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    color: isDark ? "#fff" : "#060A10",
                    fontSize: "1.1rem",
                    fontWeight: 500
                  }}>
                    <div style={{
                      background: isDark ? "rgba(13, 217, 196, 0.1)" : "rgba(13, 217, 196, 0.2)",
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex"
                    }}>
                      <CheckCircle2 color="#0dd9c4" size={18} strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button style={{
              marginTop: "40px",
              padding: "16px 32px",
              borderRadius: "99px",
              background: "transparent",
              color: platform.textColor,
              border: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}`,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0dd9c4";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.borderColor = "#0dd9c4";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = platform.textColor;
                e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateX(0)";
              }}>
              Request Demo <ArrowRight size={18} />
            </button>
          </div>
        );

        const visualBlock = (
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              aspectRatio: "4/4",
              background: platform.cardBg,
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              boxShadow: isDark ? "0 30px 60px rgba(0,0,0,0.5)" : "0 30px 60px rgba(0, 0, 0, 0.08)",
              transform: platform.reversed ? "rotate(-1deg)" : "rotate(1deg)",
              transition: "transform 0.5s ease"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = platform.reversed ? "rotate(-1deg)" : "rotate(1deg)"}
            >
              <img
                src={platform.image}
                alt={platform.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.9,
                  transition: "transform 0.7s ease"
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(6,10,16,0.9), transparent)"
              }}></div>

              <div style={{ position: "absolute", bottom: "40px", left: "40px", zIndex: 2 }}>
                <div style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  padding: "16px 24px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "inline-block"
                }}>
                  <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}>
                    {platform.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

        return (
          <section
            id={platform.id}
            key={platform.id}
            style={{
              padding: "120px 32px",
              background: platform.bgColor,
              position: "relative",
              overflow: "hidden",
              borderTopLeftRadius: index > 0 && platform.bgColor !== PLATFORMS_DATA[index - 1].bgColor ? "60px" : "0",
              borderTopRightRadius: index > 0 && platform.bgColor !== PLATFORMS_DATA[index - 1].bgColor ? "60px" : "0",
              marginTop: index > 0 && platform.bgColor !== PLATFORMS_DATA[index - 1].bgColor ? "-60px" : "0",
              zIndex: PLATFORMS_DATA.length - index
            }}
          >
            {/* Optional background decoration */}
            {isDark && (
              <div style={{ position: "absolute", top: "10%", left: platform.reversed ? "-10%" : "auto", right: platform.reversed ? "auto" : "-10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.05) 0%, transparent 70%)", zIndex: 0 }} />
            )}

            <div style={{
              maxWidth: "1300px",
              margin: "0 auto",
              display: "flex",
              flexDirection: platform.reversed ? "row-reverse" : "row",
              gap: "80px",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              flexWrap: "wrap"
            }}>
              {contentBlock}
              {visualBlock}
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section style={{ padding: "60px 32px 120px", background: PLATFORMS_DATA[PLATFORMS_DATA.length - 1].bgColor, position: "relative" }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "80px 40px",
          borderRadius: "40px",
          background: "linear-gradient(130deg, rgb(29, 62, 216) 0%, rgb(30, 64, 175) 40%, rgb(37, 99, 235) 70%, rgb(59, 130, 246) 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(13, 217, 196, 0.2)"
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)", backgroundSize: "30px 30px", opacity: 0.6 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, color: "#060A10", marginBottom: "24px" }}>
              Empower Your Tech Stack Today
            </h2>
            <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 500 }}>
              Integrate our proprietary platforms to gain a competitive edge. Let's modernize your workflow.
            </p>
            <button style={{
              padding: "20px 48px",
              borderRadius: "99px",
              background: "#022c25ff",
              color: "#ffffff",
              border: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)" }}>
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
