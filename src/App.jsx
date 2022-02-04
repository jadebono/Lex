import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SidePanel from "./components/SidePanel";
import Boxes from "./components/Boxes";
import Articles from "./components/Articles";
import LawData from "./data/LawData";

export default function App() {
  const [myLang, setMyLang] = useState({ lang: "Maltese" });
  const [currArt, setCurrArt] = useState("");

  let art, cap, pre, tit;

  if (myLang.lang === "Maltese") {
    art = LawData.malti.artikli;
    cap = LawData.malti.kapitolu;
    pre = LawData.malti.pre;
    tit = LawData.malti.titolu;
  } else if (myLang.lang === "English") {
    art = LawData.english.articles;
    cap = LawData.english.chapter;
    pre = LawData.english.pre;
    tit = LawData.english.title;
  }

  function toggleLang(lang) {
    setMyLang({ lang: lang });
  }

  useEffect(() => {
    document.title =
      myLang.lang === "Maltese" ? "L-Avukat L-Għażżien" : "The Lazy Lawyer";
  }, [myLang]);

  function outputArticle(art) {
    setCurrArt(art);
  }

  return (
    <React.Fragment>
      <NavBar lang={myLang.lang} toggleLang={toggleLang} />
      <div className="mx-5 py-10 grid">
        <div className="grid-side-panel">
          <SidePanel cap={cap} tit={tit} pre={pre} />
        </div>
        <div className="grid-boxes">
          <Boxes art={art} outputArticle={outputArticle} lang={myLang.lang} />
        </div>
        <div className="grid-articles">
          <Articles currArt={currArt} />
        </div>
      </div>

      <Footer lang={myLang.lang} />
    </React.Fragment>
  );
}
