import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'projects', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: isScrolled ? '12px 0' : '20px 0',
      transition: 'var(--transition)',
      background: isScrolled ? 'rgba(7, 7, 9, 0.85)' : 'rgba(7, 7, 9, 0.35)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid rgba(255, 255, 255, 0.04)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'var(--transition)'
          }}
        >
          <img
            src="/favicon.png"
            alt="ML Logo"
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              border: '1.5px solid rgba(0, 212, 255, 0.5)',
              objectFit: 'contain',
              padding: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.2)'
            }}
          />
          <span className="font-heading" style={{
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)'
          }}>
            Matheus <span className="text-gradient">Lobo</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(0, 212, 255, 0.08)' : 'transparent',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          padding: '16px 24px 20px',
          background: 'rgba(10, 10, 14, 0.96)',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '8px',
                color: activeSection === link.href ? 'var(--accent-primary)' : 'var(--text-secondary)',
                background: activeSection === link.href ? 'rgba(0, 212, 255, 0.08)' : 'transparent'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
