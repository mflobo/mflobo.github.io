import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Resume / <span className="text-gradient">CV</span></h2>
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                    View my professional experience and academic background.
                </p>

                {/* PDF Embed */}
                <div style={{
                    width: '100%',
                    height: '800px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    marginBottom: '30px',
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
                            <a href="/resume.pdf" target="_blank" className="text-gradient" style={{ fontWeight: 600 }}>Click here to view the PDF.</a>
                        </div>
                    </iframe>
                </div>

                <a
                    href="/resume.pdf"
                    download="Matheus_Lobo_Resume.pdf"
                    className="btn-primary"
                    style={{ textDecoration: 'none' }}
                >
                    Download PDF Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;
