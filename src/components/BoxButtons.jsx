import React, { useState, useEffect } from "react";

export default function BoxButton(props) {
  return (
    <React.Fragment>
      <div
        className={props.isHeld ? "box-button-held" : "box-button"}
        onClick={() => props.toggleBtn(props.id)}
      >
        {props.num}
      </div>
    </React.Fragment>
  );
}
