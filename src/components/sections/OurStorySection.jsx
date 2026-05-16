import { useInView } from "../../hooks/useInView";

export function OurStorySection() {
  const [ref, vis] = useInView(0.1);

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 20px",
        background: "transparent", // ❗ important
      }}
    >
      {/* OUTER CURVED CARD */}
      <div
        id="about"
        style={{
          position: "relative",
          borderRadius: "40px",
          overflow: "hidden",
          maxWidth: "1300px",
          margin: "0 auto",
          minHeight: "460px",

          // 👉 background moved here (main fix)
          background: "#020617",

          boxShadow:
            "0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/src/assets/human_robot_hand.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            filter: "brightness(0.9) contrast(1.1)",
            opacity: vis ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.85) 40%, rgba(2,6,23,0.4) 75%, transparent 100%)",
          }}
        />

        {/* Glow Effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 50%, rgba(99,102,241,0.25), transparent 60%)",
          }}
        />

        {/* CONTENT */}
        <div
          className="responsive-grid"
          style={{
            position: "relative",
            zIndex: 2,
            alignItems: "center",
            minHeight: "460px",
            gap: "0"
          }}
        >
          {/* LEFT */}
          <div style={{ padding: "clamp(30px, 5vw, 70px) clamp(20px, 4vw, 60px)" }}>
            <h2
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3rem,6vw,5rem)",
                color: "#fff",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateX(-60px)",
                transition: "all 1s ease",
              }}
            >
              OUR <br /> STORY!
            </h2>
          </div>

          {/* RIGHT */}
          <div style={{ padding: "clamp(30px, 5vw, 60px) clamp(20px, 4vw, 60px)" }}>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                marginBottom: "18px",
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(30px)",
                transition: "all 1s ease 0.3s",
              }}
            >
              SkoraSoft Digital Pvt. Ltd. began with a clear mission — to create
              and execute impactful digital marketing strategies that drive real
              business growth. We combine creative brand development with
              data-driven insights.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "14px",
                color: "rgba(200,200,200,0.65)",
                lineHeight: 1.8,
                opacity: vis ? 1 : 0,
                transform: vis ? "none" : "translateY(30px)",
                transition: "all 1s ease 0.5s",
              }}
            >
              From SEO and content marketing to social media management and
              digital advertising, we focus on enhancing your online presence,
              engaging your target audience, and delivering measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}