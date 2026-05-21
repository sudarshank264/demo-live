import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { BLOGS } from "../data/blogs";
import { ArrowUpRight, Search } from "lucide-react";

export function Blogs() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const categories = ["All", ...new Set(BLOGS.map(blog => blog.category))];

  const filteredBlogs = BLOGS.filter(blog => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = BLOGS[0];
  const otherBlogs = filteredBlogs.filter(blog => blog.id !== featuredBlog.id);

  return (
    <div style={{ background: "#ADF4E6", color: "#111", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar scrollTo={scrollTo} />

      {/* 1. Hero Header */}
      <section style={{ padding: "180px 32px 60px", background: "linear-gradient(180deg, #ADF4E6 0%, rgba(13,217,196,0.15) 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(0,217,196,0.1)", color: "#00d9c4", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "24px", border: "1px solid rgba(0,217,196,0.2)" }}>
            SkoraSoft Insights
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", color: "#001e4a" }}>
            Stories, Ideas & Tech Innovations
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 40px" }}>
            Explore our latest research, corporate announcements, and deep dives into AI, Cloud Computing, and Next-Gen technologies.
          </p>

          {/* Search bar */}
          <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
            <Search size={18} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
            <input
              type="text"
              placeholder="Search articles, topics or trends..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 16px 16px 48px",
                borderRadius: "14px",
                border: "1px solid rgba(0,30,74,0.1)",
                background: "#ffffff",
                color: "#1e293b",
                fontSize: "15px",
                outline: "none",
                boxShadow: "0 4px 20px rgba(0,30,74,0.03)",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s ease"
              }}
              onFocus={e => e.target.style.borderColor = "#00d9c4"}
              onBlur={e => e.target.style.borderColor = "rgba(0,30,74,0.1)"}
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section style={{ padding: "40px 32px 100px", flexGrow: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Category Filter Bar */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "99px",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background: selectedCategory === cat ? "#001e4a" : "#ffffff",
                  color: selectedCategory === cat ? "#ffffff" : "#475569",
                  boxShadow: "0 2px 10px rgba(0,30,74,0.03)",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans', sans-serif"
                }}
                onMouseEnter={e => {
                  if (selectedCategory !== cat) {
                    e.currentTarget.style.background = "#f1f5f9";
                    e.currentTarget.style.color = "#001e4a";
                  }
                }}
                onMouseLeave={e => {
                  if (selectedCategory !== cat) {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "#475569";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article (only displayed if search/category matches it and "All" is active or its category matches) */}
          {filteredBlogs.some(b => b.id === featuredBlog.id) && (
            <div style={{ marginBottom: "64px" }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#001e4a", marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Featured Article
              </h2>
              <div 
                onClick={() => navigate(`/blog/${featuredBlog.slug}`)}
                className="featured-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                  background: "#ffffff",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,30,74,0.05)",
                  cursor: "pointer",
                  transition: "all 0.4s ease"
                }}
              >
                <div style={{ overflow: "hidden", position: "relative", minHeight: "320px" }}>
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    className="featured-image"
                  />
                </div>
                <div style={{ padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#00d9c4", textTransform: "uppercase", letterSpacing: "1px" }}>
                      {featuredBlog.category}
                    </span>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#cbd5e1" }}></span>
                    <span style={{ fontSize: "13px", color: "#64748b" }}>{featuredBlog.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#001e4a", lineHeight: 1.2, marginBottom: "16px" }}>
                    {featuredBlog.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.6, marginBottom: "32px" }}>
                    {featuredBlog.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", borderTop: "1px solid #f1f5f9", paddingTop: "24px" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>{featuredBlog.author}</div>
                      <div style={{ fontSize: "12px", color: "#64748b" }}>{featuredBlog.date}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 700, color: "#001e4a", fontSize: "14px" }}>
                      Read Article <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Articles */}
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: "700", color: "#001e4a", marginBottom: "24px", letterSpacing: "1px", textTransform: "uppercase" }}>
              Latest Articles
            </h2>
            
            {filteredBlogs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0", background: "#ffffff", borderRadius: "24px" }}>
                <p style={{ fontSize: "18px", color: "#64748b", fontWeight: 500 }}>No articles found matching your criteria.</p>
                <button 
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                  style={{ marginTop: "16px", padding: "10px 20px", borderRadius: "8px", background: "#001e4a", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600 }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))", gap: "32px" }}>
                {(selectedCategory === "All" && searchQuery === "" ? otherBlogs : filteredBlogs).map(blog => (
                  <div
                    key={blog.id}
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                    className="blog-grid-card"
                    style={{
                      background: "#ffffff",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,30,74,0.03)",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                        className="grid-image"
                      />
                    </div>
                    <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#00d9c4", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          {blog.category}
                        </span>
                        <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#cbd5e1" }}></span>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>{blog.readTime}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "#001e4a", lineHeight: 1.3, marginBottom: "12px" }}>
                        {blog.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, marginBottom: "24px" }}>
                        {blog.excerpt}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", borderTop: "1px solid #f8fafc", paddingTop: "20px" }}>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 600, color: "#1e293b" }}>{blog.author}</div>
                          <div style={{ fontSize: "11px", color: "#94a3b8" }}>{blog.date}</div>
                        </div>
                        <div className="arrow-circle" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#001e4a", transition: "all 0.3s ease" }}>
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <style>
        {`
          .featured-card:hover {
            transform: translateY(-5px);
            boxShadow: 0 30px 60px rgba(0,30,74,0.1) !important;
          }
          .featured-card:hover .featured-image {
            transform: scale(1.03);
          }
          .blog-grid-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,30,74,0.08) !important;
          }
          .blog-grid-card:hover .grid-image {
            transform: scale(1.05);
          }
          .blog-grid-card:hover .arrow-circle {
            background: #001e4a !important;
            color: #ffffff !important;
            transform: rotate(45deg);
          }
        `}
      </style>
    </div>
  );
}
