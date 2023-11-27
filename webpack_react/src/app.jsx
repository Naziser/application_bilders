import React from "react";
import catsIMG from "./images/cats.jpg";
import personSVG from "./images/person-gear-24.svg";

export const App = () => {
  return (
    <>
      <h1>Котята</h1>
      <img src={catsIMG} alt="котята" />
      <img src={personSVG} alt="Лупа" />
    </>
  );
};
