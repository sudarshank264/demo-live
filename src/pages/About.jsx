import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div style={{ background: "#ADF4E6", color: "#111", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar scrollTo={scrollTo} />

      {/* 1. Hero */}
      <section style={{ padding: "180px 32px 100px", background: "#ADF4E6 " }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(0,217,196,0.1)", color: "#00d9c4", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px" }}>
              About SkoraSoft
            </div>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", color: "#111" }}>
              We Build<br />Digital<br />Products<br />That <span style={{ color: "#00d9c4" }}>Scale.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.6, marginBottom: "40px", maxWidth: "480px" }}>
              SkoraSoft Digital Pvt. Ltd. is a technology company helping ambitious businesses design, build, and grow world-class digital products. From startups to enterprises — we deliver engineering excellence.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                style={{ padding: "12px 24px", borderRadius: "8px", background: "#fff", color: "#111", border: "1px solid #e2e8f0", fontWeight: 600, cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
              >
                View Our Work
              </button>
              <button
                style={{ padding: "12px 24px", borderRadius: "8px", background: "#fff", color: "#111", border: "1px solid #e2e8f0", fontWeight: 600, cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
              >
                Email Your CV
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {[
              { stat: "8+", label: "Years of Experience" },
              { stat: "150+", label: "Projects Delivered" },
              { stat: "40+", label: "Team Members" },
              { stat: "98%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "40px 24px", borderRadius: "16px", textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "#00d9c4", fontFamily: "'Outfit', sans-serif", marginBottom: "8px" }}>{item.stat}</div>
                <div style={{ color: "#666", fontSize: "0.95rem", fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section style={{ padding: "100px 32px", background: "#ADF4E6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "80px" }}>
          <div>
            <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(0,217,196,0.1)", color: "#00d9c4", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px" }}>
              Our Mission
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", color: "#111" }}>
              Technology that<br />moves businesses<br /><span style={{ color: "#00d9c4" }}>forward.</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.6, maxWidth: "480px" }}>
              We exist to close the gap between great ideas and great execution. Our team of engineers, designers, and strategists work as an extension of yours — with the rigor of an MNC and the agility of a startup.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "24px", top: "20px", bottom: "20px", width: "2px", background: "#00d9c4", opacity: 0.3 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {[
                { title: "Innovation First", desc: "We challenge assumptions and explore smarter ways to solve complex problems for every client engagement." },
                { title: "Quality Without Compromise", desc: "Every line of code, every pixel, every deadline — held to the highest professional standard." },
                { title: "People-Centric Culture", desc: "Our team thrives in an inclusive, growth-oriented environment where talent is recognized and developed." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "24px", position: "relative" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(0,217,196,0.1)", border: "1px solid rgba(0,217,196,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                    <div style={{ width: "12px", height: "2px", background: "#00d9c4" }} />
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", marginBottom: "12px", fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                    <p style={{ color: "#666", lineHeight: 1.6, fontSize: "1rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section style={{ padding: "100px 32px", background: "#0f172a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(0,217,196,0.1)", color: "#00d9c4", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px", border: "1px solid rgba(0,217,196,0.2)" }}>
              Core Values
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3rem)", fontWeight: 800, color: "#fff" }}>
              What we stand for
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {[
              { title: "Innovation & Creativity", desc: "We push boundaries and encourage bold thinking — fresh perspectives that deliver smarter products and solutions." },
              { title: "Technical Excellence", desc: "Deep expertise across engineering, design, and consulting — built on continuous learning and mastery of craft." },
              { title: "Collaboration & Impact", desc: "Diverse minds, one goal. We build inclusive teams where every voice drives collective success and real outcomes." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#1e293b", padding: "40px", borderRadius: "24px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(0,217,196,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                  <div style={{ width: "12px", height: "2px", background: "#00d9c4" }} />
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "16px", fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.6, fontSize: "1rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section style={{ padding: "100px 32px", background: "#ADF4E6", overflowX: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "80px" }}>
            <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(0,217,196,0.1)", color: "#00d9c4", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px" }}>
              How We Work
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "#111" }}>
              From idea to <span style={{ color: "#00d9c4" }}>live product</span>
            </h2>
          </div>

          <div className="timeline-container" style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
            <div className="timeline-line" style={{ position: "absolute", top: "32px", left: "5%", right: "5%", height: "2px", background: "rgba(0,217,196,0.2)", zIndex: 0 }} />
            {[
              { num: "01", title: "Discover", desc: "Deep dive into goals, users & market" },
              { num: "02", title: "Design", desc: "UX research, wireframes & prototypes" },
              { num: "03", title: "Build", desc: "Agile sprints, clean code, QA & CI/CD" },
              { num: "04", title: "Launch", desc: "QA, deployment & performance tuning" },
              { num: "05", title: "Scale", desc: "Analytics, growth & ongoing support" },
            ].map((step, i) => (
              <div key={i} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1 }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#fff", border: "2px solid #00d9c4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 700, color: "#00d9c4", marginBottom: "24px" }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#111", marginBottom: "12px", fontFamily: "'Outfit', sans-serif" }}>{step.title}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.5, maxWidth: "160px" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Open Positions */}


      {/* 6. CTA — Don't see your role? */}
      <section style={{ padding: "100px 32px", background: "#060a10" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Don't see your role? <span style={{ color: "#00d9c4" }}>Reach out.</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "48px", maxWidth: "600px" }}>
            We're always looking for exceptional talent. Send us your CV and we'll be in touch.
          </p>
          <form
            style={{ display: "flex", width: "100%", maxWidth: "480px", position: "relative" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={{ width: "100%", padding: "16px 24px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "1rem", outline: "none", paddingRight: "140px" }}
              required
            />
            <button
              type="submit"
              style={{ position: "absolute", right: "8px", top: "8px", bottom: "8px", padding: "0 24px", borderRadius: "6px", background: "#00d9c4", color: "#000", border: "none", fontWeight: 700, cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#00b8a6"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#00d9c4"; }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .timeline-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
          .timeline-line {
            top: 0 !important;
            bottom: 0 !important;
            left: 32px !important;
            width: 2px !important;
            height: auto !important;
            right: auto !important;
          }
          .timeline-container > div {
            flex-direction: row !important;
            text-align: left !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
          .timeline-container > div > div:first-child {
            margin-bottom: 0 !important;
            flex-shrink: 0;
          }
          .timeline-container h3 {
            margin-top: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}