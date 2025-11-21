import React from "react";
import { useState }from "react";



function Home(){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div>
              <section style={styles.hero} id="home">
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>H!, I'm <span style={styles.highlight}>Harish</span></h1>
        <h2 style={styles.heroSubtitle}>Web Developer Fresher</h2>
        <p style={styles.heroDescription}>
        I Design. I Build. I Create for the Web.
        </p>
        <a 
          // href="#contact" 
          href="https://drive.google.com/file/d/1IZQn-ghEEPj57tZe4KknFVQjbwWXF7pf/view?usp=drive_link"
          style={{
            ...styles.ctaButton,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            boxShadow: isHovered 
              ? '0 12px 35px rgba(139, 92, 246, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
              : '0 8px 25px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Resume
        </a>
      </div>
    </section>
        </div>
    )
}

export default Home;



// About Style


const styles = {
 hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(ellipse at top, #4a00e0 0%, #1a0033 50%, #000000 100%)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '800px',
    position: 'relative',
    zIndex: 2,
    animation: 'fadeInUp 1s ease-out',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))',
  },
  highlight: {
    color: '#ffd700',
  },
  heroSubtitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: '400',
    background: 'linear-gradient(90deg, #a78bfa, #c084fc, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s infinite',
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    lineHeight: '1.8',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 50%, #8b5cf6 100%)',
    backgroundSize: '200% 100%',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.4s ease',
    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 40px rgba(139, 92, 246, 0.3)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
}
