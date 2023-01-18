import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Clients = ({ data }) => {
  const value = data[14].value;
  console.log(value);
  return (
    <div id="clients" className="clients">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="clients-slider row justify-content-center ">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                pagination
				autoplay
                style={{ display: "flex", justifyContent: "center" }}
              >
                {value.map((e) => (
                  <SwiperSlide key={e.id}>
                    {" "}
                    <div className="single-client">
                      <Link href="#" target="_blank">
                        <img src={e.image} alt="#" />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
