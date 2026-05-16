import { NAV_SOLUTIONS, NAV_INDUSTRIES } from "../../data/constants";

export function Footer() {
  return (
    <footer style={{ background:"#050810", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"64px 0 0" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 32px" }}>
        <div className="footer-grid" style={{ paddingBottom:"56px" }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
              <div style={{ width:"32px", height:"32px", background:"linear-gradient(135deg,#0dd9c4 0%,#38bdf8 50%,#a855f7 100%)", borderRadius:"7px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"15px", color:"#fff" }}>S</span>
              </div>
              <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"16px", color:"#fff" }}>Skora<span style={{ background:"linear-gradient(135deg,#0dd9c4,#818cf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Soft</span></span>
            </div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"13.5px", color:"rgba(170,160,160,0.55)", lineHeight:1.75, maxWidth:"280px", marginBottom:"24px" }}>
              Think Innovative. Build Innovative. One pixel at a time — we build digital experiences that matter.
            </p>
            <div style={{ display:"flex", gap:"10px" }}>
              {["LinkedIn","Twitter","Instagram","Dribbble"].map(s => (
                <a key={s} href="#" style={{ padding:"7px 12px", borderRadius:"7px", fontFamily:"'DM Sans',sans-serif", fontSize:"11px", color:"rgba(180,170,170,0.5)", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.color="#0dd9c4"; e.currentTarget.style.borderColor="rgba(13,217,196,0.4)";}}
                  onMouseLeave={e=>{e.currentTarget.style.color="rgba(180,170,170,0.5)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"13px", color:"#fff", marginBottom:"16px", letterSpacing:"0.05em" }}>Solutions</h4>
            {NAV_SOLUTIONS.slice(0,6).map(l => (
              <a key={l} href="#" style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:"13px", color:"rgba(165,155,155,0.5)", textDecoration:"none", marginBottom:"10px", transition:"color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.color="#0dd9c4"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(165,155,155,0.5)"}>{l}</a>
            ))}
          </div>
          {/* Industries */}
          <div>
            <h4 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"13px", color:"#fff", marginBottom:"16px", letterSpacing:"0.05em" }}>Industries</h4>
            {NAV_INDUSTRIES.map(l => (
              <a key={l} href="#" style={{ display:"block", fontFamily:"'DM Sans',sans-serif", fontSize:"13px", color:"rgba(165,155,155,0.5)", textDecoration:"none", marginBottom:"10px", transition:"color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.color="#0dd9c4"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(165,155,155,0.5)"}>{l}</a>
            ))}
          </div>
          {/* Newsletter */}
          <div>
            <h4 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"13px", color:"#fff", marginBottom:"16px", letterSpacing:"0.05em" }}>Stay Updated</h4>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"12.5px", color:"rgba(160,150,150,0.5)", lineHeight:1.7, marginBottom:"16px" }}>Subscribe to get the latest updates on technology and innovation.</p>
            <div style={{ display:"flex", gap:"8px" }}>
              <input type="email" placeholder="your@email.com" style={{ flex:1, padding:"10px 12px", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.04)", color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:"13px", outline:"none", minWidth:0 }}/>
              <button style={{ padding:"10px 14px", borderRadius:"8px", background:"linear-gradient(135deg,#0dd9c4,#38bdf8,#818cf8)", color:"#050811", fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"13px", border:"none", cursor:"pointer", transition:"background 0.2s", whiteSpace:"nowrap" }}
                onMouseEnter={e=>e.currentTarget.style.background="#0a9e90"}
                onMouseLeave={e=>e.currentTarget.style.background="linear-gradient(135deg,#0dd9c4,#818cf8)"}>→</button>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", padding:"24px 0", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"12px" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"12px", color:"rgba(140,130,130,0.4)" }}>© 2025 SkoraSoft Digital Pvt. Ltd. All rights reserved.</p>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"12px", color:"rgba(140,130,130,0.4)" }}>Made with ♥ in Greater Noida, India</p>
        </div>
      </div>
    </footer>
  );
}
