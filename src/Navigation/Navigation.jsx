import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  
  const computedMenuToggleStyle = {
    ...styles.menuToggle,
    ...(isMobile ? { display: "inline-flex" } : { display: "none" }),
    ...(isOpen ? styles.menuToggleOpen : {}),
  };

  const computedNavMenuStyle = {
    ...styles.navMenu,
    ...(isMobile
      ? isOpen
        ? styles.navMenuMobileOpen
        : styles.navMenuMobileClosed
      : {}),
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.navContent}>
             <AnchorLink
            href="#home"
            offset={72}
            onClick={() => setIsOpen(false)}
            style={styles.logo}
          >
            Portfolio
          </AnchorLink>

          <button
            style={computedMenuToggleStyle}
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>

          <ul style={computedNavMenuStyle}>
            <li style={styles.navItem}>
              <AnchorLink
                href="#home"
                offset={72}
                onClick={() => setIsOpen(false)}
                style={styles.navLink}
              >
                Home
              </AnchorLink>
            </li>
            <li style={styles.navItem}>
              <AnchorLink
                href="#about"
                offset={72}
                onClick={() => setIsOpen(false)}
                style={styles.navLink}
              >
                About
              </AnchorLink>
            </li>
            <li style={styles.navItem}>
              <AnchorLink
                href="#projects"
                offset={72}
                onClick={() => setIsOpen(false)}
                style={styles.navLink}
              >
                Projects
              </AnchorLink>
            </li>
            <li style={styles.navItem}>
              <AnchorLink
                href="#skills"
                offset={72}
                onClick={() => setIsOpen(false)}
                style={styles.navLink}
              >
                Skills
              </AnchorLink>
            </li>
            <li style={styles.navItem}>
              <AnchorLink
                href="#contact"
                offset={72}
                onClick={() => setIsOpen(false)}
                style={styles.navLink}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

/* styles same as you used (kept for brevity; paste your styles object here) */

const styles = {
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(10, 0, 21, 0.85)",
    backdropFilter: "blur(20px)",
    boxShadow:
      "0 8px 32px rgba(139, 92, 246, 0.4), inset 0 -1px 1px rgba(139, 92, 246, 0.2)",
    zIndex: 1000,
    padding: "1rem 0",
    borderBottom: "2px solid rgba(139, 92, 246, 0.3)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    position: "relative",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#a78bfa",
    textDecoration: "none",
    textShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
  },
  menuToggle: {
    background: "none",
    border: "none",
    fontSize: "1.6rem",
    cursor: "pointer",
    color: "#aab0ff",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem 0.5rem",
    borderRadius: "6px",
  },
  menuToggleOpen: {
    color: "#dbe4ff",
    transform: "rotate(90deg)",
    transition: "transform 0.25s ease",
  },
  navMenu: {
    display: "flex",
    listStyle: "none",
    gap: "2rem",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  navMenuMobileClosed: { display: "none" },
  navMenuMobileOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "68px",
    left: 0,
    right: 0,
    backgroundColor: "rgba(8,6,20,0.98)",
    padding: "1.25rem 1.5rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    gap: "1rem",
    zIndex: 999,
  },
  navItem: { margin: 0 },
  navLink: {
    color: "#d0d0d0",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.2s ease",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};
