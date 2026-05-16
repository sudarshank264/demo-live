import { useState, useEffect } from "react";

export function HeroSection({ scrollTo }) {
  const fullTextWhite = "Build Brands | Drive ";
  const fullTextTeal = "Growth";

  const [displayedWhite, setDisplayedWhite] = useState("");
  const [displayedTeal, setDisplayedTeal] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let timeout;
    let whiteIndex = 0;
    let tealIndex = 0;

    const type = () => {
      if (whiteIndex < fullTextWhite.length) {
        setDisplayedWhite(fullTextWhite.slice(0, whiteIndex + 1));
        whiteIndex++;
        timeout = setTimeout(type, 65);
      } else if (tealIndex < fullTextTeal.length) {
        setDisplayedTeal(fullTextTeal.slice(0, tealIndex + 1));
        tealIndex++;
        timeout = setTimeout(type, 65);
      } else {
        setShowCursor(false);
        setTypingDone(true);
      }
    };

    timeout = setTimeout(type, 500); // Initial delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        backgroundColor: "#030014",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.85) contrast(1.1)",
        }}
      >
        <source src="/skorasoft_cinematic_hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(3, 0, 20, 0.2) 0%, rgba(3, 0, 20, 0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* CENTER CONTENT */}
      <div
        className="responsive-container"
        style={{
          textAlign: "center",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <style>
          {`
            @keyframes cursor-blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}
        </style>

        {/* HEADING */}
        <h1
          className="text-fluid-h1"
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "20px",
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            minHeight: "1.2em",
            whiteSpace: "pre-wrap",
          }}
        >
          {displayedWhite}
          <span style={{ color: "#00e5c0", textShadow: "0 0 20px rgba(0, 229, 192, 0.5)" }}>{displayedTeal}</span>
          {showCursor && (
            <span style={{
              color: "#00e5c0",
              animation: "cursor-blink 1s step-end infinite",
              marginLeft: "4px",
              fontWeight: 400,
            }}>|</span>
          )}
        </h1>

        {/* SUBTEXT */}
        <p
          className="text-fluid-p"
          style={{
            fontFamily: "'DM Sans',sans-serif",
            color: "rgba(255, 255, 255, 0.85)",
            marginBottom: "40px",
            maxWidth: "650px",
            lineHeight: 1.7,
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            opacity: typingDone ? 1 : 0,
            transform: typingDone ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease-out",
          }}
        >
          We design, build, and scale high-performing digital products for modern businesses.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => scrollTo("services")}
          style={{
            padding: "14px 34px",
            borderRadius: "999px",
            border: "1px solid rgba(0, 195, 255, 0.4)",
            background: "rgba(0, 195, 255, 0.1)",
            color: "#ffffff",
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 20px rgba(0, 195, 255, 0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 0 35px rgba(0, 195, 255, 0.5)";
            e.currentTarget.style.background = "rgba(0, 195, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(0, 195, 255, 0.2)";
            e.currentTarget.style.background = "rgba(0, 195, 255, 0.1)";
          }}
        >
          Let’s build your product →
        </button>
      </div>
    </section>
  );
}