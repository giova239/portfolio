import React from "react";
import Image from "react-bootstrap/Image";
import profilepic from "../../../icons/profilepic.png";

function Home() {
  return (
    <>
      <div className="sticky-container">
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
          width="400"
          height="400"
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
    </>
  );
}

export default Home;
