import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  ArrowRight,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Cpu,
  Factory,
  GraduationCap,
  CheckCircle2,
  Building2
} from "lucide-react";

const INDUSTRIES_DATA = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Digital Health Solutions",
    description: "We empower healthcare organizations to deliver better patient outcomes through secure, compliant, and innovative digital platforms. From telemedicine to electronic health records, we build the future of care.",
    features: ["HIPAA & GDPR Compliant Systems", "Telemedicine Platforms", "Patient Portal Development"],
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2669&auto=format&fit=crop",
    icon: <HeartPulse size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#000000",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: false
  },
  {
    id: "finance",
    title: "Banking & Finance",
    subtitle: "FinTech Innovation",
    description: "Transform your financial services with cutting-edge technology. We build secure, scalable, and user-centric applications for banking, wealth management, and payment processing.",
    features: ["Secure Payment Gateways", "Blockchain Solutions", "Wealth Management Apps"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop",
    icon: <Landmark size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#060A10",
    textColor: "#ffffff",
    cardBg: "#ffffff",
    reversed: true
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    subtitle: "Omnichannel Commerce",
    description: "Create seamless shopping experiences across all digital touchpoints. We develop robust e-commerce platforms that drive conversions, improve customer loyalty, and scale with your business.",
    features: ["Custom E-commerce Platforms", "Inventory Management Systems", "Omnichannel Integrations"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    icon: <ShoppingCart size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#F8FAFC",
    reversed: false
  },
  {
    id: "technology",
    title: "Technology & Software",
    subtitle: "Next-Gen SaaS Products",
    description: "Partner with us to accelerate your product roadmap. We provide end-to-end software engineering services to help technology companies build, launch, and scale innovative SaaS products.",
    features: ["SaaS Architecture Design", "API Development & Integration", "Cloud Migration Services"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    icon: <Cpu size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#060A10",
    textColor: "#ffffff",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: true
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Logistics",
    subtitle: "Industry 4.0 Solutions",
    description: "Optimize your supply chain and manufacturing operations with intelligent digital solutions. We build systems that improve visibility, increase efficiency, and reduce operational costs.",
    features: ["Supply Chain Visibility", "IoT Integrations", "Predictive Maintenance"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    icon: <Factory size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#ffffff",
    reversed: false
  },
  {
    id: "education",
    title: "Education & EdTech",
    subtitle: "Digital Learning Ecosystems",
    description: "Shape the future of learning with engaging and accessible educational technology. We develop platforms that empower educators and provide immersive learning experiences for students.",
    features: ["Learning Management Systems", "Virtual Classrooms", "Student Information Systems"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2732&auto=format&fit=crop",
    icon: <GraduationCap size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#060A10",
    textColor: "#ffffff",
    cardBg: "#F8FAFC",
    reversed: true
  }
];

export function Industries() {
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
            <span style={{ color: "#0dd9c4", fontSize: "14px", fontWeight: 600 }}>Industries We Serve</span>
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
            Solutions for <span style={{ color: "#0dd9c4" }}>Every Sector</span>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#000000",
            maxWidth: "750px",
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            We partner with visionary organizations across diverse industries to navigate complex digital transformations. Discover how our tailored solutions drive innovation in your field.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                const firstSection = document.getElementById(INDUSTRIES_DATA[0].id);
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
              Explore Industries <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Industry Sections */}
      {INDUSTRIES_DATA.map((industry, index) => {
        const isDark = industry.bgColor === "#060A10";
        const contentBlock = (
          <div style={{ flex: 1, padding: "40px 0", minWidth: "min(100%, 450px)" }}>
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
                {industry.icon}
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "16px",
              color: industry.textColor,
              lineHeight: 1.1,
              letterSpacing: "-0.01em"
            }}>
              {industry.title}
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
              {industry.subtitle}
            </h3>

            <p style={{
              color: isDark ? "rgba(255,255,255,0.7)" : "#444",
              lineHeight: 1.8,
              fontSize: "1.15rem",
              marginBottom: "32px",
              fontFamily: "'DM Sans', sans-serif"
            }}>
              {industry.description}
            </p>

            <div style={{
              background: industry.cardBg,
              padding: "32px",
              borderRadius: "24px",
              border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              boxShadow: isDark ? "none" : "0 20px 40px rgba(0,0,0,0.02)"
            }}>
              <h4 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: industry.textColor,
                marginBottom: "20px"
              }}>
                Key Solutions
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {industry.features.map((item, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    color: isDark ? "#000000" : "#060A10",
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
              color: industry.textColor,
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
                e.currentTarget.style.color = industry.textColor;
                e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateX(0)";
              }}>
              Consult with us <ArrowRight size={18} />
            </button>
          </div>
        );

        const visualBlock = (
          <div style={{ flex: 1, position: "relative", minWidth: "min(100%, 450px)" }}>
            <div style={{
              aspectRatio: "4/4",
              background: industry.cardBg,
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              boxShadow: isDark ? "0 30px 60px rgba(0,0,0,0.5)" : "0 30px 60px rgba(0, 0, 0, 0.08)",
              transform: industry.reversed ? "rotate(-1deg)" : "rotate(1deg)",
              transition: "transform 0.5s ease"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = industry.reversed ? "rotate(-1deg)" : "rotate(1deg)"}
            >
              <img
                src={industry.image}
                alt={industry.title}
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
                    {industry.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

        return (
          <section
            id={industry.id}
            key={industry.id}
            style={{
              padding: "120px 32px",
              background: industry.bgColor,
              position: "relative",
              overflow: "hidden",
              borderTopLeftRadius: index > 0 && industry.bgColor !== INDUSTRIES_DATA[index - 1].bgColor ? "60px" : "0",
              borderTopRightRadius: index > 0 && industry.bgColor !== INDUSTRIES_DATA[index - 1].bgColor ? "60px" : "0",
              marginTop: index > 0 && industry.bgColor !== INDUSTRIES_DATA[index - 1].bgColor ? "-60px" : "0",
              zIndex: INDUSTRIES_DATA.length - index
            }}
          >
            {/* Optional background decoration */}
            {isDark && (
              <div style={{ position: "absolute", top: "10%", left: industry.reversed ? "-10%" : "auto", right: industry.reversed ? "auto" : "-10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.05) 0%, transparent 70%)", zIndex: 0 }} />
            )}

            <div style={{
              maxWidth: "1300px",
              margin: "0 auto",
              display: "flex",
              flexDirection: industry.reversed ? "row-reverse" : "row",
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
      <section style={{ padding: "60px 32px 120px", background: INDUSTRIES_DATA[INDUSTRIES_DATA.length - 1].bgColor, position: "relative" }}>
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
              Ready to transform your industry?
            </h2>
            <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 500 }}>
              Let's discuss how our bespoke technological solutions can drive unprecedented growth for your organization.
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
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
