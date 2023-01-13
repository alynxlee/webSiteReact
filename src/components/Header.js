import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import NavData from "../assets/data/NavData";
import SwiperData from "../assets/data/SwiperData";
import "../assets/style/style.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "../assets/style/swiperStyles.module.css";

function Header({ path }) {
  const [data, setData] = useState(NavData);
  const [swiper, setSwiper] = useState(SwiperData);
  return (
    <div className="navWrapper">
      {/* <h2>Header</h2> */}
      <nav>
        <h1>
          <img src={path + "/images/logo.png"} alt="logo" />
        </h1>

        <ul className="menu">
          {data.map((list) => {
            const {
              id,
              URL,
              title,
              subTitle1,
              subTitle2,
              subTitle3,
              subTitle4,
            } = list;
            return (
              <li key={id}>
                <Link to={URL}>{title}</Link>

                <ul className="subMenu">
                  <li>
                    <Link to="#">{subTitle1}</Link>
                  </li>
                  <li>
                    <Link to="#">{subTitle2}</Link>
                  </li>
                  <li>
                    <Link to="#">{subTitle3}</Link>
                  </li>
                  <li>
                    <Link to="#">{subTitle4}</Link>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="register">
          <span>
            <Link to="http://bdmp-005.cafe24.com/bizdemo135866/member/login.php?sub=02">
              <img src={path + "/images/iconMember.png"} alt="로그인" />
            </Link>
          </span>
          <span>
            <Link to="http://bdmp-005.cafe24.com/bizdemo135866/company/company03.php?sub=03">
              <img src={path + "/images/iconContact.png"} alt="오시는길" />
            </Link>
          </span>
        </div>
      </nav>
      <Swiper
        pagination={true}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {swiper.map((img) => {
          const { id, URL, alt, title, des } = img;
          return (
            <SwiperSlide key={id} className="slide">
              <img src={path + URL} alt={alt} />
              <div>
                <h2>{title}</h2>
                <p>{des}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Header;
