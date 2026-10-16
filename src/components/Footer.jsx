import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '36px 24px',
            borderTop: '1px solid var(--glass-border)',
            background: 'rgba(7, 7, 9, 0.8)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px'
            }}>
                <p style={{ margin: 0 }}>
                    &copy; {new Date().getFullYear()} Matheus Lobo. All Rights Reserved.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <a
                        href="https://www.linkedin.com/in/mflobo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://mflobo.itch.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        itch.io
                    </a>
                    <a
                        href="#hero"
                        style={{
                            color: 'var(--accent-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        Top &uarr;
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
