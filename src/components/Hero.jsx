import React from 'react';
import './BackgroundVideo.css';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            width: '100%',
            maxWidth: 'none',
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Video */}
            <div className="video-background-container">
                <div className="video-foreground">
                    <iframe
                        src="https://www.youtube.com/embed/hMzr2soXlrU?autoplay=1&mute=1&loop=1&playlist=hMzr2soXlrU&controls=0&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1"
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
                padding: '0 20px',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <div className="glass-card" style={{
                    padding: '40px',
                    maxWidth: '800px',
                    textAlign: 'left',
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '20px'
                    }}>
                        Hi, I'm <span className="text-gradient">Matheus Lobo.</span>
                    </h1>
                    <h4 style={{
                        color: 'var(--accent-primary)',
                        marginBottom: '10px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Let's make a game!
                    </h4>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px',
                        maxWidth: '600px'
                    }}>
                        Crafting engaging mechanics and immersive worlds. Specializing in technical design and systems architecture.
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" style={{
                            padding: '12px 28px',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                            fontWeight: 600,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(5px)'
                        }} onMouseEnter={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.target.style.borderColor = 'var(--glass-border)'}>
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
