import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <hr />
      <section className="home-page">
        <h1>Welcome to My Landing Page</h1>
        <p>
          "Hello, my name is Jaspreet Kaur. I have a passion for creating
          innovative and efficient solutions to complex problems. Throughout my
          career, I have gained expertise in Java, C++ & python programming
          languages."
        </p>
        <a href="/signup" className="cta-button">
          Sign Up
        </a>
      </section>
      <hr />
      <section className="feature-section">
        <h1>Services</h1>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src="https://www.interviewbit.com/blog/wp-content/uploads/2021/05/required-skills-for-frontend-developer-1024x845.jpeg"
              alt="Feature 1"
            />
            <h3>Frontend Development</h3>
            <p>
              With expertise in HTML, CSS, and JavaScript, I create visually
              appealing and user-friendly interfaces, employing frameworks like
              React.js to build dynamic and interactive web applications for
              optimal user experiences.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://thetapacademy.com/wp-content/uploads/2023/03/Backend-developer-skills-1024x576.png"
              alt="Feature 2"
            />
            <h3>Backend Development</h3>
            <p>
              Proficient in Node.js, Express.js, and databases, I build reliable
              server-side solutions to ensure seamless functionality and
              performance for web applications.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://www.michaelpage.co.in/sites/michaelpage.co.in/files/2022-05/Software%20Developer.jpg"
              alt="Feature 3"
            />
            <h3>Software Development</h3>
            <p>
              With a strong foundation in various programming languages and
              frameworks, I possess extensive software development expertise in
              designing, developing, and deploying robust and scalable
              applications that meet client needs.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <footer>
        <p>&copy; Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
