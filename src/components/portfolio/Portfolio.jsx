import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="projectImage"></img>
          </div>
          <h3>URL Shortener</h3>
          <p className="paragraph text-light">
            {" "}
            Developed a full Stack ShortURL web application. ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter, LinkedIn and sites with authority on the Internet. Just paste the long URL and click the Submit button. On the next screen, copy the shortened URL and share it on websites, chat and emails.
          </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/MuskanGarg24/KwikFood-Online-Canteen"
              className="btn"
            >
              Github
            </a>
            <a href="https://url-shortener-8mb3.onrender.com/" className="btn btn-primary">
              Live 
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Portfolio;
