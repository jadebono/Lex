import React, { useState, useEffect } from "react";

export default function SidePanel(props) {
  return (
    <React.Fragment>
      <h4 className="text-center text-primary my-1">Header</h4>
      <p className="px-2">
        <b>Kapitlu: </b> {props.cap}
      </p>
      <p className="px-2">
        <b>Titolu: </b> {props.tit}
      </p>
      <p className="px-2">{props.pre}</p>
    </React.Fragment>
  );
}
