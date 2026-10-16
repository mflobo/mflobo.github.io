import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="section-header">
                <span className="section-eyebrow">01 // Profile</span>
                <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
            </div>

            <div className="about-grid">
                <div className="glass-card" style={{
                    aspectRatio: '1',
                    width: '100%',
                    maxWidth: '340px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    padding: '6px',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(123, 47, 247, 0.25))'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="Matheus Lobo"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>

                <div className="glass-card" style={{ padding: 'clamp(28px, 4vw, 42px)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                        <span className="tech-tag">Game Designer</span>
                        <span className="tech-tag">Future Games</span>
                        <span className="tech-tag">Technical &amp; Systems Design</span>
                    </div>

                    <p style={{ fontSize: '1.08rem', marginBottom: '20px', color: 'var(--text-primary)', lineHeight: 1.75 }}>
                        I am a junior Game Designer dedicated to understanding and crafting memorable experiences in video games. As someone with a background in
                        programming, my approach combines software engineering proficiency with artistic vision, ensuring that every mechanic I implement connects
                        narrative intent with technical efficiency.
                    </p>
                    <p style={{ fontSize: '1.08rem', marginBottom: '0', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                        It's very exciting for me to be currently studying at Future Games; since getting my PS1 in 2001, this medium has captivated me entirely,
                        shaping my imagination and fueling my interest for culture in general. Such an important part of my life is now finally also a professional endeavor.
                    </p>
                    {/* <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem' }} className="text-gradient">X+</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Years Experience</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem' }} className="text-gradient">Y+</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects Completed</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
