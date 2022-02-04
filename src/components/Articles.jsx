import React, { useState, useEffect } from "react";

export default function Articles(props) {
  return (
    <React.Fragment>
      <h3 className="text-center text-primary">Art.</h3>
      <p className="px-2">{props.currArt}</p>
    </React.Fragment>
  );
}
