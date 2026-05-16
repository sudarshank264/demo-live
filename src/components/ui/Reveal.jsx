import { useInView } from "../../hooks/useInView";

export function Reveal({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, vis] = useInView();
  const hidden = dir === "up" ? "translateY(36px)" : dir === "left" ? "translateX(-36px)" : dir === "right" ? "translateX(36px)" : "scale(0.94)";
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : hidden,
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}
