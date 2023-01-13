import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceData from "../assets/data/ServiceData";
import "../assets/style/style.scss";
import useScrollFadeIn from "../assets/hooks/UseObserver";

function Service({ path }) {
  const animatedItem = useScrollFadeIn("up", 1);

  const [data, setData] = useState(ServiceData);
  return (
    <div className="serviceWrapper">
      <h2>INTERACTIVE SERVICE</h2>
      <p className="des">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
      <ul {...animatedItem}>
        {data.map((item) => {
          const { id, URL, title, text } = item;
          return (
            <li key={id}>
              <img src={path + URL} alt={title} />
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="#">
                <button>VIEW DETAIL</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Service;
