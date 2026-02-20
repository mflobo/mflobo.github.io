import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      padding: isScrolled ? '15px 0' : '25px 0',
      transition: 'var(--transition)',
      background: isScrolled ? 'rgba(10, 10, 12, 0.8)' : 'rgba(10, 10, 12, 0.3)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(8px)',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          transition: 'var(--transition)'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <img
            src="/favicon.png"
            alt="ML Logo"
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              border: '2px solid grey',
              objectFit: 'contain',
              padding: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)' // subtle background to make it pop
            }}
          />
        </a>
        <ul style={{ display: 'flex', gap: '30px' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'var(--transition)'
              }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
