import React, { useState } from "react";
import { Link } from "react-router-dom";
import BusinessData from "../assets/data/BusinessData";
import useScrollFadeIn from "../assets/hooks/UseObserver";

function Business({ path }) {
  const animatedItem = useScrollFadeIn("up", 1);
  const [data, setData] = useState(BusinessData);
  return (
    <div className="businessWrapper" {...animatedItem}>
      <h2>KEY BUSINESS</h2>
      <p className="des">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
      <ul className="businessContainer">
        {data.map((item) => {
          const { id, URL, img, title, text } = item;
          return (
            <li key={id}>
              <Link to={URL}>
                <div className="imgWrapper">
                  <img src={path + img} alt={title} />
                </div>
                <div className="txtWrapper">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Business;
