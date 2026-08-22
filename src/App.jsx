import { useState, useEffect } from 'react'
import logoImg from './assets/circle.png'
import helloImg from './assets/hello.png'
import profileImg from './assets/me.png'
import downloadIcon from './assets/download.png'
import smksLogo from './assets/smks.png'
import ubLogo from './assets/ub.png'
import bemLogo from './assets/LOGO BEM LINGKARAN PUTIH 8 (1).png'
import hmpstiLogo from './assets/hmpsti.png'
import parlemenLogo from './assets/image 18.png'
import exp1 from './assets/IMG-20241015-WA0076 2.png'
import exp2 from './assets/IMG_6676 2.png'
import exp3 from './assets/IMG_6677 2.png'
import exp4 from './assets/IMG_3373 2.png'
import exp5 from './assets/IMG_3210 2.png'
import exp6 from './assets/IMG-20250608-WA0003(1) 2.png'
import exp7 from './assets/9d3c0082-a2c2-4f1c-8f20-2f69f7ebddf6 2.png'
import exp8 from './assets/IMG_0427 2.png'
import './App.css'

function App() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        } else {
          entry.target.classList.remove('reveal-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elementsToObserve = document.querySelectorAll('.scroll-reveal');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Background Grid */}
      <div className="background-grid"></div>

      {/* Sun Glow Decoration */}
      <div className="sun-glow"></div>

      {/* Navigation Bar */}
      <header className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="Dori Logo" className="nav-logo" />
            <span className="nav-name">DORI</span>
          </div>

          <button className="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
            {menuActive ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
            <li><a href="#education" className="nav-link" onClick={() => setMenuActive(false)}>Education</a></li>
            <li><a href="#experience" className="nav-link" onClick={() => setMenuActive(false)}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setMenuActive(false)}>Projects</a></li>
            <li><a href="#tools" className="nav-link" onClick={() => setMenuActive(false)}>Tools</a></li>
            <li><a href="#certification" className="nav-link" onClick={() => setMenuActive(false)}>Certification</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuActive(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="app-container">
        {/* Hero Section */}
        <main className="hero-section scroll-reveal">
          <div className="hero-left">
            <div className="hero-greet">
              Helo <img src={helloImg} className="wave-icon" alt="waving hand" /> I'm
            </div>
            <h1 className="hero-name">DERAJAT</h1>
            <p className="hero-desc">
              An <strong>Information Technology</strong> student at <strong>Brawijaya University</strong> with expertise in Front-End Development and experience in developing website from the UI/UX design stage to implementation, creating responsive, functional, and user-centered web applications. Skilled in <strong>AI Prompting</strong>.
            </p>
            <p className="hero-desc">
              Has a strong interest in <strong>AI Engineering</strong>, particularly Machine Learning and Deep Learning, and continuously develops skills to build AI-powered solutions.
            </p>
            <a href="/cv.pdf" download className="download-btn">
              Download CV <img src={downloadIcon} className="download-icon" alt="download icon" />
            </a>
          </div>

          <div className="hero-right">
            <div className="profile-image-container">
              <img src={profileImg} alt="Derajat Portrait" className="hero-profile-img" />
            </div>
          </div>
        </main>

        {/* Education Section */}
        <section id="education" className="education-section">
          <h2 className="section-title">EDUCATION</h2>

          <div className="education-list">
            <div className="education-item scroll-reveal">
              <div className="education-logo-wrapper">
                <img src={smksLogo} alt="SMKS 11 Maret Logo" className="education-logo" />
              </div>
              <h3 className="education-title">SMKS 11 Maret - Computer Network Engineering</h3>
              <p className="education-desc">
                Completed vocational high school education in Computer and Network Engineering (TKJ), studying computer networking fundamentals, including the OSI model, network topologies, and LAN, MAN, and WAN concepts. Gained hands-on experience with LAN cabling, fiber optic networking, and Ubuntu Linux through practical laboratory activities.
              </p>
            </div>

            <div className="education-item scroll-reveal">
              <div className="education-logo-wrapper">
                <img src={ubLogo} alt="Brawijaya University Logo" className="education-logo" />
              </div>
              <h3 className="education-title">Brawijaya University - Information Technology</h3>
              <p className="education-desc">
                Currently pursuing a Diploma (D3) in Information Technology at Universitas Brawijaya, studying web application development and UI/UX through courses such as User Interface and User Experience, Data Structures, Web Framework, Databases, Object-Oriented Programming, Software Engineering, Artificial Intelligence, and Internet of Things (IoT) development.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-inner">
          <h2 className="experience-title">EXPERIENCE</h2>
          <div className="experience-divider"></div>

          <h3 className="org-subtitle">ORGANIZATION</h3>

          <div className="experience-timeline-container">
            <div className="timeline-left-accent"></div>

            <div className="timeline-content">
              <div className="timeline-item scroll-reveal">
                <div className="timeline-bullet"></div>
                <div className="timeline-item-body">
                  <div className="timeline-item-header">
                    <div className="timeline-text-block">
                      <div className="timeline-year">2024</div>
                      <h4 className="timeline-role">Information Technology - Student Association</h4>
                      <p className="timeline-desc">
                        Collected and represented students' academic and non-academic aspirations, participated in Student Association programs, supported advocacy initiatives through the Student Advocacy and Welfare Department, and developed strong communication, leadership, problem-solving, and teamwork skills.
                      </p>
                    </div>

                    <div className="timeline-logo-block">
                      <img src={hmpstiLogo} alt="HMPS TI Logo" className="timeline-logo" />
                    </div>
                  </div>

                  <div className="experience-photos-grid">
                    <img src={exp1} alt="Student Association Activity 1" className="experience-photo" />
                    <img src={exp2} alt="Student Association Activity 2" className="experience-photo" />
                    <img src={exp3} alt="Student Association Activity 3" className="experience-photo" />
                  </div>
                </div>
              </div>

              <div className="timeline-item scroll-reveal">
                <div className="timeline-bullet"></div>
                <div className="timeline-item-body">
                  <div className="timeline-item-header">
                    <div className="timeline-text-block">
                      <div className="timeline-year">2024</div>
                      <h4 className="timeline-role">Faculty of vocational studies – Student Representative Council</h4>
                      <p className="timeline-desc">
                        Coordinated the collection of student aspirations from various student associations, participated in the implementation of Student Representative Council programs, and developed communication, problem-solving, leadership, and teamwork skills.
                      </p>
                    </div>
                    
                    <div className="timeline-logo-block">
                      <img src={parlemenLogo} alt="Student Representative Council Logo" className="timeline-logo" />
                    </div>
                  </div>
                  
                  <div className="experience-photos-grid double-photos">
                    <img src={exp4} alt="Student Representative Council Activity 1" className="experience-photo" />
                    <img src={exp5} alt="Student Representative Council Activity 2" className="experience-photo" />
                  </div>
                </div>
              </div>

              <div className="timeline-item scroll-reveal">
                <div className="timeline-bullet"></div>
                <div className="timeline-item-body">
                  <div className="timeline-item-header">
                    <div className="timeline-text-block">
                      <div className="timeline-year">2025</div>
                      <h4 className="timeline-role">Faculty of vocational studies – Student Executive Board</h4>
                      <p className="timeline-desc">
                        Served as a Steering Committee member for various Student Executive Board (BEM) programs, coordinated the submission of aspirations from student organizations (Student Activity Units, Student Activity Associations, and Student Associations) at the faculty level, participated in university-level student aspiration forums, and developed strong communication, leadership, problem-solving, and teamwork skills through organizational activities.
                      </p>
                    </div>
                    
                    <div className="timeline-logo-block">
                      <img src={bemLogo} alt="Student Executive Board Logo" className="timeline-logo" />
                    </div>
                  </div>
                  
                  <div className="experience-photos-grid">
                    <img src={exp6} alt="Student Executive Board Activity 1" className="experience-photo" />
                    <img src={exp7} alt="Student Executive Board Activity 2" className="experience-photo" />
                    <img src={exp8} alt="Student Executive Board Activity 3" className="experience-photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
