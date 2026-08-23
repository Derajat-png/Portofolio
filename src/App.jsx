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
import './App.css'

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

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

  const certificates = [
    {
      title: "UI/UX Design Competition (CodeFest 002)",
      issuer: "Universitas Sumatera Utara",
      date: "2026",
      image: certUiux,
      id: "CodeFest002/UIUX/2026"
    },
    {
      title: "Sertifikat Uji Kompetensi (TKJ)",
      issuer: "SMK 11 Maret & PT. Shinwood Global Indonesia",
      date: "2024",
      image: certUji,
      id: "73937/UKK/TKJ/2024"
    },
    {
      title: "Microsoft Office Desktop Application",
      issuer: "Trust Training Partners & Universitas Brawijaya",
      date: "2025",
      image: certMicrosoft,
      id: "TTP/MOS/UB/2025"
    },
    {
      title: "Hackathons & Datathons Tips & Tricks",
      issuer: "Dicoding Indonesia",
      date: "2026",
      image: certHackathon,
      id: "DICODING/HACKATHON/2026"
    },
    {
      title: "Internship Completion Certificate",
      issuer: "PT. Global Dimensi Metalindo",
      date: "2023",
      image: certIntern,
      id: "GDM/INT/2023/08"
    },
    {
      title: "Director General of Issue Analysis",
      issuer: "BEM Fakultas Vokasi Universitas Brawijaya",
      date: "2026",
      image: certBem,
      id: "BEMVOKASI/UB/DIRGEN/2026"
    },
    {
      title: "Young Staff of Advokesma Department",
      issuer: "HMPSTI Universitas Brawijaya",
      date: "2024",
      image: certHmpsti,
      id: "HMPSTI/ADVOKESMA/2024"
    },
    {
      title: "Introduction to Java Course",
      issuer: "Sololearn",
      date: "2024",
      image: certJava,
      id: "SOLOLEARN/JAVA/INTRO/2024"
    },
    {
      title: "Digistar Connect Program",
      issuer: "Digistar Club x GDGoC UB",
      date: "2026",
      image: certApply,
      id: "DIGISTAR/GDGOC/2026"
    },
    {
      title: "CAMP Future Ready Talks",
      issuer: "Celerates CAMP",
      date: "2026",
      image: certUi,
      id: "CELERATES/CAMP/FRT/2026"
    }
  ];

  return (
    <>
      {loading && (
        <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
          <div className="loader-content">
            <h1 className="loader-title">
              {"My Portofolio".split("").map((char, index) => (
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

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-inner">
          <h2 className="projects-title scroll-reveal">PROJECTS</h2>
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
                  <h3 className="project-item-title">SENTINEL - IOT</h3>
                  <span className="project-badge project-badge-iot">IOT</span>
                </div>
                
                <p className="project-desc">
                  Developed an IoT monitoring system to detect fire and gas leaks in real time by integrating sensors, a microcontroller, and a web-based dashboard. Implemented the Sugeno Fuzzy Logic algorithm to process sensor data and enable automated decision-making, improving safety and response to potential hazards.
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

            <div className="project-item scroll-reveal">
              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">WEBSITE HEALTY LIFE - EDUKASI KESEHATAN</h3>
                  <span className="project-badge">Website</span>
                </div>
                
                <p className="project-desc">
                  Developed the Healthy Life website as a health education platform providing information on sleep quality, healthy eating habits, and healthy lifestyle practices. Designed and implemented website features to present educational content in a structured manner, improve users' access to health information, and enhance the overall user experience through an intuitive and informative interface.
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
                    Live Demo <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-image-wrapper healty-life-wrapper">
                  <img src={projectHealtyLife} alt="Healthy Life Website Preview" className="project-image" />
                </div>
              </div>
            </div>

            {/* Project 2: Lokara */}
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
                  <h3 className="project-item-title">UI/UX MOBILE - LOKARA (LOKAL KARYA INDONESIA)</h3>
                  <span className="project-badge">Mobile</span>
                </div>
                
                <p className="project-desc">
                  Designed a UX-driven e-commerce platform to support local businesses in promoting Indonesian cultural products to the international market. Developed an intuitive user journey, from product exploration and information discovery to the purchasing process, improving accessibility and enhancing the user experience in discovering and purchasing Indonesian cultural products.
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    Live Demo <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Sanding Solutions */}
            <div className="project-item scroll-reveal">
              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">DESIGN UI/UX - PREMIUM INDUSTRIAL SANDING SOLUTIONS</h3>
                  <span className="project-badge">Website</span>
                </div>
                
                <p className="project-desc">
                  Designed the Tiaga Pratama Persada company website as a digital platform to showcase grinding material products through comprehensive and informative content. Created an intuitive user interface and implemented a pre-order feature to simplify the ordering process, improve service accessibility, and support the company's digital transformation.
                </p>

                <div className="project-footer">
                  <div className="project-tech-icons">
                    <div className="tech-icon-wrapper">
                      <img src={figmaLogo} alt="Figma" className="tech-icon" />
                    </div>
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="live-demo-badge-inline">
                    Live Demo <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={projectSanding} alt="Sanding Solutions Website Preview" className="project-image" />
                </div>
              </div>
            </div>

            {/* Project 4: Pasar Ngalam */}
            <div className="project-item visual-left scroll-reveal">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={projectPasarNgalam} alt="Pasar Ngalam Website Preview" className="project-image" />
                </div>
              </div>

              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">PASAR NGALAM - MARKETPLACE PLATFORM</h3>
                  <span className="project-badge">Website</span>
                </div>
                
                <p className="project-desc">
                  Developed a marketplace platform to help local sellers market their products digitally through product management, catalog, and structured database features. Designed an efficient data management system to streamline product entry, organization, and information display while supporting well-organized digital transactions.
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
                    Live Demo <span className="demo-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5: Waroeng K-conk */}
            <div className="project-item scroll-reveal">
              <div className="project-info">
                <div className="project-header-container">
                  <h3 className="project-item-title">WEBSITE WAROENG K-CONK - UMKM KULINER</h3>
                  <span className="project-badge">Website</span>
                </div>
                
                <p className="project-desc">
                  Developed a web platform for Waroeng K-Conk, a culinary local business (UMKM) specializing in authentic bebek bumbu hitam. Designed and implemented website features to display menus, facilitate ordering processes, and showcase culinary offerings to help the business digitalize its operations and reach a wider customer base.
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
                    Live Demo <span className="demo-arrow">↗</span>
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
              <h2 className="tools-title-header">TOOLS<br/>SOFTWARE</h2>
              <div className="tools-underline"></div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Certification Section */}
    <section id="certification" className="certification-section">
      <div className="certification-inner">
        <h2 className="certification-title scroll-reveal">CERTIFICATIONS</h2>
        <div className="certification-divider scroll-reveal"></div>
        
        <div className="certifications-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card-item scroll-reveal" onClick={() => setSelectedCert(cert)}>
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-card-img" />
                <div className="cert-overlay">
                  <span className="cert-zoom-icon">🔍 View Certificate</span>
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
              <span>Year: {selectedCert.date}</span>
              {selectedCert.id && <span>Credential ID: {selectedCert.id}</span>}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default App
