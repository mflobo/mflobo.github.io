import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "bbcde9b6-a2e7-4857-a046-74a576190a66");

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
        <section id="contact" style={{ marginBottom: '100px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Get In <span className="text-gradient">Touch</span></h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                <div className="glass-card" style={{ padding: '40px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Contact Information</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                        I'm open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <a href="mailto:matheus.f.lobo@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>📧</span> matheus.f.lobo@gmail.com
                        </a>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                            <a href="https://www.linkedin.com/in/matheus-lobo-a59840173/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }} title="LinkedIn">
                                🔗 <span style={{ fontSize: '0.9rem' }}>LinkedIn</span>
                            </a>
                            <a href="https://mflobo.itch.io/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }} title="itch.io">
                                🎮 <span style={{ fontSize: '0.9rem' }}>itch.io</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '40px' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={onSubmit}>
                        <input type="text" name="name" required placeholder="Name" style={{
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--glass-border)',
                            padding: '12px 15px',
                            borderRadius: '8px',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit'
                        }} />
                        <input type="email" name="email" required placeholder="Email" style={{
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--glass-border)',
                            padding: '12px 15px',
                            borderRadius: '8px',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit'
                        }} />
                        <textarea name="message" required placeholder="Message" rows="5" style={{
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--glass-border)',
                            padding: '12px 15px',
                            borderRadius: '8px',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit',
                            resize: 'none'
                        }}></textarea>
                        <button type="submit" disabled={isSubmitting} className="btn-primary" style={{
                            width: '100%',
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        {result && (
                            <div style={{
                                marginTop: '15px',
                                textAlign: 'center',
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
