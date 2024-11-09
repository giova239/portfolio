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
        <li>
          React
          <ul>
            <li>
              <a href="https://18.react.dev/learn">
                https://18.react.dev/learn
              </a>
            </li>
            <li>with Javascript</li>
          </ul>
        </li>
        <li>
          Bootstrap
          <ul>
            <li>
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                https://getbootstrap.com/docs/5.3/getting-started/introduction/
              </a>
            </li>
            <li>customized with scss</li>
          </ul>
        </li>
        <li>
          React-bootstrap
          <ul>
            <li>
              <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction">
                https://react-bootstrap.netlify.app/docs/getting-started/introduction
              </a>
            </li>
            <li>
              a reimplementation of Bootstrap using React instead of jQuery
            </li>
          </ul>
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
