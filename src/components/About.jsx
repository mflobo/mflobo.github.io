import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>About <span className="text-gradient">Me</span></h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '60px',
                alignItems: 'center'
            }}>
                <div className="glass-card" style={{
                    aspectRatio: '1',
                    width: '100%',
                    maxWidth: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    padding: '0'
                }}>
                    <img
                        src="/profile.jpg"
                        alt="Matheus Lobo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                </div>
                <div>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                        I am a junior Game Designer dedicated to understanding and crafting memorable experiences in video games. As someone with a background in
                        programming, my approach combines software engineering proficiency with artistic vision, ensuring that every mechanic I implement connects
                        narrative intent with technical efficiency.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
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
