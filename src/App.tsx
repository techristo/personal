import './App.css';
import php from './photos/phplogo.png';
import angular from './photos/angular-logo.png';
import c from './photos/c-logo.png';
import cplusplus from './photos/cplusplus-logo.png';
import csharp from './photos/csharp-logo.png';
import css3 from './photos/css3-logo.png';
import expressjs from './photos/expressjs-logo.png';
import html from './photos/html-logo.png';
import java from './photos/java-logo.png';
import jslogo from './photos/jslogo.png';
import laravel from './photos/laravel-logo.png';
import nestjs from './photos/nestjs-logo.png';
import react from './photos/react-logo.png';
import ruby from './photos/ruby-logo.png';
import rubyonrails from './photos/rubyonrails-logo.png';
import typescript from './photos/typescript-logo.png';
import javaspringboot from './photos/javaspringboot-logo.png';
import vuejs from './photos/vuejs-logo.png';


function App() {
  return (
    <div className="App">
      <nav id="navbar" className="nav">
  <ul className="nav-list">
    <li>
      <a href="#welcome-section">About</a>
    </li>
    <li>
      <a href="#projects">Skills</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>



<section id="welcome-section" className="welcome-section">
  <h1>Hey I am Chris</h1>
  <p>a web developer</p>
</section>



<section id="projects" className="projects-section">
  <h2 className="projects-section-header">These are some of my skills</h2>

  <div className="projects-grid">
    <span  className="project project-tile">
      <img
        className="project-image"
        src={php}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        PHP
        <span className="code">&#47;&gt;</span>
      </p>
      </span>
    <span
      className="project project-tile"
    >
      <img
        className="project-image"
        src={angular}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Angular
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      className="project project-tile"
    >
      <img
        className="project-image"
        src={c}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        c
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={cplusplus}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        C++
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
     
      className="project project-tile"
    >
      <img
        className="project-image"
        src={csharp}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        C#
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={css3}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        CSS3
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
  
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={expressjs}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Express.js
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={html}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        HTML5
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={java}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Java
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={javaspringboot}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Java Springboot
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={jslogo}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Javascript
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={laravel}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Laravel
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={nestjs}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Nest.js
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={react}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        React
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={ruby}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Ruby
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={rubyonrails}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Ruby on Rails
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={typescript}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Typescript
        <span className="code">&#47;&gt;</span>
      </p>
    </span>
    <span
      
      className="project project-tile"
    >
      <img
        className="project-image"
        src={vuejs}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Vue.js
        <span className="code">&#47;&gt;</span>
      </p>
    </span>

  </div>

  
</section>



<section id="contact" className="contact-section">
  <div className="contact-section-header">
    <h2>Let's work together...</h2>
    <p>How do you take your coffee?</p>
  </div>
  <div className="contact-links" >
    
    <a
      id="profile-link"
      href="https://github.com/techristo"
      className="btn contact-details"
      ><i className="fab fa-github"></i> GitHub</a
    >
    
  </div>
</section>



<footer>
  <p>
   With the power of React and Typescript.
  </p>
  <p>
    &copy; Created By Techristo
    
  </p>
</footer>

     </div>


)}

export default App;
