"use client";

import React, { useState } from 'react';

export default function EmailModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/send-resume`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setTimeout(() => {
          onClose();
          setStatus({ type: '', message: '' });
          setEmail('');
        }, 3000);
      } else {
        setStatus({ type: 'error', message: data.error || 'Помилка відправки' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Помилка мережі. Перевірте зʼєднання з сервером.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="modal-title">Отримати резюме на Email</h3>
        <p className="modal-desc">Введіть email, на який потрібно відправити посилання на це портфоліо.</p>
        
        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="hrEmail">Email адреса HR / Компанії</label>
            <input 
              type="email" 
              id="hrEmail" 
              className="form-input" 
              placeholder="hr@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? <><i className="fa-solid fa-spinner fa-spin"></i> Відправка...</> : 'Відправити резюме'}
          </button>
          
          {status.message && (
            <div className={`status-msg ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};