import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const ContactModal = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus('idle');
      setName('');
      setEmail('');
      setMessage('');
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ACCESS_KEY) return;

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email,
          message,
          subject: 'Portfolio contact',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-ink/20 backdrop-blur-[2px]"
        aria-label="Close contact form"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative w-full max-w-md bg-paper border border-line rounded-lg shadow-lg p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 id="contact-title" className="font-serif text-2xl text-ink tracking-[-0.02em]">
              Contact me
            </h2>
            <p className="mt-1 text-stone text-sm">Send a message — I&apos;ll get back to you by email.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-fog hover:text-ink p-1 -mr-1 transition-colors"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.75} />
          </button>
        </div>

        {!ACCESS_KEY ? (
          <p className="text-stone text-sm leading-relaxed">
            Form not configured yet. Add your Web3Forms access key to{' '}
            <code className="text-ink text-xs bg-wash px-1 py-0.5 rounded">.env.local</code> as{' '}
            <code className="text-ink text-xs bg-wash px-1 py-0.5 rounded">
              REACT_APP_WEB3FORMS_ACCESS_KEY
            </code>
            .
          </p>
        ) : status === 'sent' ? (
          <p className="text-ink text-[0.9375rem] leading-relaxed">
            Message sent. Thanks — I&apos;ll reply soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm text-stone mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-[0.9375rem] bg-paper border border-line rounded-md text-ink placeholder:text-fog focus:outline-none focus:border-stone"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm text-stone mb-1.5">
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-[0.9375rem] bg-paper border border-line rounded-md text-ink placeholder:text-fog focus:outline-none focus:border-stone"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm text-stone mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-[0.9375rem] bg-paper border border-line rounded-md text-ink placeholder:text-fog focus:outline-none focus:border-stone resize-y min-h-[6rem]"
                placeholder="What would you like to talk about?"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-stone">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-2.5 text-[0.9375rem] font-medium bg-ink text-paper rounded-md hover:bg-stone transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
