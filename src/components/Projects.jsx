import React from 'react';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Paw n' Shop",
            description: "A cozy management game where you help furry adventurers gear up for their quests. Developed for a game jam with a wonderful team.",
            tags: ["Godot", "gdscript", "Programming"],
            embedCode: '<iframe src="https://itch.io/embed/3547754" height="167" frameborder="0" width="552" style="border-radius: 8px; max-width: 100%;"><a href="https://tobiassnordin.itch.io/paw-n-shop">Paw n\' Shop by Tobias.S.Nordin, birdfriends, Matheus Lobo, fightercover, Grimmintime</a></iframe>'
        },
        {
            id: 2,
            title: "Trash Bashers",
            description: "An arcade-style action game developed during my studies at Future Games. Bash through waves of enemies and clean up the streets.",
            tags: ["Unity", "C#", "Systems Design"],
            embedCode: '<iframe height="167" frameborder="0" src="https://itch.io/embed/4047135" width="552" style="border-radius: 8px; max-width: 100%;"><a href="https://futuregames.itch.io/trash-bashers">Trash Bashers by Futuregames</a></iframe>'
        },
        {
            id: 3,
            title: "Evillution",
            description: "Craft potions, feed them to your monster thrall, observe their effects develop unpredictably in battle. Also developed during my studies at Future Games.",
            tags: ["Unity", "C#", "Systems Design"],
            hasImages: true,
            imageSrc: "/evillution.png"
        }
        // {
        //     id: 4,
        //     title: "Systems Framework",
        //     description: "A modular inventory and crafting system for RPGs.",
        //     tags: ["C++", "Architecture"],
        //     hasPDF: true,
        // }
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
                            color: 'var(--text-secondary)',
                            overflow: 'hidden'
                        }}>
                            {project.embedCode ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: project.embedCode }}
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                />
                            ) : project.imageSrc ? (
                                <img
                                    src={project.imageSrc}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                project.hasVideo ? "[ Video Preview ]" : "[ Project Thumbnail ]"
                            )}
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
