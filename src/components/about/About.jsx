import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import HeaderSocials from "../header/HeaderSocials";

const About = () => {
  return (
    <>
      <section id="about">
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="aboutImage"></img>
            </div>
          </div>
          <div className="about_content">
            <p>
              Hey there!
              <br />
              <br />
              I'm Abhijeet Singh, a full stack developer enthusiast who
              graduated from Punjab University Chandigarh with a degree in
              Bachelor of Computer Applications. My passion lies in full-stack
              development, and I'm all about creating amazing projects while
              staying up-to-date with cutting-edge technologies. With a thirst
              for innovation, I am actively seeking opportunities in the realm
              of full-stack development.
              <br />
              <br />
              Having completed a 3-month internship, I bring hands-on experience
              to the table. I'm not only enthusiastic about building outstanding
              projects but also committed to mastering the intricacies of
              top-notch technologies. My journey is marked by continuous growth
              and a determination to excel, and I can't wait to contribute my
              skills and energy to exciting full-stack opportunities.
            </p>
            <HeaderSocials />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
