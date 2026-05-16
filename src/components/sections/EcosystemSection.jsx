import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";

export function EcosystemSection() {
  const [ref, vis] = useInView(0.08);
  const ascii = `       .-=+*#%%%##*+=-.
    :*%@@@@@@@@@@@@@@@@@%*:
  =%@@@@@@@@@@@@@@@@@@@@@@@%=
 +@@@@@%*+==---------==+*%@@@@@+
 @@@@@=.   .:=+*####*+=:.   .=@@@@@
.@@@@=  =@@@@@@@@@@@@@@@@@=  =@@@@.
+@@@+ +@@@@@#=---------=#@@@@@+ +@@@+
%@@@  @@@@@=  :+#######+:  =@@@@@  @@@%
@@@# +@@@@. +@@@@@@@@@@@@@+ .@@@@+ #@@@
@@@# *@@@@ +@@@@@@@@@@@@@@@+ @@@@* #@@@
%@@@  @@@@@=  :+#######+:  =@@@@@  @@@%
+@@@+ +@@@@@#=---------=#@@@@@+ +@@@+
.@@@@=  =@@@@@@@@@@@@@@@@@=  =@@@@.
 @@@@@=.   .:=+*####*+=:.   .=@@@@@
 +@@@@@%*+==---------==+*%@@@@@+
  =%@@@@@@@@@@@@@@@@@@@@@@@%=
    :*%@@@@@@@@@@@@@@@@@%*:
       .-=+*#%%%##*+=-.`;

  return (
    <section
      ref={ref}
      style={{
        background: "#063438",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="responsive-container responsive-flex"
        style={{ padding: "100px 32px" }}
      >
        {/* LEFT */}
        <div style={{ flex: "1 1 50%" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateY(15px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "#ffffff",
                borderRadius: "3px",
              }}
            />
            <span
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                color: "#ffffff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Build with Empathy
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "24px",
              maxWidth: "560px",
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            Ecosystem designed with advanced AI-driven precision and automation.
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              maxWidth: "500px",
              marginBottom: "40px",
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateY(20px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            An ecosystem engineered with cutting-edge AI and automation, designed
            to optimize efficiency while maintaining a human-centric approach.
          </p>

          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateY(20px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                padding: "13px 26px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              Explore Now <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: "1 1 50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            opacity: vis ? 1 : 0,
            transition: "opacity 1s ease 0.4s",
          }}
        >
          <pre
            style={{
              fontFamily: "'Courier New',monospace",
              fontSize: "clamp(6px,0.9vw,9px)",
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              userSelect: "none",
            }}
          >
            {ascii}
          </pre>
        </div>
      </div>
    </section>
  );
}