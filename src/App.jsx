import { useState } from 'react'
import logoImg from './assets/circle.png'
import helloImg from './assets/hello.png'
import profileImg from './assets/me.png'
import downloadIcon from './assets/download.png'
import './App.css'

function App() {
  const [menuActive, setMenuActive] = useState(false);

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
            <span className="nav-name">Dori</span>
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
        <main className="hero-section">
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
      </div>
    </>
  )
}

export default App
