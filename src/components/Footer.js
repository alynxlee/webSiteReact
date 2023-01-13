import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterData1 from "../assets/data/FooterData1";
import SnsData from "../assets/data/SnsData";
import FooterData2 from "../assets/data/FooterData2";

import "../assets/style/style.scss";

function Footer({ path }) {
  const [policy, setPolicy] = useState(FooterData1);
  const [sns, setSns] = useState(SnsData);
  const [info, setInfo] = useState(FooterData2);
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <h1>
          <img src={path + "/images/logo-f.png"} alt="footerLogo" />
        </h1>
        <ul className="policyWrapper">
          {policy.map((item) => {
            const { id, title } = item;
            return (
              <li key={id}>
                <Link to="#">{title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="snsWrapper">
          {sns.map((item) => {
            const { id, icon, title } = item;
            return (
              <li>
                <Link to="#" key={id}>
                  <img src={path + icon} alt={title} />
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="infoWrapper">
          {info.map((item) => {
            const { id, title } = item;
            return <li key={id}>{title}</li>;
          })}
        </ul>
        <div className="copyRight">
          COPYRIGHT © 2022 FIVESTONE. ALL RIGHT RESERVED
        </div>
      </div>
      <a href="#" className="goUp">
        <img src="/images/icon-top.png" alt="top" />
      </a>
    </div>
  );
}

export default Footer;
