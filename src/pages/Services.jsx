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
  Video,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Globe
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    subtitle: "Engineering Digital Excellence",
    description: "We design and build high-performance, accessible, and beautifully crafted web applications that provide seamless experiences across all devices. From front-end aesthetics to back-end architecture, we cover every aspect of the web lifecycle.",
    features: ["Modern Tech Stacks (React, Node, Next.js)", "Mobile-First Responsive Design", "Uncompromised Web Security"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    icon: <Monitor size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#000000",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: false
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Dominate Search Rankings",
    description: "Elevate your organic visibility and drive high-intent traffic to your website. We implement proven technical, on-page, and off-page SEO strategies to ensure your brand stands out in search engine results.",
    features: ["Comprehensive Keyword Strategy", "Technical SEO & Core Web Vitals Audits", "High-Authority Link Building"],
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2670&auto=format&fit=crop",
    icon: <Search size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#ffffff",
    reversed: true
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    subtitle: "Accelerate Growth with Data",
    description: "Maximize your ROI and drive measurable results with precision-targeted campaigns. We rely on rigorous data analysis to uncover hidden opportunities and optimize your marketing spend across all digital touchpoints.",
    features: ["ROI-Focused Methodologies", "Multi-Touch Attribution Modeling", "Real-Time Campaign Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: <Target size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#F8FAFC",
    reversed: false
  },
  {
    id: "sem",
    title: "Search Engine Marketing (SEM)",
    subtitle: "Instant Visibility, Lasting Impact",
    description: "Capture demand at the exact moment your customers are searching. Our SEM experts craft high-converting PPC campaigns that maximize click-through rates while keeping your cost-per-acquisition low.",
    features: ["Google Ads & Bing Campaigns", "A/B Creative & Copy Testing", "Granular Conversion Tracking"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    icon: <Megaphone size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#060A10",
    textColor: "#ffffff",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: true
  },
  {
    id: "video-editing",
    title: "Video Editing",
    subtitle: "Cinematic Storytelling",
    description: "Bring your brand's narrative to life with compelling visual stories. Our video editing team transforms raw footage into polished, high-impact content optimized for social media, websites, and ad campaigns.",
    features: ["Professional Color Grading", "Dynamic Motion Graphics", "Immersive Audio Mixing"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
    icon: <Video size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#ffffff",
    reversed: false
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    subtitle: "Strategic Technological Innovation",
    description: "Navigate the complex digital landscape with our expert IT consulting. We provide strategic guidance to align your technology infrastructure with your business goals, ensuring scalability, security, and efficiency.",
    features: ["Enterprise Digital Transformation", "Scalable Cloud Architecture", "Rigorous Cybersecurity Audits"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    icon: <Briefcase size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#060A10",
    cardBg: "#F8FAFC",
    reversed: true
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Holistic Digital Ecosystems",
    description: "Build a powerful online presence with end-to-end digital marketing solutions. From social media management to email automation, we create cohesive strategies that acquire, engage, and retain high-value customers.",
    features: ["Omnichannel Social Media Strategy", "Data-Driven Content Marketing", "Personalized Email Automation"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2662&auto=format&fit=crop",
    icon: <Globe size={64} color="#0dd9c4" strokeWidth={1.5} />,
    bgColor: "#ADF4E6",
    textColor: "#ffffff",
    cardBg: "rgba(255,255,255,0.03)",
    reversed: false
  }
];

export function Services() {
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
            <span style={{ color: "#0dd9c4", fontSize: "14px", fontWeight: 600 }}>Our Capabilities</span>
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
            Transforming Ideas into <span style={{ color: "#0dd9c4" }}>Impact</span>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#000000",
            maxWidth: "750px",
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            We offer a comprehensive suite of digital services designed to elevate your brand, engage your audience, and drive measurable growth. Discover our specialized solutions below.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                const firstSection = document.getElementById(SERVICES_DATA[0].id);
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
              Explore Services <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Service Sections */}
      {SERVICES_DATA.map((service, index) => {
        const isDark = service.bgColor === "#060A10";
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
                {service.icon}
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "16px",
              color: service.textColor,
              lineHeight: 1.1,
              letterSpacing: "-0.01em"
            }}>
              {service.title}
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
              {service.subtitle}
            </h3>

            <p style={{
              color: isDark ? "rgba(255,255,255,0.7)" : "#444",
              lineHeight: 1.8,
              fontSize: "1.15rem",
              marginBottom: "32px",
              fontFamily: "'DM Sans', sans-serif"
            }}>
              {service.description}
            </p>

            <div style={{
              background: service.cardBg,
              padding: "32px",
              borderRadius: "24px",
              border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              boxShadow: isDark ? "none" : "0 20px 40px rgba(0,0,0,0.02)"
            }}>
              <h4 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: service.textColor,
                marginBottom: "20px"
              }}>
                Key Offerings
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {service.features.map((item, i) => (
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
              color: service.textColor,
              border: `1px solid \${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}`,
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
                e.currentTarget.style.color = service.textColor;
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
              background: service.cardBg,
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
              boxShadow: isDark ? "0 30px 60px rgba(0,0,0,0.5)" : "0 30px 60px rgba(0, 0, 0, 0.08)",
              transform: service.reversed ? "rotate(-1deg)" : "rotate(1deg)",
              transition: "transform 0.5s ease"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = service.reversed ? "rotate(-1deg)" : "rotate(1deg)"}
            >
              <img
                src={service.image}
                alt={service.title}
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
                    {service.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

        return (
          <section
            id={service.id}
            key={service.id}
            style={{
              padding: "120px 32px",
              background: service.bgColor,
              position: "relative",
              overflow: "hidden",
              borderTopLeftRadius: index > 0 && service.bgColor !== SERVICES_DATA[index - 1].bgColor ? "60px" : "0",
              borderTopRightRadius: index > 0 && service.bgColor !== SERVICES_DATA[index - 1].bgColor ? "60px" : "0",
              marginTop: index > 0 && service.bgColor !== SERVICES_DATA[index - 1].bgColor ? "-60px" : "0",
              zIndex: SERVICES_DATA.length - index
            }}
          >
            {/* Optional background decoration */}
            {isDark && (
              <div style={{ position: "absolute", top: "10%", left: service.reversed ? "-10%" : "auto", right: service.reversed ? "auto" : "-10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.05) 0%, transparent 70%)", zIndex: 0 }} />
            )}

            <div style={{
              maxWidth: "1300px",
              margin: "0 auto",
              display: "flex",
              flexDirection: service.reversed ? "row-reverse" : "row",
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
      <section style={{ padding: "60px 32px 120px", background: SERVICES_DATA[SERVICES_DATA.length - 1].bgColor, position: "relative" }}>
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
              Ready to scale your business?
            </h2>
            <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 500 }}>
              Partner with a team that treats your goals like their own. Let's build your growth engine today.
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
