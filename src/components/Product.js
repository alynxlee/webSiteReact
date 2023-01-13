import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductData from "../assets/data/ProductData";
import "../assets/style/style.scss";
import useScrollFadeIn from "../assets/hooks/UseObserver";

function Product({ path }) {
  const animatedItem = useScrollFadeIn("up", 1);

  const [data, setData] = useState(ProductData);
  return (
    <div className="productWrapper">
      <div {...animatedItem}>
        <h2>OUR PRODUCT</h2>
        <p>정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
        <div className="productList">
          <div>
            <Link to="http://bdmp-005.cafe24.com/bizdemo135866/product/product01.php?com_board_basic=read_form&com_board_idx=57&sub=01&&com_board_search_code=&com_board_search_value1=&com_board_search_value2=&com_board_page=&&com_board_id=10&&com_board_id=10">
              <div className="item1Container">
                <div>
                  <img src={path + "/images/product01.jpeg"} alt="DFSA 101" />
                </div>
                <div className="itemtxt">
                  <h3>DFSA 101</h3>
                  <button>VIEW</button>
                </div>
              </div>
            </Link>
          </div>
          <div className="itemContainer">
            {data.map((item) => {
              const { id, URL, img, title } = item;
              return (
                <div key={id} className="productItem">
                  <Link to={URL}>
                    <div className="itemWrap">
                      <div className="itemImg">
                        <img src={path + img} alt={title} />
                      </div>
                      <div className="itemTitle">
                        <h3>{title}</h3>
                        <button>VIEW</button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
