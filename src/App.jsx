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
import projectHealtyLife from './assets/Body (2).png'
import xamppLogo from './assets/xampp.png'
import phpLogo from './assets/php.png'
import htmlLogo from './assets/html.png'
import cssLogo from './assets/css.png'
import figmaLogo from './assets/figma.png'
import iphoneLogo from './assets/iphone.png'
import iphone1Logo from './assets/iphone 1.png'
import splashLogo from './assets/splash.png'
import projectSanding from './assets/sanding.png'
import projectPasarNgalam from './assets/Ngalam.png'
import mysqlLogo from './assets/Mysql.png'
import javascriptLogo from './assets/Javascript.png'
import laravelLogo from './assets/laravel.png'
import projectUmkm from './assets/umkm.png'
import projectIot from './assets/IOT.png'
import tailwindLogo from './assets/Tailwind CSS.png'
import reactLogo from './assets/react.svg'
import vscIcon from './assets/vsc ub.png'
import wordIcon from './assets/word ub.png'
import figmaUbIcon from './assets/figma ub.png'
import claudeIcon from './assets/claude ub.png'
import githubUbIcon from './assets/github ub.png'
import cssUbIcon from './assets/css ub.png'
import htmlUbIcon from './assets/html ub.png'
import reactUbIcon from './assets/react ub.png'
import javaIcon from './assets/java ub.png'
import jsUbIcon from './assets/js ub.png'
import cuIcon from './assets/cu ub.png'
import vbIcon from './assets/vb ub.png'
import behanceIcon from './assets/behance ub.png'
import geminiIcon from './assets/gemini ub.png'
import laragonIcon from './assets/laragon ub.png'
import dogImg from './assets/anjing.jpeg'
import certUji from './assets/uji.png'
import certMicrosoft from './assets/microsoft.png'
import certHackathon from './assets/hackthon.png'
import certUiux from './assets/uiux.png'
import certIntern from './assets/intern.png'
import certBem from './assets/bem.png'
import certHmpsti from './assets/hmpsti ub.png'
import certJava from './assets/java.png'
import certApply from './assets/apply.png'
import certUi from './assets/ui.png'
import githubFooterIcon from './assets/GitHub (1).png'
import gmailFooterIcon from './assets/Gmail Logo (1).png'
import linkedinFooterIcon from './assets/LinkedIn (1).png'
import instagramFooterIcon from './assets/Instagram (2).png'
import { translations } from './translations'
import './App.css'

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portofolio_lang') || 'en';
  });
  const [menuActive, setMenuActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const t = translations[lang] || translations.en;

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('portofolio_lang', newLang);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuActive(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  useEffect(() => {
    if (loading || selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading, selectedCert]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setLoading(false);
            }, 600); // Wait for transition fadeout (600ms)
          }, 400); // Hold at 100%
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

  const certImages = [
    certUiux,
    certUji,
    certMicrosoft,
    certHackathon,
    certIntern,
    certBem,
    certHmpsti,
    certJava,
    certApply,
    certUi
  ];

  const certificates = t.certifications.items.map((cert, index) => ({
    ...cert,
    image: certImages[index] || certUiux
  }));

  return (
    <>
      {loading && (
        <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
          <div className="loader-content">
            <h1 className="loader-title">
              {t.loader.split("").map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <div className="loader-bar-container">
              <div className="loader-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="loader-progress-text">{progress}%</div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <header className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <img src={logoImg} alt="Dori Logo" className="nav-logo" />
            <span className="nav-name">DORI</span>
          </div>

          <div className="nav-right-container">
            <button className="menu-toggle" onClick={() => setMenuActive(!menuActive)} aria-label="Toggle navigation menu">
              {menuActive ? '✕' : '☰'}
            </button>

            <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
              <li><a href="#education" className="nav-link" onClick={(e) => handleNavClick(e, 'education')}>{t.nav.education}</a></li>
              <li><a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>{t.nav.experience}</a></li>
              <li><a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>{t.nav.projects}</a></li>
              <li><a href="#tools" className="nav-link" onClick={(e) => handleNavClick(e, 'tools')}>{t.nav.tools}</a></li>
              <li><a href="#certification" className="nav-link" onClick={(e) => handleNavClick(e, 'certification')}>{t.nav.certification}</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>{t.nav.contact}</a></li>
              <li className="lang-switcher-item">
                <div className="lang-toggle-wrapper">
                  <button
                    type="button"
                    className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('id')}
                    title="Bahasa Indonesia"
                  >
                    ID
                  </button>
                  <span className="lang-divider">|</span>
                  <button
                    type="button"
                    className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                    title="English"
                  >
                    EN
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section Wrapper with Background Grid & Sun Glow */}
      <div className="hero-wrapper">
        {/* Background Grid */}
        <div className="background-grid"></div>

        {/* Sun Glow Decoration */}
        <div className="sun-glow"></div>

        <div className="app-container">
          {/* Hero Section */}
          <main className="hero-section scroll-reveal">
            <div className="hero-left">
              <div className="hero-greet">
                {t.hero.greetBefore} <img src={helloImg} className="wave-icon" alt="waving hand" /> {t.hero.greetAfter}
              </div>
              <h1 className="hero-name">{t.hero.name}</h1>
              <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t.hero.desc1 }} />
              <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t.hero.desc2 }} />
              <a href="/CV%20Derajat.pdf" download="CV Derajat.pdf" className="download-btn">
                {t.hero.downloadCv} <img src={downloadIcon} className="download-icon" alt="download icon" />
              </a>
            </div>

            <div className="hero-right">
              <div className="profile-image-container">
                <img src={profileImg} alt="Derajat Portrait" className="hero-profile-img" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="education-inner">
          <h2 className="section-title">{t.education.title}</h2>

          <div className="education-list">
            <div className="education-item scroll-reveal">
              <div className="education-logo-wrapper">
                <img src={smksLogo} alt="SMKS 11 Maret Logo" className="education-logo" />
              </div>
              <h3 className="education-title">{t.education.items[0].title}</h3>
              <p className="education-desc">
                {t.education.items[0].desc}
              </p>
            </div>

            <div className="education-item scroll-reveal">
              <div className="education-logo-wrapper">
                <img src={ubLogo} alt="Brawijaya University Logo" className="education-logo" />
              </div>
              <h3 className="education-title">{t.education.items[1].title}</h3>
              <p className="education-desc">
                {t.education.items[1].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-inner">
          <h2 className="experience-title">{t.experience.title}</h2>
          <div className="experience-divider"></div>

          <h3 className="org-subtitle">{t.experience.subtitle}</h3>

          <div className="experience-timeline-container">
            <div className="timeline-left-accent"></div>

            <div className="timeline-content">
              <div className="timeline-item scroll-reveal">
                <div className="timeline-bullet"></div>
                <div className="timeline-item-body">
                  <div className="timeline-item-header">
                    <div className="timeline-text-block">
                      <div className="timeline-year">{t.experience.items[0].year}</div>
                      <h4 className="timeline-role">{t.experience.items[0].role}</h4>
                      <p className="timeline-desc">
                        {t.experience.items[0].desc}
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
                      <div className="timeline-year">{t.experience.items[1].year}</div>
                      <h4 className="timeline-role">{t.experience.items[1].role}</h4>
                      <p className="timeline-desc">
                        {t.experience.items[1].desc}
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
                      <div className="timeline-year">{t.experience.items[2].year}</div>
                      <h4 className="timeline-role">{t.experience.items[2].role}</h4>
                      <p className="timeline-desc">
                        {t.experience.items[2].desc}
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

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-inner">
          <h2 className="projects-title scroll-reveal">{t.projects.title}</h2>
          <div className="projects-divider scroll-reveal"></div>

          <div className="projects-list">
            {/* Project 1: Sentinel IoT */}
            <div className="project-item visual-left scroll-reveal">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={projectIot} alt="Sentinel IoT Preview" className="project-image" />
                </div>
              </div>

              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">{t.projects.items[0].title}</h3>
                  <span className="project-badge project-badge-iot">{t.projects.items[0].badge}</span>
                </div>

                <p className="project-desc">
                  {t.projects.items[0].desc}
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={laravelLogo} alt="Laravel" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={mysqlLogo} alt="MySQL" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={reactLogo} alt="ReactJS" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={tailwindLogo} alt="Tailwind CSS" className="tech-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Healty Life */}
            <div className="project-item scroll-reveal">
              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">{t.projects.items[1].title}</h3>
                  <span className="project-badge">{t.projects.items[1].badge}</span>
                </div>

                <p className="project-desc">
                  {t.projects.items[1].desc}
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={xamppLogo} alt="XAMPP" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={phpLogo} alt="PHP" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={htmlLogo} alt="HTML5" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={cssLogo} alt="CSS3" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    {t.projects.liveDemo} <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-image-wrapper healty-life-wrapper">
                  <img src={projectHealtyLife} alt="Healthy Life Website Preview" className="project-image" />
                </div>
              </div>
            </div>

            {/* Project 3: Lokara */}
            <div className="project-item visual-left scroll-reveal">
              <div className="project-visual">
                <div className="project-image-wrapper lokara-wrapper">
                  <img src={splashLogo} alt="Lokara Splash Background" className="project-image lokara-bg" />
                  <img src={iphone1Logo} alt="Lokara Tilted iPhone" className="lokara-iphone-tilted" />
                  <img src={iphoneLogo} alt="Lokara Straight iPhone" className="lokara-iphone-straight" />
                </div>
              </div>

              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">{t.projects.items[2].title}</h3>
                  <span className="project-badge">{t.projects.items[2].badge}</span>
                </div>

                <p className="project-desc">
                  {t.projects.items[2].desc}
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    {t.projects.liveDemo} <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Sanding Solutions */}
            <div className="project-item scroll-reveal">
              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">{t.projects.items[3].title}</h3>
                  <span className="project-badge">{t.projects.items[3].badge}</span>
                </div>

                <p className="project-desc">
                  {t.projects.items[3].desc}
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    {t.projects.liveDemo} <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={projectSanding} alt="Sanding Solutions Website Preview" className="project-image" />
                </div>
              </div>
            </div>

            {/* Project 5: Pasar Ngalam */}
            <div className="project-item visual-left scroll-reveal">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={projectPasarNgalam} alt="Pasar Ngalam Website Preview" className="project-image" />
                </div>
              </div>

              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">{t.projects.items[4].title}</h3>
                  <span className="project-badge">{t.projects.items[4].badge}</span>
                </div>

                <p className="project-desc">
                  {t.projects.items[4].desc}
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={mysqlLogo} alt="MySQL" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={javascriptLogo} alt="Javascript" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={phpLogo} alt="PHP" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={laravelLogo} alt="Laravel" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    {t.projects.liveDemo} <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6: Waroeng K-conk */}
            <div className="project-item scroll-reveal">
              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">{t.projects.items[5].title}</h3>
                  <span className="project-badge">{t.projects.items[5].badge}</span>
                </div>

                <p className="project-desc">
                  {t.projects.items[5].desc}
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={xamppLogo} alt="XAMPP" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={phpLogo} alt="PHP" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={htmlLogo} alt="HTML5" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper">
                      <img src={cssLogo} alt="CSS3" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    {t.projects.liveDemo} <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={projectUmkm} alt="Waroeng K-Conk Website Preview" className="project-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="projects-divider-bottom scroll-reveal"></div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools-section">
        <div className="tools-inner">
          <div className="tools-card scroll-reveal">
            <div className="tools-content-wrapper">
              <div className="tools-left">
                <h2 className="tools-title-header">{t.tools.title1}<br />{t.tools.title2}</h2>
                <div className="tools-underline"></div>
                <div className="tools-dog-wrapper">
                  <img src={dogImg} alt="Coding Dog" className="tools-dog-img" />
                </div>
              </div>

              <div className="tools-right">
                <div className="tools-grid">
                  {/* Visual Studio Code */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={vscIcon} alt="Visual Studio Code" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">Visual Studio Code</span>
                  </div>

                  {/* Microsoft Word */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={wordIcon} alt="Microsoft Word" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">Microsoft Word</span>
                  </div>

                  {/* Figma */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={figmaUbIcon} alt="Figma" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">FIGMA</span>
                  </div>

                  {/* AI Claude */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={claudeIcon} alt="AI Claude" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">AI Claude</span>
                  </div>

                  {/* GitHub */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={githubUbIcon} alt="GitHub" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">GITHUB</span>
                  </div>

                  {/* CSS */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={cssUbIcon} alt="CSS" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">CSS</span>
                  </div>

                  {/* HTML */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={htmlUbIcon} alt="HTML" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">HTML</span>
                  </div>

                  {/* ReactJS */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={reactUbIcon} alt="ReactJS" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">ReactJS</span>
                  </div>

                  {/* Java */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={javaIcon} alt="Java" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">JAVA</span>
                  </div>

                  {/* JavaScript */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={jsUbIcon} alt="JavaScript" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">Java Script</span>
                  </div>

                  {/* ClickUp */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={cuIcon} alt="ClickUp" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">ClickUp</span>
                  </div>

                  {/* VirtualBox */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={vbIcon} alt="VirtualBox" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">VirtualBox</span>
                  </div>

                  {/* Behance */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={behanceIcon} alt="Behance" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">Behance</span>
                  </div>

                  {/* Gemini */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={geminiIcon} alt="Gemini" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">Gemini AI</span>
                  </div>

                  {/* Laragon */}
                  <div className="tool-card-item">
                    <div className="tool-icon-img-wrapper">
                      <img src={laragonIcon} alt="Laragon" className="tool-icon-img" />
                    </div>
                    <span className="tool-icon-label">Laragon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="certification-section">
        <div className="certification-inner">
          <h2 className="certification-title scroll-reveal">{t.certifications.title}</h2>
          <div className="certification-divider scroll-reveal"></div>

          <div className="certifications-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="cert-card-item scroll-reveal" onClick={() => setSelectedCert(cert)}>
                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-card-img" />
                  <div className="cert-overlay">
                    <span className="cert-zoom-text">{t.certifications.viewCert}</span>
                  </div>
                </div>
                <div className="cert-info">
                  <h3 className="cert-item-title">{cert.title}</h3>
                  <p className="cert-item-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-item-date">{cert.date}</span>
                    {cert.id && <span className="cert-item-id">ID: {cert.id}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="footer-wrapper">
        <footer id="contact" className="site-footer">
          <div className="footer-container">
            <div className="footer-brand">
              <span>{t.footer.brand}</span>
            </div>

            <div className="footer-copyright">
              <span>{t.footer.copyright}</span>
            </div>

            <div className="footer-socials">
              <a
                href="https://github.com/Derajat-png"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
                data-tooltip="GitHub"
              >
                <img src={githubFooterIcon} alt="GitHub" className="footer-social-icon" />
              </a>
              <a
                href="mailto:derajatminsyana2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Gmail"
                data-tooltip="Gmail"
              >
                <img src={gmailFooterIcon} alt="Gmail" className="footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/derajat"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
                data-tooltip="LinkedIn"
              >
                <img src={linkedinFooterIcon} alt="LinkedIn" className="footer-social-icon" />
              </a>
              <a
                href="https://www.instagram.com/derajat_msy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
                data-tooltip="Instagram"
              >
                <img src={instagramFooterIcon} alt="Instagram" className="footer-social-icon" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Certification Zoom Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
            <div className="cert-modal-info">
              <h3 className="cert-modal-title">{selectedCert.title}</h3>
              <p className="cert-modal-issuer">{selectedCert.issuer}</p>
              <div className="cert-modal-meta">
                <span>{t.certifications.modalYear} {selectedCert.date}</span>
                {selectedCert.id && <span>{t.certifications.modalCredential} {selectedCert.id}</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
