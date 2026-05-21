import { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <div style={{ background: "#ADF4E6", color: "#111", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar scrollTo={scrollTo} />

      {/* 1. Hero Section */}
      <section style={{ padding: "180px 32px 60px", background: "linear-gradient(180deg, #ADF4E6 0%, rgba(13,217,196,0.15) 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(0,217,196,0.1)", color: "#00d9c4", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "24px", border: "1px solid rgba(0,217,196,0.2)" }}>
            Get In Touch
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", color: "#001e4a" }}>
            Let's build the future, together.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Have a project in mind, a business query, or just want to say hello? Drop us a message, and our consulting team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section style={{ padding: "60px 32px 100px", flexGrow: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "64px", alignItems: "start" }}>
            
            {/* Left Column: Office & Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: 700, color: "#001e4a", marginBottom: "16px" }}>
                  Contact Information
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.6, fontSize: "15px" }}>
                  Reach out directly to our dedicated departments. We monitor these channels closely and respond promptly.
                </p>
              </div>

              {/* Direct channels */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
                {[
                  { title: "General & Press", email: "hello@skorasoft.com", phone: "+91 98765 43210", desc: "For general inquiries and press relations." },
                  { title: "Sales & Solutions", email: "sales@skorasoft.com", phone: "+91 98765 43211", desc: "Discuss a new product development proposal." },
                  { title: "Careers & HR", email: "careers@skorasoft.com", phone: null, desc: "Join our team of technology experts." }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: "#ffffff", padding: "28px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,30,74,0.03)" }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: 700, color: "#001e4a", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5, marginBottom: "16px" }}>{item.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <a href={`mailto:${item.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#00d9c4", textDecoration: "none", fontWeight: 600 }}>
                        <Mail size={14} /> {item.email}
                      </a>
                      {item.phone && (
                        <a href={`tel:${item.phone.replace(/\s+/g, '')}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#475569", textDecoration: "none" }}>
                          <Phone size={14} /> {item.phone}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Offices */}
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "#001e4a", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Global Offices
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    {
                      country: "India (HQ)",
                      name: "SkoraSoft Digital Pvt. Ltd.",
                      address: "Tech Boulevard, Knowledge Park III, Greater Noida, Uttar Pradesh 201308, India",
                      phone: "+91 98765 43210"
                    },
                    {
                      country: "United States",
                      name: "SkoraSoft LLC",
                      address: "1209 North Orange St, Wilmington, New Castle County, Delaware 19801, USA",
                      phone: "+1 (302) 555-0199"
                    }
                  ].map((office, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "16px", background: "#ffffff", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,30,74,0.03)" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(0, 217, 196, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#00d9c4", flexShrink: 0 }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#00d9c4", textTransform: "uppercase", letterSpacing: "0.5px" }}>{office.country}</span>
                        <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: 700, color: "#001e4a", margin: "4px 0 8px" }}>{office.name}</h4>
                        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.5, marginBottom: "8px" }}>{office.address}</p>
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} style={{ fontSize: "13px", color: "#475569", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <Phone size={12} /> {office.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect Section */}
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: 700, color: "#001e4a", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Connect with us
                </h3>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>, label: "LinkedIn", href: "#" },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, label: "Twitter", href: "#" },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>, label: "YouTube", href: "#" }
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.href}
                      aria-label={soc.label}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        color: "#001e4a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(0,30,74,0.03)",
                        transition: "all 0.3s ease"
                      }}
                      className="contact-soc-btn"
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Form */}
            <div style={{ background: "#ffffff", padding: "40px", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,30,74,0.04)" }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "26px", fontWeight: 700, color: "#001e4a", marginBottom: "8px" }}>
                    Send us a message
                  </h2>
                  <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.5, marginBottom: "32px" }}>
                    Provide your project goals and details below, and our experts will coordinate with you.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = "#00d9c4"}
                          onBlur={e => e.target.style.borderColor = "#cbd5e1"}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = "#00d9c4"}
                          onBlur={e => e.target.style.borderColor = "#cbd5e1"}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = "#00d9c4"}
                          onBlur={e => e.target.style.borderColor = "#cbd5e1"}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>Company / Organization</label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          placeholder="Acme Corp"
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = "#00d9c4"}
                          onBlur={e => e.target.style.borderColor = "#cbd5e1"}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>Service Required *</label>
                      <select
                        name="service"
                        required
                        value={formState.service}
                        onChange={handleInputChange}
                        style={selectStyle}
                      >
                        <option value="">Select a service...</option>
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Performance Marketing">Performance Marketing</option>
                        <option value="IT Consulting & Cloud">IT Consulting & Cloud Solutions</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Other Inquiries">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements or timeline..."
                        style={{ ...inputStyle, resize: "none", height: "auto" }}
                        onFocus={e => e.target.style.borderColor = "#00d9c4"}
                        onBlur={e => e.target.style.borderColor = "#cbd5e1"}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        padding: "16px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #0dd9c4, #818cf8)",
                        color: "#ffffff",
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 8px 24px rgba(13,217,196,0.2)",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        marginTop: "10px"
                      }}
                      className="contact-submit-btn"
                    >
                      Send Inquiry <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 10px" }}>
                  <div style={{ display: "inline-flex", width: "72px", height: "72px", borderRadius: "50%", background: "rgba(0, 217, 196, 0.1)", alignItems: "center", justifyContent: "center", color: "#00d9c4", marginBottom: "24px" }}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: 700, color: "#001e4a", marginBottom: "12px" }}>
                    Message Sent!
                  </h2>
                  <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.6, marginBottom: "32px", maxWidth: "400px", margin: "0 auto 32px" }}>
                    Thank you, <strong style={{ color: "#001e4a" }}>{formState.name}</strong>. We have received your inquiry regarding <strong>{formState.service}</strong>. An account executive will contact you at <strong>{formState.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    style={{
                      padding: "12px 24px",
                      borderRadius: "8px",
                      background: "#001e4a",
                      color: "#ffffff",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#052e6d"}
                    onMouseLeave={e => e.currentTarget.style.background = "#001e4a"}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section style={{ padding: "0 32px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "#001e4a", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1px", textAlign: "center" }}>
            Our HQ Location
          </h3>
          <div style={{ width: "100%", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,30,74,0.05)", background: "#ffffff" }}>
            <iframe
              title="SkoraSoft Greater Noida Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113916.94589258285!2d77.4087955519409!3d28.46875936712398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc198cfb159b3%3A0x6e8e811c76adbb29!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716298516000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />

      <style>
        {`
          .contact-soc-btn:hover {
            background: #00d9c4 !important;
            color: #ffffff !important;
            transform: translateY(-2px);
          }
          .contact-submit-btn:hover {
            filter: brightness(1.1);
            transform: translateY(-1px);
            box-shadow: 0 10px 28px rgba(13,217,196,0.35) !important;
          }
          @media (max-width: 992px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  background: "#f8fafc",
  color: "#1e293b",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'DM Sans', sans-serif",
  transition: "all 0.2s ease"
};

const selectStyle = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
  backgroundSize: "16px"
};
