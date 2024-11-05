import React from "react";
import Image from "react-bootstrap/Image";
import profilepic from "../../../images/profile.png";
import section1pic from "../../../images/degree.jpg";
import section2pic from "../../../images/alpenite.jpeg";
import section3pic from "../../../images/lights.jpg";

function Home() {
  return (
    <>
      <div className="sticky-container">
        <div className="hero-image"></div>
        <div className="logo-container">
          <h1 className="fs-64 mb-5 text-primary animate-letters animate-letters--left">
            <div className="first-part">S</div>
            <div className="second-part">tevanato</div>
          </h1>
          <h1 className="fs-64 mb-5 text-secondary animate-letters animate-letters--right">
            <div className="first-part">G</div>
            <div className="second-part">iovanni</div>
          </h1>
        </div>
      </div>
      <div className="profile-desc">
        <Image
          src={profilepic}
          width="300"
          height="300"
          alt="Profile"
          className="profile-desc__pic"
        />
        <div className="profile-desc__text">
          <p>
            Welcome to my portfolio! My name is{" "}
            <span className="text-accent1 fw-bold">Giovanni</span> and I am a{" "}
            <span className="text-accent2 fw-bold">
              Bachelor of Computer Science
            </span>{" "}
            from{" "}
            <span className="text-accent3 fw-bold">
              Ca' Foscari University of Venice
            </span>
            , I am currently working as a{" "}
            <span className="text-accent2 fw-bold">Full Stack developer</span>{" "}
            at <span className="text-accent3 fw-bold">Alpenite</span>.
          </p>
          <p>
            My curiosity and passion for IT began in high school and continued
            through university, where I developed a strong foundation in
            software development. After graduating, I launched my career as a
            software developer specializing in Salesforce Commerce Cloud B2C
            e-commerce, with expertise in both front-end and back-end
            development. I am always eager to learn new technologies and tackle
            new challenges, continuously evolving within this dynamic industry.
          </p>
        </div>
      </div>
      <div className="section-desc section-desc--reverse m-5">
        <Image
          src={section1pic}
          alt="section1"
          className="section-desc__pic section-desc__pic--right"
        />
        <div className="section-desc__text section-desc__text--right">
          <p className="text-primary fw-bold fs-26">
            Building a Passion for IT
          </p>
          <p>
            My journey into the world of IT began in high school, where my
            curiosity for IT quickly grew into a passion. I was fascinated by
            how programming and networking concepts could bring complex systems
            to life, and this excitement only intensified as I gained more
            knowledge.
          </p>
          <p>
            Driven by this newfound interest, I pursued a Bachelor’s degree in
            Computer Science at Ca’ Foscari University of Venice, immersing
            myself in the intricacies of mathematics, software development,
            algorithms, data structures, and cybersecurity. Each course expanded
            my understanding, transforming what began as curiosity into a solid
            technical foundation.
          </p>
          <p>
            Today, I bring that same curiosity and drive to explore new
            technologies, now supported by years of experience and deepened
            expertise in the field.
          </p>
        </div>
      </div>
      <div className="section-desc section-desc m-5">
        <Image
          src={section2pic}
          alt="section2"
          className="section-desc__pic section-desc__pic--left"
        />
        <div className="section-desc__text section-desc__text--left">
          <p className="text-primary fw-bold fs-26">Starting a Career in IT</p>
          <p>
            After completing my degree, I launched my career as a software
            developer specializing in Salesforce Commerce Cloud (SFCC) and B2C
            e-commerce. Beginning as a Front-End Developer, I focused on
            transforming Figma designs into engaging and user-friendly digital
            storefronts. Over time, I expanded my skill set to include back-end
            development, gaining in-depth knowledge of the platform and its
            extensive customizations.
          </p>
          <p>
            My main focus at Alpenite has been developing e-commerce platforms
            for luxury high-fashion brand clients as a consultant, which has
            given me deep, specialized knowledge in the e-commerce field.
          </p>
        </div>
      </div>
      <div className="section-desc section-desc--reverse m-5">
        <Image
          src={section3pic}
          alt="section3"
          className="section-desc__pic section-desc__pic--right"
        />
        <div className="section-desc__text section-desc__text--left">
          <p className="text-primary fw-bold fs-26">What is next?</p>
          <p>
            I’m excited to take the next step in my career, whether that’s
            deepening my experience in e-commerce or exploring entirely new
            fields with fresh challenges. My background has prepared me to adapt
            quickly and grow with new technologies and industry trends, so I’m
            open to roles where I can build on my skills and keep expanding my
            knowledge.
          </p>
          <p>
            I’m looking forward to stepping into new opportunities, learning
            along the way, and making a meaningful impact on any team I join.
            Please feel free to contact me about any new opportunities!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
