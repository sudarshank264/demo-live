import { useState, useEffect } from "react";

const MENU_DATA = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Industries", id: "industries" },
  { name: "Technologies", id: "technologies" },
  { name: "Contact", id: "contact" }
];

const OVERLAY_MENUS = [
  { id: "navigate", label: "Navigate your next" },
  { id: "industries", label: "Industries", route: "industries" },
  { id: "services", label: "Services", route: "services" },
  { id: "platforms", label: "Platforms", route: "technologies" },
  { id: "insights", label: "SkoraSoft Knowledge Institute", route: "insights" },
  { id: "about", label: "About Us", route: "about" },
  { id: "investors", label: "Investors" },
  { id: "careers", label: "Careers" },
  { id: "newsroom", label: "Newsroom" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact Us", route: "contact" }
];

const SUB_MENUS = {
  services: [
    { label: "Insights", isHeader: true },
    { label: "SkoraSoft Topaz" },
    { label: "Applied AI" },
    { label: "SkoraSoft Generative AI" },
    { label: "SkoraSoft Sustainability Services" }
  ],
  platforms: [
    { label: "EdgeVerve" },
    { label: "SkoraSoft Finacle" },
    { label: "SkoraSoft Live Enterprise Suite" },
    { label: "SkoraSoft Cortex" },
    { label: "SkoraSoft Meridian" }
  ],
  insights: [
    { label: "Overview" },
    { label: "Connect" },
    { label: "About Us" },
    { label: "Videos" }
  ],
  about: [
    { label: "Overview" },
    { label: "History" },
    { label: "ESG" },
    { label: "Management Profiles" },
    { label: "SkoraSoft Knowledge Institute" },
    { label: "SkoraSoft Stories" },
    { label: "Champions Evolve" },
    { label: "SkoraSoft Springboard" }
  ]
};

export function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOverlayMenu, setActiveOverlayMenu] = useState("navigate");
  const [mobileViewState, setMobileViewState] = useState('links');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";

      const elements = [
        ...MENU_DATA.map(m => m.id),
        "portfolio", "insights"
      ]
        .map(id => ({ id, el: document.getElementById(id) }))
        .filter(item => item.el)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop);

      for (const item of elements) {
        if (item.el.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMobileMenuOpen(false);
  };

  const renderRightContent = () => {
    if (SUB_MENUS[activeOverlayMenu]) {
      const subLinks = SUB_MENUS[activeOverlayMenu];
      return (
        <div className="mobile-sub-links-container">
          {subLinks.map((link, i) => (
            <div 
              key={i} 
              className={`mobile-sub-link-item ${link.isHeader ? 'header' : ''}`}
              onClick={() => {
                const activeItem = OVERLAY_MENUS.find(m => m.id === activeOverlayMenu);
                if (activeItem?.route) handleNavClick(activeItem.route);
                else handleNavClick('home');
              }}
            >
              {link.label}
            </div>
          ))}
        </div>
      );
    }

    switch (activeOverlayMenu) {
      case 'navigate':
        return (
          <div className="mega-menu-cards">
            <div className="mega-card tall" onClick={() => handleNavClick('about')}>
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract" />
              <div className="mega-card-overlay">
                <h3 className="mega-card-title">Being resilient. That's live Enterprise.</h3>
                <span className="mega-card-link">Know more ↗</span>
              </div>
            </div>
            <div className="mega-menu-cards-col">
              <div className="mega-card short" onClick={() => handleNavClick('services')}>
                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" alt="Digital core" />
                <div className="mega-card-overlay">
                  <h3 className="mega-card-title">Digital core capabilities</h3>
                  <span className="mega-card-link">Know more ↗</span>
                </div>
              </div>
              <div className="mega-card short" onClick={() => handleNavClick('technologies')}>
                <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2564&auto=format&fit=crop" alt="AI" />
                <div className="mega-card-overlay">
                  <h3 className="mega-card-title">AI & Automation</h3>
                  <span className="mega-card-link">Know more ↗</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        const activeItem = OVERLAY_MENUS.find(m => m.id === activeOverlayMenu);
        return (
          <div className="mega-menu-cards">
            <div className="mega-card tall" style={{ gridColumn: '1 / -1', height: '400px' }} onClick={() => activeItem?.route ? handleNavClick(activeItem.route) : null}>
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" alt="Placeholder" />
              <div className="mega-card-overlay">
                <h3 className="mega-card-title">Explore {activeItem?.label}</h3>
                <span className="mega-card-link">Go to section ↗</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: scrolled ? "16px 0" : "24px 0",
          background: scrolled ? "rgba(6, 10, 16, 0.6)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* LEFT: HAMBURGER & LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flex: 1
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(true);
                setMobileViewState('links');
              }}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="Open Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="15" y2="18"></line>
              </svg>
            </button>

            <img
              src="/logo-skora.png"
              alt="SkoraSoft"
              style={{ height: "40px", objectFit: "contain", cursor: "pointer", filter: "brightness(0) invert(1)" }}
              onClick={() => handleNavClick("home")}
            />
          </div>

          {/* CENTER PILL */}
          <div
            className="desktop-only"
            style={{
              display: "flex",
              justifyContent: "center",
              flex: 2,
            }}
          >
            <div style={{
              display: "flex",
              gap: "8px",
              background: "#BBD2CF",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              padding: "6px 12px",
              borderRadius: "999px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
            }}>
              {[
                { name: "Services", id: "services" },
                { name: "Industries", id: "industries" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Insights", id: "insights" }
              ].map((menu) => (
                <button
                  key={menu.name}
                  onClick={() => scrollTo(menu.id)}
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: activeSection === menu.id ? "#000" : "#444",
                    background: activeSection === menu.id ? "rgba(0,0,0,0.05)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== menu.id) e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== menu.id) e.currentTarget.style.color = "#444";
                  }}
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="desktop-only" style={{ flex: 1, textAlign: "right", display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => handleNavClick("contact")}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,217,196,0.2)";
                e.currentTarget.style.border = "1px solid rgba(13,217,196,0.5)";
                e.currentTarget.style.color = "#0dd9c4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Ask AI
            </button>
          </div>
        </div>
      </nav>

      {/* MEGA MENU OVERLAY */}
      <div className={`mega-menu-overlay ${mobileMenuOpen ? 'open' : ''} mobile-view-${mobileViewState}`}>
        <div className="mega-menu-left">
          <button className="mega-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="mega-menu-links-container">
            {OVERLAY_MENUS.map((menu) => (
              <button
                key={menu.id}
                className={`mega-menu-link ${activeOverlayMenu === menu.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveOverlayMenu(menu.id);
                  setMobileViewState('content');
                }}
              >
                {menu.label}
              </button>
            ))}
          </div>

          <div className="mega-menu-socials">
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </a>
          </div>
        </div>

        <div className="mega-menu-right">
          <div className="mega-menu-content">
            <button className="mega-menu-close mobile-back-btn" onClick={() => setMobileViewState('links')} style={{ display: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="mega-menu-title">{OVERLAY_MENUS.find(m => m.id === activeOverlayMenu)?.label}</h2>
            {renderRightContent()}
          </div>
        </div>
      </div>
      <style>
        {`
          .mega-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 9999;
            background: #BBD2CF;
            display: flex;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
          }
          .mega-menu-overlay.open {
            opacity: 1 !important;
            pointer-events: auto !important;
            visibility: visible !important;
          }

          .mega-menu-left {
            width: 320px;
            height: 100%;
            padding: 24px 16px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            position: relative;
          }

          .mega-menu-close {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ffffff;
            border: none;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #000000;
            margin-bottom: 32px;
            margin-left: 8px;
            transition: transform 0.3s ease;
            flex-shrink: 0;
          }
          .mega-menu-close:hover {
            transform: rotate(90deg);
          }

          .mega-menu-links-container {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .mega-menu-link {
            padding: 14px 20px;
            font-size: 16px;
            color: #4a5568;
            background: transparent;
            border: none;
            text-align: left;
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            font-family: 'DM Sans', sans-serif;
            transition: all 0.3s ease;
            display: block;
            width: 100%;
          }
          .mega-menu-link:hover {
            color: #1a202c;
            background: rgba(0,0,0,0.03);
          }
          .mega-menu-link.active {
            background: #ffffff;
            color: #1a202c;
            font-weight: 500;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          }
          .mega-menu-link.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            bottom: 10px;
            width: 4px;
            background: #2563eb;
            border-radius: 0 4px 4px 0;
          }

          .mega-menu-socials {
            margin-top: auto;
            padding-top: 40px;
            display: flex;
            gap: 20px;
            padding-left: 20px;
            padding-bottom: 24px;
          }
          .mega-menu-socials a {
            color: #4a5568;
            transition: color 0.3s ease;
          }
          .mega-menu-socials a:hover {
            color: #2563eb;
          }

          .mega-menu-right {
            flex: 1;
            height: 100%;
            padding: 24px 24px 24px 0;
            display: flex;
            flex-direction: column;
          }

          .mega-menu-content {
            background: #ffffff;
            border-radius: 24px;
            width: 100%;
            height: 100%;
            padding: 48px;
            overflow-y: auto;
            box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          }

          .mega-menu-title {
            font-size: 32px;
            color: #1a202c;
            font-family: 'DM Sans', sans-serif;
            margin-bottom: 32px;
            font-weight: 400;
          }

          .mega-menu-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }

          .mega-menu-cards-col {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .mega-card {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            width: 100%;
          }
          .mega-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s ease;
          }
          .mega-card:hover img {
            transform: scale(1.05);
          }
          .mega-card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 32px;
            pointer-events: none;
          }
          .mega-card-title {
            color: #ffffff;
            font-size: 24px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.3;
          }
          .mega-card-link {
            color: #ffffff;
            font-size: 15px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 4px;
            text-decoration: underline;
            text-underline-offset: 4px;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          .mega-card:hover .mega-card-link {
            opacity: 1;
          }

          .mega-card.tall {
            height: 500px;
          }
          .mega-card.short {
            height: 238px;
          }

          .mobile-sub-links-container {
            background: #f4f7fb;
            border-radius: 16px;
            padding: 12px 0;
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .mobile-sub-link-item {
            padding: 16px 24px;
            color: #1a202c;
            font-size: 15px;
            font-family: 'DM Sans', sans-serif;
            cursor: pointer;
            transition: background 0.3s;
          }
          .mobile-sub-link-item:hover {
            background: #e2e8f0;
          }
          .mobile-sub-link-item.header {
            font-weight: 600;
            border-bottom: 1px solid #e2e8f0;
            margin-bottom: 8px;
            padding-bottom: 16px;
          }

          @media (max-width: 900px) {
            .mega-menu-overlay {
              display: block;
              overflow: hidden;
              background: #f8fafc;
            }
            .mega-menu-left {
              width: 100%;
              height: 100vh;
              position: absolute;
              top: 0;
              left: 0;
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
              padding-bottom: 24px;
              overflow-y: auto;
              background: #f8fafc;
            }
            .mega-menu-right {
              width: 100%;
              height: 100vh;
              position: absolute;
              top: 0;
              left: 0;
              padding: 0;
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
              background: #ffffff;
            }
            
            .mega-menu-overlay.mobile-view-links .mega-menu-right {
              transform: translateX(100%);
              opacity: 0;
              pointer-events: none;
            }
            .mega-menu-overlay.mobile-view-links .mega-menu-left {
              transform: translateX(0);
              opacity: 1;
              pointer-events: auto;
            }
            
            .mega-menu-overlay.mobile-view-content .mega-menu-left {
              transform: translateX(-50%);
              opacity: 0;
              pointer-events: none;
            }
            .mega-menu-overlay.mobile-view-content .mega-menu-right {
              transform: translateX(0);
              opacity: 1;
              pointer-events: auto;
            }

            .mega-menu-content {
              border-radius: 0;
              padding: 24px 16px;
              height: 100vh;
              overflow-y: auto;
            }
            .mega-menu-cards {
              grid-template-columns: 1fr;
            }
            .mega-card.tall, .mega-card.short {
              height: 300px;
            }
            .mobile-back-btn {
              display: flex !important;
              margin-bottom: 24px;
              margin-left: 0;
              background: #f1f5f9;
              box-shadow: none;
            }
            .mega-menu-title {
              font-size: 28px;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  );
}