import React from "react";
import ModalsSection from "./sections/modalsSection";
import ColorsSection from "./sections/colorsSection";
import SpacersSection from "./sections/spacersSections";
import FormsSection from "./sections/formsSection";
import ButtonsSection from "./sections/buttonsSection";
import AlertsSection from "./sections/alertsSection";
import CardsSection from "./sections/cardsSection";

function UIKit() {
  return (
    <>
      <h1 className="text-primary">UI Kit</h1>
      <hr />
      <ColorsSection />
      <hr />
      <SpacersSection />
      <hr />
      <FormsSection />
      <hr />
      <ButtonsSection />
      <hr />
      <ModalsSection />
      <hr />
      <AlertsSection />
      <hr />
      <CardsSection />
    </>
  );
}

export default UIKit;
