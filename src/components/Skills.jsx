import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Engines & Tools",
            skills: ["Unity", "Unreal Engine 5", "Godot", "FMOD"]
        },
        {
            title: "Design",
            skills: ["Systems Design", "Level Design", "Narrative Design", "Prototyping"]
        },
        {
            title: "Technical",
            skills: ["C#", "C++", "Blueprints", "Python", "Git / Source Control"]
        }
    ];

    return (
        <section id="skills">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>My <span className="text-gradient">Skills</span></h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px'
            }}>
                {skillCategories.map((category) => (
                    <div key={category.title} className="glass-card" style={{ padding: '30px' }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            marginBottom: '20px',
                            color: 'var(--accent-primary)',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {category.title}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {category.skills.map(skill => (
                                <li key={skill} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: 'var(--accent-secondary)'
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
