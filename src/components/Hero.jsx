import React from 'react';
import './BackgroundVideo.css';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            minHeight: '640px',
            width: '100%',
            maxWidth: 'none',
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            isolation: 'isolate'
        }}>
            {/* Background Video */}
            <div className="video-background-container">
                <div className="video-foreground">
                    <iframe
                        src="https://www.youtube.com/embed/0S9zCFHpvnM?autoplay=1&mute=1&loop=1&playlist=0S9zCFHpvnM&controls=0&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        title="Background Video"
                    ></iframe>
                </div>
                <div className="video-overlay"></div>
            </div>

            {/* Content Container (Constrained Width) */}
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                padding: '0 24px',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <div className="glass-card" style={{
                    padding: 'clamp(28px, 5vw, 48px)',
                    maxWidth: '760px',
                    textAlign: 'left',
                    backdropFilter: 'blur(22px)',
                    WebkitBackdropFilter: 'blur(22px)',
                    backgroundColor: 'rgba(10, 10, 14, 0.62)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderTop: '1px solid rgba(0, 212, 255, 0.35)',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        borderRadius: '999px',
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.25)',
                        marginBottom: '20px'
                    }}>
                        <span style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: 'var(--accent-primary)',
                            boxShadow: '0 0 8px var(--accent-primary)'
                        }} />
                        <h4 style={{
                            color: 'var(--accent-primary)',
                            margin: 0,
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em'
                        }}>
                            Let's make a game!
                        </h4>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.75rem, 7vw, 4.75rem)',
                        lineHeight: 1.08,
                        marginBottom: '20px',
                        fontWeight: 800
                    }}>
                        Hi, I'm <span className="text-gradient">Matheus Lobo.</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '36px',
                        maxWidth: '620px',
                        lineHeight: 1.6
                    }}>
                        Crafting engaging mechanics and immersive worlds. Specializing in technical design and systems architecture.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        <a href="#projects" className="btn-primary">
                            View My Work
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Subtle Scroll Down Indicator */}
            <a
                href="#about"
                aria-label="Scroll to About section"
                style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.75
                }}
            >
                <span>Scroll</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </a>
        </section>
    );
};

export default Hero;
