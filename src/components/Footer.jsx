import React from "react";

export default function Footer(props) {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue pt-4 fixed-bottom">
        <div className="footer-copyright text-center py-3 bg-primary text-white">
          © 2022
          {props.lang === "Maltese"
            ? " Protett mid-dritt tal-awtur: "
            : " Copyright: "}
          <a href="mailto:joe@jadebono.com" className="text-white">
            Joseph Anthony Debono
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
