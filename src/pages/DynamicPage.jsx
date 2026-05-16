import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CheckCircle2, ArrowRight, Zap, Target, Shield, Star, Users, Briefcase, ChevronRight, BarChart, Settings, Layout } from "lucide-react";

export function DynamicPage() {
  const { category, slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const title = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Service';
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

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
        background: "#0F3A3E",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.5, zIndex: 0 }} />
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "99px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "24px", backdropFilter: "blur(10px)" }}>
            <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600 }}>{categoryTitle}</span>
            <ChevronRight size={14} color="rgba(255,255,255,0.6)" />
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>{title}</span>
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
            Elevate Your <span style={{ color: "#ffffff" }}>{title}</span>
          </h1>
          
          <p style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)", 
            color: "rgba(255,255,255,0.8)", 
            maxWidth: "700px", 
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            Empower your business with cutting-edge {title.toLowerCase()} solutions tailored to drive growth, engagement, and long-term success in the digital era.
          </p>
          
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ 
              padding: "16px 36px", 
              borderRadius: "99px", 
              background: "#ffffff", color: "#0F3A3E", border: "none", 
              fontFamily: "'DM Sans', sans-serif", 
              fontWeight: 700, 
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 10px 30px rgba(255,255,255,0.15)"
            }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(255,255,255,0.25)" }}
               onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(255,255,255,0.15)" }}>
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. About Section (Light) */}
      <section style={{ padding: "120px 32px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "80px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.8rem", fontWeight: 800, marginBottom: "24px", color: "#0F3A3E", lineHeight: 1.2 }}>
              Redefining {title} For Modern Enterprises
            </h2>
            <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1.15rem", marginBottom: "24px", fontFamily: "'DM Sans', sans-serif" }}>
              At SkoraSoft, we understand that standard approaches don't yield extraordinary results. Our {title.toLowerCase()} strategies are designed with a deep understanding of your unique market dynamics, leveraging the latest technologies to give you a competitive edge.
            </p>
            <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1.15rem", marginBottom: "32px", fontFamily: "'DM Sans', sans-serif" }}>
              We collaborate closely with your team to ensure every solution is scalable, secure, and perfectly aligned with your business objectives.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Tailored strategies for your specific niche", "Data-driven decision making", "Continuous optimization and support"].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", color: "#0F3A3E", fontSize: "1.1rem", fontWeight: 500 }}>
                  <div style={{ background: "rgba(15, 58, 62, 0.1)", borderRadius: "50%", padding: "6px", display: "flex" }}>
                    <CheckCircle2 color="#0F3A3E" size={20} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ 
              aspectRatio: "4/4", 
              background: "#0F3A3E",
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(15, 58, 62, 0.15)"
            }}>
               <div style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
               <Layout size={120} color="#ffffff" strokeWidth={1} style={{ position: "relative", zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Dark) */}
      <section style={{ padding: "120px 32px", background: "#0F3A3E", borderRadius: "60px", margin: "0 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, marginBottom: "20px", color: "#ffffff" }}>
              Core Capabilities
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Everything you need to scale your {title.toLowerCase()} operations efficiently and effectively.
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {[
              { icon: <Zap size={28} color="#0F3A3E" />, title: "Lightning Fast Execution", desc: "Optimized workflows ensuring rapid deployment and immediate impact on your bottom line." },
              { icon: <Shield size={28} color="#0F3A3E" />, title: "Enterprise Grade Security", desc: "Built with best-in-class security protocols to protect your assets and user data at all times." },
              { icon: <Target size={28} color="#0F3A3E" />, title: "Precision Targeting", desc: "Data-backed methodologies that ensure you reach the right audience with the right message." },
              { icon: <BarChart size={28} color="#0F3A3E" />, title: "Actionable Analytics", desc: "Comprehensive dashboards providing real-time insights to drive informed business decisions." },
              { icon: <Settings size={28} color="#0F3A3E" />, title: "Seamless Integration", desc: "Designed to plug effortlessly into your existing tech stack and operational workflows." },
              { icon: <Briefcase size={28} color="#0F3A3E" />, title: "Dedicated Expert Team", desc: "Direct access to industry professionals committed to your project's complete success." }
            ].map((feat, i) => (
              <div key={i} style={{ 
                padding: "40px", 
                background: "#ffffff", 
                borderRadius: "24px", 
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                cursor: "default"
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)" }}
                 onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(15, 58, 62, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#0F3A3E", marginBottom: "16px" }}>{feat.title}</h3>
                <p style={{ color: "#444", lineHeight: 1.7, fontSize: "1.05rem" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section (Light) */}
      <section style={{ padding: "120px 32px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, marginBottom: "20px", color: "#0F3A3E" }}>
              Our Proven Process
            </h2>
            <p style={{ color: "#444", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              A systematic approach to delivering excellence, from initial concept to final deployment.
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
            {[
              { num: "01", title: "Discovery", desc: "Deep dive into your requirements, goals, and market landscape." },
              { num: "02", title: "Strategy", desc: "Formulating a tailored roadmap to ensure optimal execution." },
              { num: "03", title: "Execution", desc: "Agile implementation with transparent, continuous communication." },
              { num: "04", title: "Evolution", desc: "Ongoing monitoring, testing, and scaling for sustained success." }
            ].map((step, i) => (
              <div key={i} style={{ position: "relative", padding: "40px", background: "#ffffff", border: "1px solid rgba(15, 58, 62, 0.1)", borderRadius: "24px", boxShadow: "0 10px 30px rgba(15, 58, 62, 0.03)" }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "4.5rem", fontWeight: 900, color: "rgba(15, 58, 62, 0.05)", lineHeight: 1, marginBottom: "24px" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#0F3A3E", marginBottom: "16px" }}>{step.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "1.05rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section (Dark) */}
      <section style={{ padding: "120px 32px", background: "#0F3A3E", borderTopLeftRadius: "60px", borderTopRightRadius: "60px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ aspectRatio: "1/1", borderRadius: "50%", background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div style={{ width: "70%", height: "70%", borderRadius: "50%", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>
                  <Users size={120} color="#ffffff" strokeWidth={1} style={{ opacity: 0.9 }} />
               </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3rem", fontWeight: 800, marginBottom: "24px", color: "#ffffff", lineHeight: 1.1 }}>
              Why Partner With Us?
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.8, fontSize: "1.15rem", marginBottom: "40px" }}>
              We don't just act as an agency; we integrate as an extension of your team. Our holistic approach ensures that every aspect of {title.toLowerCase()} is optimized for maximum impact.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                { title: "Deep Domain Expertise", desc: "Years of specialized experience navigating complex digital landscapes." },
                { title: "Transparent Reporting", desc: "Crystal clear communication with regular, detailed performance insights." },
                { title: "Future-Proof Solutions", desc: "Technologies and strategies built to scale as your business grows." }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "24px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle2 size={24} color="#ffffff" />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px", fontFamily: "'Outfit', sans-serif" }}>{item.title}</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.6, fontSize: "1rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (Light) */}
      <section style={{ padding: "120px 32px", background: "#ffffff", position: "relative" }}>
        <div style={{ 
          maxWidth: "1000px", 
          margin: "0 auto", 
          padding: "80px 40px", 
          borderRadius: "40px", 
          background: "#0F3A3E",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(15, 58, 62, 0.2)"
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 2px, transparent 2px)", backgroundSize: "30px 30px", opacity: 0.6 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "24px" }}>
              Ready to transform your business?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.6 }}>
              Let's discuss how our {title.toLowerCase()} services can help you achieve your most ambitious goals.
            </p>
            <button style={{ 
              padding: "20px 48px", 
              borderRadius: "99px", 
              background: "#ffffff", 
              color: "#0F3A3E", 
              border: "none", 
              fontFamily: "'DM Sans', sans-serif", 
              fontWeight: 800, 
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)" }}
               onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)" }}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
