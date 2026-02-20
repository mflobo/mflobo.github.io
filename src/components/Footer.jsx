import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 20px',
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ marginBottom: '10px' }}>&copy; {new Date().getFullYear()} Matheus Lobo. All Rights Reserved.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a href="https://www.linkedin.com/in/matheus-lobo-a59840173/" onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>LinkedIn</a>
                    <a href="https://mflobo.itch.io/" onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>itch.io</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
