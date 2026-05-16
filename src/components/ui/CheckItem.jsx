export function CheckItem({ text, dark = false }) {
  return (
    <div style={{ display:"flex", alignItems:"flex-start", gap:"10px" }}>
      <svg viewBox="0 0 20 20" width="18" height="18" style={{ flexShrink:0, marginTop:"2px" }}>
        <defs><linearGradient id="gcheck" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0dd9c4"/><stop offset="100%" stopColor="#818cf8"/></linearGradient></defs>
        <rect x="1" y="1" width="18" height="18" rx="4" fill="url(#gcheck)"/>
        <path d="M5 10l4 4 6-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"13.5px", color: dark ? "rgba(230,215,215,0.88)" : "#333", lineHeight:1.55 }}>{text}</span>
    </div>
  );
}
