import Link from 'next/link';
import Image from 'next/image';

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <header className="site-header no-print">
      <div className="header-content">
        <div className="logo">
          <Link href="/"><Image src="/logo.jpg" alt="Logo" width={50} height={50}/></Link>
        </div>
        
        <div className="header-right">
          <nav className="main-nav">
            <a href="#projects">Projects</a>
            <a href="https://github.com/ods-fsd" target="_blank" rel="noopener noreferrer" className="nav-github">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </nav>
          
          <div className="header-actions">
            <a href="/Denys_Orlyk_Resume.pdf" download="Denys_Orlyk_Resume.pdf" className="btn-print">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
            <button onClick={onOpenModal} className="btn-email">
              <i className="fa-solid fa-paper-plane"></i> Send Resume via Email
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};