"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import EmailModal from '../EmailModal/EmailModal';
import css from './Header.module.css';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={css.siteHeader}>
      <div className={css.headerContent}>
        <div className={css.logo}>
          <Link href="/"><Image src="/logo.png" alt="Logo" width={50} height={50} priority /></Link>
        </div>

        <div className={css.headerRight}>
          <nav className={css.mainNav}>
            <a href="#projects">Projects</a>
            <a href="https://github.com/ods-fsd" target="_blank" rel="noopener noreferrer" className={css.navGithub}>
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </nav>
          
          <div className={css.headerActions}>
            <a href="/Denys_Orlyk_Resume.pdf" download="Denys_Orlyk_Resume.pdf" className={css.btnPrint}>
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
            <button onClick={() => setIsModalOpen(true)} className={css.btnEmail}>
              <i className="fa-solid fa-paper-plane"></i> Send Resume via Email
            </button>
          </div>
        </div>
      </div>
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};