import { useState } from "react";
import { Reveal } from "../ui/Reveal";

export function ServicesSection() {
  const services = [
    {
      title: "Web & App Development",
      description: "Custom web and mobile applications engineered for performance, scalability, and seamless user experiences tailored to your business needs.",
      img: "/src/assets/service_web_app.png",
      accent: "#f8fafaff"
    },
    {
      title: "Search Engine Optimization",
      description: "Data-driven SEO strategies to improve organic rankings, increase visibility, and drive high-quality traffic to your digital properties.",
      img: "/src/assets/service_seo.png",
      accent: "#f8fafaff"
    },
    {
      title: "Business Listing & Promo",
      description: "Strategic local and global business listings to enhance your brand presence and connect you directly with your target audience.",
      img: "/src/assets/service_business.png",
      accent: "#f8fafaff"
    },
    {
      title: "Social Media Marketing",
      description: "Engaging social media campaigns designed to build brand loyalty, foster community growth, and convert followers into customers.",
      img: "/src/assets/service_social.png",
      accent: "#f8fafaff"
    },
    {
      title: "Product Branding",
      description: "Comprehensive branding solutions that define your visual identity, voice, and market positioning to stand out in a competitive landscape.",
      img: "/src/assets/service_branding.png",
      accent: "#f8fafaff"
    },
    {
      title: "Graphics & Video Editing",
      description: "High-impact visual content and professional video editing that tells your brand story and captivates your audience across all channels.",
      img: "/src/assets/service_video.png",
      accent: "#f8fafaff"
    }
  ];

  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 6);

  return (
    <section id="services" style={{ background: "#BBD2CF", paddingBottom: "40px" }}>
      <style>{`
        .interactive-cards-row {
          display: flex;
          gap: 24px;
          width: 100%;
          margin-bottom: 24px;
        }
        .interactive-card {
          flex: 1;
          transition: flex 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease;
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 480px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(15, 58, 62, 0.08);
          border: 1px solid rgba(15, 58, 62, 0.05);
        }
        .interactive-card:hover {
          flex: 2.5;
          transform: translateY(-12px);
          box-shadow: 0 24px 50px rgba(15, 58, 62, 0.15);
        }
        .interactive-card-img-container {
          flex: 1;
          overflow: hidden;
          position: relative;
        }
        .interactive-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .interactive-card:hover .interactive-card-img {
          transform: scale(1.08);
        }
        .interactive-card-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          height: 250px;
          flex-shrink: 0;
          position: relative;
        }
        .interactive-card-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #0f3a3e;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.3;
        }
        .interactive-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(0, 8, 9, 0.7);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .interactive-card-link {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          visibility: hidden;
        }
        .interactive-card:hover .interactive-card-link {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          transition-delay: 0.1s;
        }
        .interactive-card-link span {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #0f3a3e;
          letter-spacing: 0.02em;
        }
        @media (max-width: 992px) {
          .interactive-cards-row {
            flex-direction: column;
          }
          .interactive-card {
            height: auto;
            min-height: 420px;
          }
          .interactive-card:hover {
            flex: 1;
            transform: translateY(-8px);
          }
          .interactive-card-content {
            height: auto;
            padding: 24px;
          }
          .interactive-card-link {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
            margin-top: 24px;
          }
        }
      `}</style>

      <div className="responsive-container">
        {/* HEADER */}
        <Reveal delay={0}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(15, 58, 62, 0.1)",
                background: "rgba(15, 58, 62, 0.1)",
                marginBottom: "24px"
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "rgba(15, 58, 62, 0.8)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase"
                }}
              >
                What We Do
              </span>
            </div>

            <h2
              className="text-fluid-h2"
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 800,
                color: "#0f3a3e",
                letterSpacing: "-0.02em",
                marginBottom: "16px"
              }}
            >
              Premium Digital Services
            </h2>

            <p
              className="text-fluid-p"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                color: "rgba(0, 8, 9, 0.8)",
                maxWidth: "520px",
                margin: "0 auto"
              }}
            >
              End-to-end digital solutions engineered to scale your business and elevate your brand presence.
            </p>
          </div>
        </Reveal>

        {/* CARDS ROW 1 */}
        <Reveal delay={0.1}>
          <div className="interactive-cards-row">
            {row1.map((service) => (
              <div key={service.title} className="interactive-card">
                <div className="interactive-card-img-container">
                  <img src={service.img} alt={service.title} className="interactive-card-img" />
                </div>
                <div className="interactive-card-content">
                  <h3 className="interactive-card-title">{service.title}</h3>
                  <p className="interactive-card-desc">{service.description}</p>
                  <div className="interactive-card-link">
                    <span>Learn More</span>
                    <svg viewBox="0 0 16 16" width="14" height="14">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#0f3a3e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CARDS ROW 2 */}
        <Reveal delay={0.2}>
          <div className="interactive-cards-row">
            {row2.map((service) => (
              <div key={service.title} className="interactive-card">
                <div className="interactive-card-img-container">
                  <img src={service.img} alt={service.title} className="interactive-card-img" />
                </div>
                <div className="interactive-card-content">
                  <h3 className="interactive-card-title">{service.title}</h3>
                  <p className="interactive-card-desc">{service.description}</p>
                  <div className="interactive-card-link">
                    <span>Learn More</span>
                    <svg viewBox="0 0 16 16" width="14" height="14">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#0f3a3e"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}