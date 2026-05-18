import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import styles from './Careers.module.css';

const STATS = [
  { num: "8+", label: "Years of Experience" },
  { num: "150+", label: "Projects Delivered" },
  { num: "40+", label: "Team Members" },
  { num: "98%", label: "Client Satisfaction" }
];

const WHY_JOIN = [
  { icon: "🚀", title: "High-Velocity Growth", desc: "Work on products that scale to millions. Your decisions matter from day one — no bureaucracy, no waiting." },
  { icon: "🧠", title: "Mastery-Driven Culture", desc: "Deep expertise across engineering, design, and strategy. Continuous learning is built into how we work, not an afterthought." },
  { icon: "🌍", title: "Inclusive & Collaborative", desc: "Diverse minds, one goal. We value every voice equally and build an environment where talent is recognized and developed." },
  { icon: "🎯", title: "Real Ownership", desc: "Not just a cog in a machine. You'll own features, ship products, and see the direct impact of your work on real businesses." },
  { icon: "⚡", title: "MNC Rigor, Startup Agility", desc: "We operate with the processes of an MNC and the speed of a startup — giving you the best of both worlds." },
  { icon: "💡", title: "Innovation First", desc: "We challenge assumptions and explore smarter ways to solve complex problems — for every client, on every engagement." }
];

const JOBS = [
  { title: "Senior Full Stack Engineer", department: "Engineering", type: "Full-time", location: "Remote / Noida", posted: "Posted 2d ago" },
  { title: "UI/UX Product Designer", department: "Design", type: "Full-time", location: "Hybrid — Delhi NCR", posted: "Posted 4d ago" },
  { title: "React Native Mobile Developer", department: "Engineering", type: "Full-time", location: "Remote", posted: "Posted 1w ago" },
  { title: "Digital Strategy Consultant", department: "Strategy", type: "Full-time", location: "Noida HQ", posted: "Posted 1w ago" },
  { title: "DevOps / Cloud Infrastructure Engineer", department: "Engineering", type: "Full-time", location: "Remote", posted: "Posted 2w ago" },
  { title: "Growth Marketing Manager", department: "Marketing", type: "Full-time", location: "Hybrid — Delhi NCR", posted: "Posted 2w ago" }
];

const PERKS = [
  { icon: "🏥", title: "Health & Wellness", desc: "Comprehensive health insurance for you and your dependents, plus wellness stipend." },
  { icon: "📚", title: "Learning Budget", desc: "Annual ₹50,000 learning budget for courses, books, and conferences." },
  { icon: "🌴", title: "Flexible Time Off", desc: "Generous leave policy with flexible work arrangements — we trust you." },
  { icon: "💻", title: "Remote-First Setup", desc: "Full home office setup allowance plus high-spec equipment on day one." }
];

const PROCESS = [
  { step: "01", title: "Apply Online", desc: "Submit your CV and a short note on why you'd be a great fit. No cover letter essays required." },
  { step: "02", title: "Screening Call", desc: "A 30-min chat with our talent team to learn about your experience and share what we're building." },
  { step: "03", title: "Technical Round", desc: "A focused, real-world task or live interview relevant to the role — no trick questions." },
  { step: "04", title: "Offer & Onboard", desc: "We move fast. If it's a match, you'll have an offer within 48 hours and a warm onboarding team ready." }
];

