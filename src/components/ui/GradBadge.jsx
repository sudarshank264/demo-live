export function GradBadge({ children }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}>
      <div style={{ width:"16px", height:"16px", background:"linear-gradient(135deg,#0dd9c4,#818cf8)", borderRadius:"3px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        <svg viewBox="0 0 10 10" width="8" height="8"><path d="M1 5h8M6 2l3 3-3 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:"12px", background:"linear-gradient(135deg,#0dd9c4,#818cf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", textTransform:"uppercase", letterSpacing:"0.12em" }}>{children}</span>
    </div>
  );
}
