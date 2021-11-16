import React from "react";
import BannerBg from "../../../../images/exploreBanner.jpg";

const ExploreBanner = ({ children }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${BannerBg}) center center/cover fixed no-repeat`,
      }}
      className=""
    >
      <div className="my-container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{ minHeight: "60vh" }}
          className="flex items-center justify-center"
        >
          {children ? (
            children
          ) : (
            <div className="text-white text-left flex items-center justify-center flex-col">
              <p className="text-5xl uppercase tracking-widest font-grandHotel text-emerald-500">
                Explore Your Glasses
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreBanner;
