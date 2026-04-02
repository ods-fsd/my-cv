export default function Resume() {
  return (
      <div className="resume-wrapper">
          
      {/* Сайдбар */}
      <aside className="sidebar">
        <h1 className="resume-name">Denys Orlyk</h1>
        <h2 className="resume-title">Junior Fullstack Developer</h2>

        <h3 className="section-heading-sidebar">Контакти</h3>
        <ul className="contact-list">
          <li><i className="fa-solid fa-envelope"></i> <a href="mailto:denys.orlyk@outlook.com">denys.orlyk@outlook.com</a></li>
          <li><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/denys-orlyk/" target="_blank" rel="noopener noreferrer">linkedin.com/in/denys-orlyk</a></li>
          <li><i className="fa-brands fa-github"></i> <a href="https://github.com/ods-fsd" target="_blank" rel="noopener noreferrer">github.com/ods-fsd</a></li>
          <li><i className="fa-brands fa-telegram"></i> <a href="https://t.me/ods_tg" target="_blank" rel="noopener noreferrer">@ods_tg</a></li>
          <li style={{ fontSize: '0.65rem' }}><i className="fa-solid fa-location-dot"></i> Bielsko-Biała, Poland</li>
        </ul>

        <h3 className="section-heading-sidebar">Hard Skills</h3>
        <div className="skill-group">
          <div className="skill-group-title">Frontend</div>
          <div className="badges-container">
            <span className="badge">React</span> <span className="badge">Next.js</span> <span className="badge">TypeScript</span> <span className="badge">Zustand</span> <span className="badge">CSS Modules</span>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-group-title">Backend</div>
          <div className="badges-container">
            <span className="badge">Node.js</span> <span className="badge">Express</span> <span className="badge">MongoDB</span> <span className="badge">REST API</span>
          </div>
        </div>

        <h3 className="section-heading-sidebar">Soft Skills</h3>
        <div className="badges-container">
          <span className="badge">Leadership (20+ p)</span> <span className="badge">Critical Thinking</span> <span className="badge">Mentoring</span> <span className="badge">Problem Solving</span> <span className="badge">Conflict Resolution</span>
        </div>

        <h3 className="section-heading-sidebar">Education</h3>
        <div>
          <span className="sidebar-list-item-title">Fullstack Developer</span>
          <span className="sidebar-list-item-desc">IT School GOIT | 2025 - 2026</span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="sidebar-list-item-title">Bachelor in Avionics</span>
          <span className="sidebar-list-item-desc">Oles Honchar DNU | 2014 - 2018</span>
        </div>

        <h3 className="section-heading-sidebar">Languages</h3>
        <ul className="sidebar-list">
          <li><span>Ukrainian</span> <span className="lang-level">Native</span></li>
          <li><span>English</span> <span className="lang-level">B1</span></li>
          <li><span>Polish</span> <span className="lang-level">B2</span></li>
        </ul>
      </aside>

      {/* Основний контент резюме */}
      <section className="resume-content">
        <h3 className="section-heading-main">Summary</h3>
        <p className="summary-text">
          Fullstack Developer with a strong foundation in <strong>process leadership</strong> and technical problem-solving. Transitioning from a <strong>Shift Leader</strong> role (managing teams of 20+) to software development, bringing unique management insights and high accountability. Expert in the <strong>MERN</strong> stack and <strong>Next.js</strong>, focusing on scalable architecture and type safety.
        </p>

        <h3 className="section-heading-main" id="projects">Technical Projects</h3>
        <div className="experience-item">
          <div className="experience-header"><h4 className="experience-title">Podorozhnyky</h4><span className="experience-role">Fullstack</span></div>
          <div className="project-links">
            <a href="https://github.com/ods-fsd/podorozhnyky-client" target="_blank" rel="noopener noreferrer" className="repo-link"><i className="fa-brands fa-github"></i> Client</a>
            <a href="https://github.com/ods-fsd/podorozhnyky-server" target="_blank" rel="noopener noreferrer" className="repo-link"><i className="fa-brands fa-github"></i> Server</a>
          </div>
          <p className="experience-tech">Next.js, TypeScript, Node.js, MongoDB, JWT/OAuth</p>
          <ul className="experience-list">
            <li>Built a fullstack social platform with secure <strong>Google OAuth</strong> and JWT flows.</li>
            <li>Integrated <strong>Cloudinary API</strong> for cloud storage and documented APIs with <strong>Swagger</strong>.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header"><h4 className="experience-title">RentalCar</h4><span className="experience-role">Frontend</span></div>
          <div className="project-links"><a href="https://github.com/ods-fsd/rentalcar" target="_blank" rel="noopener noreferrer" className="repo-link"><i className="fa-brands fa-github"></i> Repo</a></div>
          <p className="experience-tech">Next.js, TypeScript, Zustand, CSS Modules</p>
          <ul className="experience-list">
            <li>Developed car rental catalog with complex <strong>multi-criteria filtering</strong> and SSR logic.</li>
            <li>Optimized performance and state sync using <strong>Zustand</strong> and dynamic routing.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header"><h4 className="experience-title">Booksy & Ecotote</h4><span className="experience-role lead">Team Lead</span></div>
          <p className="experience-tech">React, REST API, SCSS, BEM, Agile/Scrum</p>
          <ul className="experience-list">
            <li>Led dev teams in <strong>Agile/Scrum</strong>, managing Git flows and task decomposition.</li>
            <li>Successfully delivered a book search React app and a pixel-perfect landing page.</li>
          </ul>
        </div>

        <h3 className="section-heading-main">Professional Experience</h3>
        <div className="experience-item">
          <div className="experience-header">
            <h4 className="experience-title">Shift Leader of Production</h4>
            <span className="experience-role">Belos-PLP SA</span>
          </div>
          <div className="experience-meta"><span>Bielsko-Biała, Poland</span><span>June 2023 – Present</span></div>
          <ul className="experience-list">
            <li><strong>Team Mgmt:</strong> Leading a shift of <strong>20 employees</strong>, ensuring 100% target execution.</li>
            <li><strong>Operations:</strong> Managing production workflow, conflict resolution, and technical compliance.</li>
            <li><strong>Optimization:</strong> Reducing downtime through proactive resource planning and staff mentoring.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};