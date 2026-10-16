import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        setIsSubmitting(false);
        if (data.success) {
            setResult("Success! Your message has been sent.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" style={{ marginBottom: '60px' }}>
            <div className="section-header" style={{ textAlign: 'center' }}>
                <span className="section-eyebrow" style={{ justifyContent: 'center' }}>05 // Connect</span>
                <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '32px'
            }}>
                <div className="glass-card" style={{ padding: 'clamp(28px, 4vw, 40px)', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '14px', fontWeight: 700 }}>Contact Information</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: 1.65 }}>
                        I'm open to new opportunities and collaborations. Feel free to reach out!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <a href="mailto:matheus.f.lobo@gmail.com" className="contact-link-card">
                            <div className="contact-icon-box">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Email</div>
                                <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>matheus.f.lobo@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/mflobo/" target="_blank" rel="noopener noreferrer" className="contact-link-card" title="LinkedIn">
                            <div className="contact-icon-box">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Network</div>
                                <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>LinkedIn</div>
                            </div>
                        </a>

                        <a href="https://mflobo.itch.io/" target="_blank" rel="noopener noreferrer" className="contact-link-card" title="itch.io">
                            <div className="contact-icon-box">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                                    <path d="M6 12h4m-2-2v4"></path>
                                    <line x1="15" y1="11" x2="15.01" y2="11"></line>
                                    <line x1="18" y1="13" x2="18.01" y2="13"></line>
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Games</div>
                                <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>itch.io</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: 'clamp(28px, 4vw, 40px)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} onSubmit={onSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Name"
                                className="form-input"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="form-input"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                required
                                placeholder="Message"
                                rows="5"
                                className="form-input"
                                style={{ resize: 'vertical', minHeight: '130px' }}
                            ></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn-primary" style={{
                            width: '100%',
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            marginTop: '4px'
                        }}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        {result && (
                            <div style={{
                                marginTop: '8px',
                                padding: '10px 14px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                background: result.includes("Success") ? 'rgba(0, 212, 255, 0.1)' : 'rgba(255, 77, 77, 0.1)',
                                border: `1px solid ${result.includes("Success") ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255, 77, 77, 0.3)'}`,
                                color: result.includes("Success") ? 'var(--accent-primary)' : '#ff4d4d',
                                fontSize: '0.9rem',
                                fontWeight: 500
                            }}>
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
