import React from 'react';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Terminal_ Blonde",
            description: "A Y2K-inspired pseudo-hacking simulation game where oversharing is profitable and privacy is optional. Connect the dots, crack security questions, and scam your way to success.",
            tags: ["Unreal Engine 5", "Technical Design", "Blueprints"],
            imageSrc: "/terminalblonde.jpg",
            imageFit: "cover",
            itchUrl: "https://futuregames.itch.io/terminalblonde"
        },
        {
            id: 2,
            title: "Trash Bashers",
            description: "An arcade-style action game developed during my studies at Future Games. Bash through waves of enemies and clean up the streets.",
            tags: ["Unity", "C#", "Systems Design"],
            imageSrc: "/trashbashers.png",
            imageFit: "contain-backdrop",
            itchUrl: "https://futuregames.itch.io/trash-bashers"
        },
        {
            id: 3,
            title: "Evillution",
            description: "Craft potions, feed them to your monster thrall, observe their effects develop unpredictably in battle. Also developed during my studies at Future Games.",
            tags: ["Unity", "C#", "Mobile"],
            hasImages: true,
            imageSrc: "/evillution.png",
            imageFit: "contain",
            itchUrl: "https://futuregames.itch.io/evillution"
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
            <div className="section-header">
                <span className="section-eyebrow">02 // Portfolio</span>
                <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                gap: '30px',
                alignItems: 'stretch'
            }}>
                {projectList.map((project) => (
                    <div key={project.id} className="glass-card project-card">
                        <a
                            href={project.itchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-thumb-wrapper"
                            aria-label={`Open ${project.title} on itch.io`}
                        >
                            {project.embedCode ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: project.embedCode }}
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                />
                            ) : project.imageSrc ? (
                                <>
                                    {project.imageFit === 'contain-backdrop' && (
                                        <img
                                            src={project.imageSrc}
                                            alt=""
                                            aria-hidden="true"
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                filter: 'blur(18px) brightness(0.4)',
                                                transform: 'scale(1.15)'
                                            }}
                                        />
                                    )}
                                    <img
                                        src={project.imageSrc}
                                        alt={project.title}
                                        style={{
                                            position: 'relative',
                                            zIndex: 1,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: project.imageFit === 'cover' ? 'cover' : 'contain',
                                            padding: project.imageFit === 'contain' ? '12px' : '0'
                                        }}
                                    />
                                </>
                            ) : (
                                project.hasVideo ? "[ Video Preview ]" : "[ Project Thumbnail ]"
                            )}
                        </a>

                        <div style={{
                            padding: '28px',
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1
                        }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} className="tech-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontWeight: 700 }}>
                                {project.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-secondary)',
                                marginBottom: '24px',
                                fontSize: '0.95rem',
                                lineHeight: 1.65,
                                flexGrow: 1
                            }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                                <a
                                    href={project.itchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ fontSize: '0.85rem', padding: '10px 20px', textDecoration: 'none' }}
                                >
                                    View Details
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                                {project.hasPDF && (
                                    <button style={{
                                        fontSize: '0.85rem',
                                        padding: '10px 20px',
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
