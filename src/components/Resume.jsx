import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="section-header">
                <span className="section-eyebrow">04 // Experience</span>
                <h2 className="section-title">Resume / <span className="text-gradient">CV</span></h2>
            </div>

            <div className="glass-card" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px'
                }}>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.05rem' }}>
                        View my professional experience and academic background.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                        >
                            Open in New Tab
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Matheus_Lobo_Resume.pdf"
                            className="btn-primary"
                            style={{ padding: '10px 20px', fontSize: '0.88rem', textDecoration: 'none' }}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download PDF Resume
                        </a>
                    </div>
                </div>

                {/* PDF Embed */}
                <div style={{
                    width: '100%',
                    height: '800px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--glass-border)'
                }}>
                    <iframe
                        src="/resume.pdf"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title="Resume PDF"
                    >
                        <div style={{ padding: '20px', color: 'var(--text-secondary)' }}>
                            <p>Your browser doesn't support PDF embedding.</p>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gradient" style={{ fontWeight: 600 }}>Click here to view the PDF.</a>
                        </div>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Resume;
