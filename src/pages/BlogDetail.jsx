import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { BLOGS } from "../data/blogs";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Mail } from "lucide-react";

export function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find current blog
  const blog = BLOGS.find(b => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  if (!blog) {
    return (
      <div style={{ background: "#ADF4E6", color: "#111", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar scrollTo={scrollTo} />
        <div style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "180px 32px 100px" }}>
          <div style={{ textCenter: "center", maxWidth: "500px", padding: "48px", background: "#ffffff", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,30,74,0.05)" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: 800, color: "#001e4a", marginBottom: "16px" }}>Post Not Found</h2>
            <p style={{ color: "#64748b", marginBottom: "32px", lineHeight: 1.6 }}>The article you are looking for does not exist or has been moved to another URL.</p>
            <button 
              onClick={() => navigate("/blogs")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "8px", background: "#001e4a", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600 }}
            >
              <ArrowLeft size={16} /> Back to Blogs
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get recent posts excluding current one
  const recentPosts = BLOGS.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <div style={{ background: "#ADF4E6", color: "#111", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar scrollTo={scrollTo} />

      {/* Breadcrumbs & Back Link */}
      <section style={{ padding: "140px 32px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "14px", color: "#64748b" }}>
            <Link to="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link to="/blogs" style={{ color: "#64748b", textDecoration: "none" }}>Blogs</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#001e4a", fontWeight: 500 }}>{blog.category}</span>
          </div>
          <Link 
            to="/blogs" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#001e4a", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}
          >
            <ArrowLeft size={16} /> All Articles
          </Link>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section style={{ padding: "0 32px 100px", flexGrow: 1 }}>
        <div 
          style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", 
            gap: "48px",
            alignItems: "flex-start"
          }}
          className="blog-detail-grid"
        >
          {/* Main Article Column */}
          <div className="blog-main-content" style={{ background: "#ffffff", padding: "48px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,30,74,0.03)" }}>
            
            {/* Tag/ReadTime */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#00d9c4", textTransform: "uppercase", letterSpacing: "1px", background: "rgba(0,217,196,0.08)", padding: "4px 12px", borderRadius: "6px" }}>
                {blog.category}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#64748b" }}>
                <Clock size={14} /> {blog.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#001e4a", lineHeight: 1.15, marginBottom: "24px" }}>
              {blog.title}
            </h1>

            {/* Author / Date Info */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", paddingBottom: "32px", borderBottom: "1px solid #f1f5f9", marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justify: "center", border: "1px solid #cbd5e1" }}>
                  <User size={18} color="#001e4a" style={{ margin: "auto" }} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>{blog.author}</div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>Author</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#64748b" }}>
                <Calendar size={16} /> {blog.date}
              </div>
            </div>

            {/* Hero Image */}
            <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", marginBottom: "40px" }}>
              <img 
                src={blog.image} 
                alt={blog.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Content Blocks */}
            <div className="blog-body-text" style={{ fontSize: "17px", color: "#334155", lineHeight: 1.8 }}>
              {blog.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} style={{ marginBottom: "28px" }}>
                      {block.text}
                    </p>
                  );
                } else if (block.type === "heading") {
                  return (
                    <h3 
                      key={index} 
                      style={{ 
                        fontFamily: "'Outfit', sans-serif", 
                        fontSize: "24px", 
                        fontWeight: 700, 
                        color: "#001e4a", 
                        marginTop: "44px", 
                        marginBottom: "18px" 
                      }}
                    >
                      {block.text}
                    </h3>
                  );
                } else if (block.type === "quote") {
                  return (
                    <blockquote 
                      key={index} 
                      style={{ 
                        borderLeft: "4px solid #00d9c4", 
                        padding: "16px 24px", 
                        margin: "36px 0", 
                        background: "#f8fafc", 
                        borderRadius: "0 12px 12px 0",
                        fontStyle: "italic",
                        fontSize: "19px",
                        color: "#0f172a",
                        lineHeight: 1.6
                      }}
                    >
                      "{block.text}"
                    </blockquote>
                  );
                } else if (block.type === "list") {
                  return (
                    <ul key={index} style={{ paddingLeft: "24px", marginBottom: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} style={{ listStyleType: "square", color: "#334155" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="blog-sidebar" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            {/* Newsletter widget */}
            <div 
              style={{ 
                background: "linear-gradient(135deg, #001e4a 0%, #060b13 100%)", 
                color: "#ffffff", 
                padding: "36px", 
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,30,74,0.12)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(0, 217, 196, 0.1)", display: "flex", alignItems: "center", justify: "center", marginBottom: "20px" }}>
                <Mail size={22} color="#00d9c4" style={{ margin: "auto" }} />
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Subscribe to Insights</h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.5, marginBottom: "24px" }}>
                Get the latest articles, industry perspectives, and updates delivered straight to your inbox.
              </p>
              <form onSubmit={e => { e.preventDefault(); alert("Subscribed successfully!"); }}>
                <input 
                  type="email" 
                  required
                  placeholder="name@email.com" 
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    marginBottom: "16px",
                    outline: "none",
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                  onFocus={e => e.target.style.borderColor = "#00d9c4"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
                <button 
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg,#0dd9c4,#818cf8)",
                    border: "none",
                    color: "#000000",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "'Outfit', sans-serif"
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.1)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Recent Posts widget */}
            <div style={{ background: "#ffffff", padding: "36px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,30,74,0.03)" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 700, color: "#001e4a", marginBottom: "24px", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px" }}>
                Recent Articles
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {recentPosts.map(post => (
                  <div 
                    key={post.id} 
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    style={{ cursor: "pointer", display: "flex", gap: "16px", alignItems: "flex-start" }}
                    className="sidebar-post-item"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ width: "70px", height: "70px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
                    />
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#001e4a", lineHeight: 1.3, marginBottom: "4px" }} className="sidebar-post-title">
                        {post.title}
                      </h4>
                      <span style={{ fontSize: "11px", color: "#94a3b8" }}>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>
        {`
          .blog-detail-grid {
            grid-template-columns: 2.1fr 1fr !important;
          }
          @media (max-width: 992px) {
            .blog-detail-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
          .sidebar-post-item:hover .sidebar-post-title {
            color: #00d9c4 !important;
          }
        `}
      </style>
    </div>
  );
}
