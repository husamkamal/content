import React from "react";
import Carousel from "better-react-carousel";
import PortfolioSlider from "./PortfolioSlider";

const Gallery = ({ children }) => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      {children}
    </Carousel>
  );
};

export default Gallery