export function Careers() {
  const [activeFilter, setActiveFilter] = useState("All Roles");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.visible);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredJobs = activeFilter === "All Roles"
    ? JOBS
    : JOBS.filter(job => job.department === activeFilter);

  return (
    <div className={styles.pageWrapper}>
      <Navbar scrollTo={scrollTo} />

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}></div>
          <div className={styles.heroGridLines}></div>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>We're hiring</div>
            <h1>Build the Future<br />with <span className={styles.accent}>Brilliant Minds.</span></h1>
            <p className={styles.heroSub}>Join a team of engineers, designers, and strategists who are redefining what digital products can achieve — for startups to enterprises.</p>
            <div className={styles.heroCtas}>
              <button className={styles.btnPrimary} onClick={() => scrollTo('positions')}>View Open Roles &rarr;</button>
              <button className={styles.btnOutline} onClick={() => scrollTo('life')}>Life at SkoraSoft</button>
            </div>
          </div>
          <div className={styles.heroStats}>
            {STATS.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.num}>{stat.num}</div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY JOIN US */}
        <section className={`${styles.section} ${styles.whySection}`}>
          <div className={styles.sectionContainer}>
            <span className={`${styles.sectionTag} ${styles.reveal}`}>Why SkoraSoft?</span>
            <h2 className={`${styles.sectionTitle} ${styles.reveal} ${styles.revealDelay1}`}>
              More than a job — <span className={styles.accent}>a career that grows.</span>
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal} ${styles.revealDelay2}`}>
              We invest in people as much as we invest in products. Every team member shapes our culture and our clients' outcomes.
            </p>
            <div className={styles.whyGrid}>
              {WHY_JOIN.map((item, idx) => {
                const delayClass = idx === 0 ? '' :
                  idx === 1 ? styles.revealDelay1 :
                    idx === 2 ? styles.revealDelay2 :
                      idx === 3 ? styles.revealDelay3 :
                        styles.revealDelay4;
                return (
                  <div key={idx} className={`${styles.whyCard} ${styles.reveal} ${delayClass}`}>
                    <div className={styles.whyIcon}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className={`${styles.section} ${styles.positionsSection}`} id="positions">
          <div className={styles.sectionContainer}>
            <span className={`${styles.sectionTag} ${styles.reveal}`}>Open Roles</span>
            <h2 className={`${styles.sectionTitle} ${styles.reveal} ${styles.revealDelay1}`}>
              Find your <span className={styles.accent}>perfect fit.</span>
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal} ${styles.revealDelay2}`}>
              We're actively hiring across engineering, design, and strategy. Don't see your role? Send us your CV — we'll find a place for great talent.
            </p>

            <div className={`${styles.filterBar} ${styles.reveal} ${styles.revealDelay2}`}>
              {['All Roles', 'Engineering', 'Design', 'Strategy', 'Marketing'].map(filter => (
                <button
                  key={filter}
                  className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className={styles.jobsList}>
              {filteredJobs.map((job, idx) => {
                const delayClass = idx % 4 === 0 ? '' :
                  idx % 4 === 1 ? styles.revealDelay1 :
                    idx % 4 === 2 ? styles.revealDelay2 :
                      styles.revealDelay3;
                return (
                  <div key={idx} className={`${styles.jobCard} ${styles.reveal} ${delayClass}`}>
                    <div className={styles.jobLeft}>
                      <div className={styles.jobTitle}>{job.title}</div>
                      <div className={styles.jobTags}>
                        <span className={`${styles.tag} ${styles.tagDept}`}>{job.department}</span>
                        <span className={`${styles.tag} ${styles.tagType}`}>{job.type}</span>
                        <span className={`${styles.tag} ${styles.tagLoc}`}>📍 {job.location}</span>
                      </div>
                    </div>
                    <div className={styles.jobRight}>
                      <span className={styles.jobPosted}>{job.posted}</span>
                      <button className={styles.applyBtn}>Apply Now</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LIFE AT SKORASOFT */}
        <section className={`${styles.section} ${styles.lifeSection}`} id="life">
          <div className={styles.sectionContainer}>
            <div className={styles.lifeInner}>
              <div className={styles.lifeText}>
                <span className={`${styles.sectionTag} ${styles.reveal}`}>Our Culture</span>
                <h2 className={`${styles.sectionTitle} ${styles.reveal} ${styles.revealDelay1}`}>
                  Life at <span className={styles.accent}>SkoraSoft.</span>
                </h2>
                <p className={`${styles.sectionSub} ${styles.reveal} ${styles.revealDelay2}`} style={{ marginBottom: "36px" }}>
                  We're building a place where brilliant people thrive — with the freedom to experiment, the support to grow, and the satisfaction of shipping great work.
                </p>
                <div className={styles.perksList}>
                  {PERKS.map((perk, idx) => {
                    const delayClass = idx === 0 ? styles.revealDelay2 :
                      idx === 1 ? styles.revealDelay3 :
                        idx === 2 ? styles.revealDelay3 :
                          styles.revealDelay4;
                    return (
                      <div key={idx} className={`${styles.perkItem} ${styles.reveal} ${delayClass}`}>
                        <div className={styles.perkIcon}>{perk.icon}</div>
                        <div className={styles.perkText}>
                          <h4>{perk.title}</h4>
                          <p>{perk.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.lifeVisual}>
                <div className={`${styles.lifeCard} ${styles.lifeCardWide} ${styles.reveal}`}>
                  <div className={styles.bigNum}>4.9★</div>
                  <div className={styles.cardLabel}>Employee Rating</div>
                  <div className={styles.cardDesc}>Glassdoor avg across 60+ reviews</div>
                </div>
                <div className={`${styles.lifeCard} ${styles.reveal} ${styles.revealDelay1}`}>
                  <div className={styles.bigNum}>92%</div>
                  <div className={styles.cardLabel}>Internal Promotions</div>
                  <div className={styles.cardDesc}>Leadership hired from within</div>
                </div>
                <div className={`${styles.lifeCard} ${styles.reveal} ${styles.revealDelay2}`}>
                  <div className={styles.bigNum}>18</div>
                  <div className={styles.cardLabel}>Nationalities</div>
                  <div className={styles.cardDesc}>Diverse team across India & beyond</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIRING PROCESS */}
        <section className={`${styles.section} ${styles.processSection}`}>
          <div className={styles.sectionContainer}>
            <span className={`${styles.sectionTag} ${styles.reveal}`}>How it works</span>
            <h2 className={`${styles.sectionTitle} ${styles.reveal} ${styles.revealDelay1}`}>
              Our <span className={styles.accent}>hiring process.</span>
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal} ${styles.revealDelay2}`}>
              Transparent, fair, and fast. We respect your time — most candidates hear back within 5 business days.
            </p>
            <div className={styles.processSteps}>
              {PROCESS.map((step, idx) => {
                const delayClass = idx === 0 ? '' :
                  idx === 1 ? styles.revealDelay1 :
                    idx === 2 ? styles.revealDelay2 :
                      styles.revealDelay3;
                return (
                  <div key={idx} className={`${styles.step} ${styles.reveal} ${delayClass}`}>
                    <div className={styles.stepNum}>{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.ctaInner}>
            <span className={`${styles.sectionTag} ${styles.reveal}`} style={{ display: "block", textAlign: "center" }}>
              Don't see your role?
            </span>
            <h2 className={`${styles.sectionTitle} ${styles.reveal} ${styles.revealDelay1}`}>
              We're always looking for <span className={styles.accent}>great people.</span>
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal} ${styles.revealDelay2}`} style={{ margin: "16px auto 40px" }}>
              Drop your email and we'll reach out when a role that fits you opens up.
            </p>
            <form className={`${styles.ctaEmailForm} ${styles.reveal} ${styles.revealDelay3}`} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" required />
              <button type="submit">Notify Me</button>
            </form>
            <p style={{ fontSize: "12px", color: "var(--text-light-body)", marginTop: "16px" }} className={`${styles.reveal} ${styles.revealDelay4}`}>
              Or email us directly at <a href="mailto:careers@skorasoft.com" style={{ color: "var(--teal)", textDecoration: "none" }}>careers@skorasoft.com</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
