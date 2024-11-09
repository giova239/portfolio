import React from "react";
import ModalsSection from "./sections/modalsSection";
import ColorsSection from "./sections/colorsSection";
import SpacersSection from "./sections/spacersSections";
import FormsSection from "./sections/formsSection";
import ButtonsSection from "./sections/buttonsSection";
import AlertsSection from "./sections/alertsSection";
import CardsSection from "./sections/cardsSection";

function About() {
  return (
    <div className="pt-14">
      {/* ABOUT */}
      <h1 className="text-primary">About</h1>
      <p>This site was Made with:</p>
      <ul>
        <li>React (https://18.react.dev/learn): with Javascript</li>
        <li>
          Bootstrap
          (https://getbootstrap.com/docs/5.3/getting-started/introduction/):
          customized via scss
        </li>
        <li>
          react-bootstrap
          (https://react-bootstrap.netlify.app/docs/getting-started/introduction):
          a reimplementation of bootstrap using react instead of jquery
        </li>
      </ul>
      {/* UI KIT */}
      <h1 className="text-primary">UI Kit</h1>
      <hr />
      <ColorsSection />
      <hr />
      <FormsSection />
      <hr />
      <SpacersSection />
      <hr />
      <ButtonsSection />
      <hr />
      <ModalsSection />
      <hr />
      <CardsSection />
      <hr />
      <AlertsSection />
    </div>
  );
}

export default About;
