import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CheckCircle2, ArrowRight, Code2, Smartphone, Monitor, Database, Shield, Zap, ChevronRight } from "lucide-react";

export function WebDesign() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <div style={{ background: "#ffffff", color: "#111" }}>
      <Navbar scrollTo={scrollTo} />

      {/* 1. Hero Section (Dark) */}
      <section style={{
        position: "relative",
        padding: "180px 32px 120px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "80vh",
        background: "#060A10",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px"
      }}>
        {/* Background Gradients */}
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.15) 0%, transparent 60%)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(13, 217, 196, 0.1) 0%, transparent 60%)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.5, zIndex: 0 }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "99px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "24px", backdropFilter: "blur(10px)" }}>
            <span style={{ color: "#0dd9c4", fontSize: "14px", fontWeight: 600 }}>Services</span>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>Web Design & Development</span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#ffffff",
            letterSpacing: "-0.02em"
          }}>
            Engineering Digital <span style={{ color: "#0dd9c4" }}>Excellence</span>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            We design and build high-performance, accessible, and beautifully crafted web applications that provide seamless experiences across all devices.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
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
            }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(13, 217, 196, 0.3)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(13, 217, 196, 0.2)" }}>
              Discuss Your Project <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. About Section (Light) */}
      <section style={{ padding: "120px 32px", background: "#ADF4E6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "80px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.8rem", fontWeight: 800, marginBottom: "24px", color: "#060A10", lineHeight: 1.2 }}>
              Where Form Meets Function
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontSize: "1.15rem", marginBottom: "24px", fontFamily: "'DM Sans', sans-serif" }}>
              A website should be more than just a digital brochure. It must be a dynamic engine for your business. We craft digital experiences that captivate users and compel them to take action.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontSize: "1.15rem", marginBottom: "32px", fontFamily: "'DM Sans', sans-serif" }}>
              Our engineering team ensures that behind every stunning interface lies a robust, scalable architecture built on the latest technologies to guarantee speed, security, and stability.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Modern Tech Stacks (React, Node, Next.js)", "Mobile-First Responsive Design", "Uncompromised Web Security"].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", color: "#060A10", fontSize: "1.1rem", fontWeight: 600 }}>
                  <div style={{ background: "rgba(13, 217, 196, 0.1)", borderRadius: "50%", padding: "6px", display: "flex" }}>
                    <CheckCircle2 color="#0dd9c4" size={20} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{
              aspectRatio: "4/4",
              background: "#F8FAFC",
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.05)"
            }}>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop" alt="Web Development" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,10,16,0.8), transparent)" }}></div>
              <Code2 size={80} color="#0dd9c4" strokeWidth={1.5} style={{ position: "absolute", bottom: "40px", left: "40px", zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Grey) */}
      <section style={{ padding: "120px 32px", background: "#ADF4E6", margin: "0 24px", borderRadius: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span style={{ color: "#0dd9c4", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>Our Services</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, marginTop: "16px", marginBottom: "20px", color: "#060A10" }}>
              Full-Stack Capabilities
            </h2>
            <p style={{ color: "#555", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              From front-end aesthetics to back-end architecture, we cover every aspect of the web lifecycle.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "32px" }}>
            {[
              { icon: <Monitor size={28} color="#0dd9c4" />, title: "UI/UX Design", desc: "Crafting intuitive user interfaces and experiences that engage users and simplify complex journeys." },
              { icon: <Smartphone size={28} color="#0dd9c4" />, title: "Front-End Development", desc: "Building fast, interactive, and highly responsive client-side applications using React, Vue, and Next.js." },
              { icon: <Database size={28} color="#0dd9c4" />, title: "Back-End & APIs", desc: "Developing secure, scalable server-side architectures, RESTful APIs, and GraphQL endpoints." },
              { icon: <Zap size={28} color="#0dd9c4" />, title: "E-Commerce Solutions", desc: "Creating high-converting online stores using Shopify, WooCommerce, or custom headless architectures." },
              { icon: <Code2 size={28} color="#0dd9c4" />, title: "CMS Development", desc: "Implementing robust content management systems like WordPress, Webflow, or headless CMS solutions." },
              { icon: <Shield size={28} color="#0dd9c4" />, title: "Maintenance & Support", desc: "Providing ongoing security updates, performance monitoring, and continuous feature development." }
            ].map((feat, i) => (
              <div key={i} style={{
                padding: "40px",
                background: "#ffffff",
                borderRadius: "24px",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                border: "1px solid rgba(0,0,0,0.02)",
                cursor: "default"
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(13, 217, 196, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#060A10", marginBottom: "16px" }}>{feat.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "1.05rem" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section (Light) */}
      <section style={{ padding: "120px 32px", background: "#ADF4E6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, marginBottom: "20px", color: "#060A10" }}>
              Our Development Cycle
            </h2>
            <p style={{ color: "#444", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              A proven agile methodology that ensures transparency, speed, and high-quality deliverables.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "40px" }}>
            {[
              { num: "01", title: "Wireframing", desc: "We map out the architecture and user flow, ensuring optimal navigation and structure." },
              { num: "02", title: "Visual Design", desc: "We apply your brand identity, creating high-fidelity prototypes for your approval." },
              { num: "03", title: "Development", desc: "Our engineers write clean, modular code, bringing the designs to life with smooth functionality." },
              { num: "04", title: "QA & Launch", desc: "Rigorous testing across browsers and devices ensures a flawless launch to the public." }
            ].map((step, i) => (
              <div key={i} style={{ position: "relative", padding: "40px", background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "4.5rem", fontWeight: 900, color: "rgba(13, 217, 196, 0.15)", lineHeight: 1, marginBottom: "24px" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#060A10", marginBottom: "16px" }}>{step.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "1.05rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section style={{ padding: "60px 32px 120px", background: "#ADF4E6", position: "relative" }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "80px 40px",
          borderRadius: "40px",
          background: "#060A10",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(13,217,196,0.1) 2px, transparent 2px)", backgroundSize: "30px 30px", opacity: 0.6 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, color: "#ffffff", marginBottom: "24px" }}>
              Let's Build Something Great
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.6 }}>
              Whether you need a sleek landing page or a complex web application, we have the expertise to make it happen.
            </p>
            <button style={{
              padding: "20px 48px",
              borderRadius: "99px",
              background: "#0dd9c4",
              color: "#000",
              border: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 15px 30px rgba(13, 217, 196, 0.2)",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(13, 217, 196, 0.3)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(13, 217, 196, 0.2)" }}>
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
