import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: "SkoraSoft Unveils AI First Value Framework: Uniquely Positioned to Capture New AI Services Opportunity of Over $300 Billion",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "SkoraSoft recognized as a Global Leader in Cloud Transformation and Enterprise Solutions by Top Industry Analysts",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Driving Sustainable Growth: How Next-Gen Digital Twin Technology is Reshaping the Manufacturing Industry",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "The Future of Quantum Computing: Strategic Partnership to Accelerate Enterprise Adoption by 2027",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Empowering 10 Million Lives with Digital Literacy Programs Across the Globe",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  }
];

export function TopStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children[0]) {
        setCardWidth(trackRef.current.children[0].offsetWidth);
      }
    };

    // Initial measurement
    updateWidth();

    // Sometimes fonts or images loading might change layout slightly, retry after a short delay
    const timer = setTimeout(updateWidth, 100);

    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < stories.length - 1) setCurrentIndex(prev => prev + 1);
  };

  return (
    <section style={{ backgroundColor: "#ADF4E6", padding: "80px 0", overflow: "hidden", fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#001e4a", letterSpacing: "1.5px", textTransform: "uppercase", margin: 0 }}>
            TOP STORIES
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: currentIndex === 0 ? "1px solid rgba(0,30,74,0.15)" : "1px solid #001e4a",
                background: "transparent", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: currentIndex === 0 ? "default" : "pointer",
                transition: "all 0.3s ease",
                opacity: currentIndex === 0 ? 0.3 : 1,
                padding: 0
              }}
            >
              <ArrowLeft size={18} color="#001e4a" strokeWidth={1.5} />
            </button>
            <span style={{ fontSize: "15px", fontWeight: "500", color: "#001e4a", fontVariantNumeric: "tabular-nums", minWidth: "40px", textAlign: "center" }}>
              {currentIndex + 1} <span style={{ color: "#6b7280", margin: "0 2px", fontWeight: "400" }}>/</span> {stories.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex === stories.length - 1}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: currentIndex === stories.length - 1 ? "1px solid rgba(0,30,74,0.15)" : "1px solid #001e4a",
                background: "transparent", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: currentIndex === stories.length - 1 ? "default" : "pointer",
                transition: "all 0.3s ease",
                opacity: currentIndex === stories.length - 1 ? 0.3 : 1,
                padding: 0
              }}
            >
              <ArrowRight size={18} color="#001e4a" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div style={{ margin: "0 -24px", padding: "0 24px" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "24px",
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
              transform: `translateX(-${currentIndex * (cardWidth + 24)}px)`,
              width: "max-content"
            }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="top-story-card"
                style={{
                  width: "min(900px, 85vw)",
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#f4f7fb",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,30,74,0.05)",
                  height: "300px"
                }}
              >
                {/* Image side */}
                <div style={{ width: "42%", position: "relative" }}>
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Text side */}
                <div style={{
                  width: "58%",
                  padding: "48px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <h3 style={{
                    fontSize: "clamp(20px, 2vw, 24px)",
                    lineHeight: "1.4",
                    color: "#001e4a",
                    fontWeight: "600",
                    marginBottom: "32px",
                    fontFamily: "'DM Sans', sans-serif"
                  }}>
                    {story.title}
                  </h3>

                  <div>
                    <a
                      href={story.link}
                      className="read-more-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#001e4a",
                        textDecoration: "none",
                        borderBottom: "1px solid #001e4a",
                        paddingBottom: "2px",
                        transition: "all 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif"
                      }}
                    >
                      Read More <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .read-more-link:hover {
            color: #3b82f6 !important;
            border-bottom-color: #3b82f6 !important;
          }
          .read-more-link:hover svg {
            transform: translate(2px, -2px);
            transition: transform 0.3s ease;
          }
          .read-more-link svg {
            transition: transform 0.3s ease;
          }
          @media (max-width: 768px) {
            .top-story-card {
              flex-direction: column !important;
              height: auto !important;
              width: 85vw !important;
            }
            .top-story-card > div:first-child {
              width: 100% !important;
              height: 220px !important;
            }
            .top-story-card > div:last-child {
              width: 100% !important;
              padding: 32px 24px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
