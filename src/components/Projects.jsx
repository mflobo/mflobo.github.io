import React from 'react';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Project Alpha",
            description: "A high-octane action game focused on movement mechanics.",
            tags: ["Unity", "C#", "Level Design"],
            hasVideo: true,
            hasPDF: true,
        },
        {
            id: 2,
            title: "Project Beta",
            description: "Atmospheric puzzle-platformer exploring environmental storytelling.",
            tags: ["Unreal Engine", "Blueprints", "Sound Design"],
            hasImages: true,
        },
        {
            id: 3,
            title: "Systems Framework",
            description: "A modular inventory and crafting system for RPGs.",
            tags: ["C++", "Architecture"],
            hasPDF: true,
        }
    ];

    return (
        <section id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Selected <span className="text-gradient">Projects</span></h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
            }}>
                {projectList.map((project) => (
                    <div key={project.id} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{
                            height: '220px',
                            background: 'var(--bg-tertiary)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'var(--text-secondary)'
                        }}>
                            {/* This is where video/image will go later */}
                            {project.hasVideo ? "[ Video Preview ]" : "[ Project Thumbnail ]"}
                        </div>
                        <div style={{ padding: '30px' }}>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        background: 'rgba(0, 212, 255, 0.1)',
                                        color: 'var(--accent-primary)',
                                        border: '1px solid rgba(0, 212, 255, 0.2)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button className="btn-primary" style={{ fontSize: '0.85rem', padding: '8px 20px' }}>View Details</button>
                                {project.hasPDF && (
                                    <button style={{
                                        fontSize: '0.85rem',
                                        padding: '8px 20px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'transparent',
                                        color: 'var(--text-primary)'
                                    }}>
                                        Docs (PDF)
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
