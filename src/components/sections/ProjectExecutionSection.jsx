import { useInView } from "../../hooks/useInView";
import { GradBadge } from "../ui/GradBadge";
import { CheckItem } from "../ui/CheckItem";

export function ProjectExecutionSection() {
  const [ref, vis] = useInView(0.08);
  const steps = [
    "Requirement discovery and validation",
    "Solution architecture and planning",
    "Controlled development and testing",
    "Quality assurance and security review",
    "Deployment, handover and support"
  ];
  const ascii = `
            @@@@@@@
        @@@@     @@@@
      @@             @@
    @@     #######     @@
   @@    ###     ###    @@
  @@    ##   ###   ##    @@
  @@   ##   #####   ##   @@
   @@  ##   #####   ##  @@
       ##    ###    ##
        ###       ###
          #########
            @@@@
          #########
        ###       ###
       ##    ###    ##
   @@  ##   #####   ##  @@
  @@   ##   #####   ##   @@
  @@    ##   ###   ##    @@
   @@    ###     ###    @@
    @@     #######     @@
      @@             @@
        @@@@     @@@@
            @@@@@@@
`;

  return (
    <section ref={ref} style={{ background: "#BBD2CF", borderTop: "1px solid #f0f0f0" }}>
      <div className="responsive-container">
        <div className="responsive-flex" style={{ alignItems: "center" }}>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-30px)", transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s" }}>
            <pre style={{ fontFamily: "'Courier New',monospace", fontSize: "clamp(8px,1.2vw,11px)", lineHeight: 1.4, color: "#4f0333ff", margin: 0, opacity: 0.75, userSelect: "none", letterSpacing: "0.04em" }}>{ascii}</pre>
          </div>
          <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(30px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}>
            <GradBadge>Our Process</GradBadge>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,2.8vw,2.1rem)", color: "#0f3a3e", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "12px" }}>PROJECT EXECUTION<br />APPROACH</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "#777", lineHeight: 1.75, marginBottom: "28px" }}>We follow a clear and collaborative execution model that keeps stakeholders aligned and informed.</p>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "14px", color: "#111", marginBottom: "16px" }}>Our Execution Approach Includes</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              {steps.map((s, i) => (
                <div key={i} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(12px)", transition: `opacity 0.6s ease ${0.4 + i * 0.07} s, transform 0.6s ease ${0.4 + i * 0.07} s` }}>
                  <CheckItem text={s} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "#888", fontStyle: "italic", borderLeft: "3px solid #dc262440", paddingLeft: "14px", lineHeight: 1.7 }}>
              Each project is managed by a dedicated team with structured communication and escalation paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
