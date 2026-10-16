import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Engines & Tools",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
            ),
            skills: ["Unity", "Unreal Engine 5", "Godot", "FMOD"]
        },
        {
            title: "Design",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
            ),
            skills: ["Systems Design", "Level Design", "Narrative Design", "Prototyping"]
        },
        {
            title: "Technical",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            skills: ["C#", "C++", "Blueprints", "Python", "Git / Source Control"]
        }
    ];

    return (
        <section id="skills">
            <div className="section-header">
                <span className="section-eyebrow">03 // Capabilities</span>
                <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px'
            }}>
                {skillCategories.map((category) => (
                    <div key={category.title} className="glass-card" style={{ padding: '32px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            marginBottom: '24px',
                            paddingBottom: '16px',
                            borderBottom: '1px solid var(--glass-border)'
                        }}>
                            <div className="contact-icon-box">
                                {category.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                margin: 0,
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700
                            }}>
                                {category.title}
                            </h3>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {category.skills.map(skill => (
                                <li key={skill} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '10px 14px',
                                    borderRadius: '10px',
                                    background: 'rgba(255, 255, 255, 0.025)',
                                    border: '1px solid rgba(255, 255, 255, 0.04)',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }}>
                                    <span style={{
                                        width: '7px',
                                        height: '7px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                        boxShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
                                        flexShrink: 0
                                    }}></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
