import React, { useState, useEffect } from "react";
import mt from "../../src/assets/mt.png";
import uk from "../../src/assets/uk.png";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary fixed-top">
        <div className="container-fluid">
          <p className="navbar-brand my-auto">
            {props.lang === "Maltese"
              ? "L-Avukat l-Għażżien"
              : "The Lazy Lawyer"}
          </p>
          <div className="d-flex flex-row-reverse bd-highlight mr-5">
            <img
              className="mx-2"
              src={mt}
              onClick={() => props.toggleLang("Maltese")}
              alt="maltese flag"
            />
            <img
              className="mx-2"
              src={uk}
              onClick={() => props.toggleLang("English")}
              alt="uk flag"
            />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
