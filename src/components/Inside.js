import React, { useState } from "react";
import { Link } from "react-router-dom";
import InsideData from "../assets/data/InsideData";
import "../assets/style/style.scss";
import useScrollFadeIn from "../assets/hooks/UseObserver";

function Inside() {
  const animatedItem = useScrollFadeIn("up", 1);
  const [data, setData] = useState(InsideData);
  return (
    <div className="insideWrapper">
      <div {...animatedItem}>
        <h2>FIVESTONE INSIDE</h2>
        <p>파이브스톤과 함께 하세요!</p>
        <ul>
          {data.map((item) => {
            const { id, title } = item;
            return (
              <li key={id}>
                <Link to="#">{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Inside;
