import React, { useState, useEffect } from "react";
import BoxButton from "./BoxButtons";
import { nanoid } from "nanoid";

export default function Boxes(props) {
  const artNums = props.art.map((item) => props.art.indexOf(item) + 1);
  const [btns, setBtns] = useState(generateAllNewBtns());
  //   const [subBtns, setSubBtns] = useState([]);

  useEffect(() => {
    btns.forEach((btn) => {
      btn.isHeld && props.outputArticle(props.art[btn.value - 1]);
    });
  }, [btns, props]);

  function generateAllNewBtns() {
    let newBtns = [];
    for (let i = 0; i < artNums.length; i++) {
      newBtns.push(generateNewBtn(i + 1));
    }
    return newBtns;
  }

  function generateNewBtn(item) {
    return {
      value: item,
      isHeld: false,
      id: nanoid(),
    };
  }

  function toggleBtn(id) {
    setBtns((oldBtn) =>
      oldBtn.map((btn) => {
        if (btn.isHeld && btn.id !== id) {
          btn.isHeld = false;
        }
        return btn.id === id ? { ...btn, isHeld: !btn.isHeld } : btn;
      })
    );
  }

  return (
    <React.Fragment>
      <h3 className="text-center mb-5">
        {props.lang === "Maltese"
          ? "Għafas il-Buttuna Biex Tara l-Artiklu"
          : "Click on the Button to Reveal the Article"}
      </h3>
      <div className="box-button-container">
        {btns.map((item) => {
          return (
            <BoxButton
              key={item.id}
              id={item.id}
              num={item.value}
              isHeld={item.isHeld}
              toggleBtn={toggleBtn}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
