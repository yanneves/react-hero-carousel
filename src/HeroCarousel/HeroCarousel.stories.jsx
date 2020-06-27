import React from "react";
import "reset-css";

import HeroCarousel from "./HeroCarousel";

export default { title: "Example" };

// eslint-disable-next-line react/prop-types
const FgSlide = ({ seed }) => (
  <img
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
    src={`https://placem.at/places?w=1920&h=1080&random=${seed}&txt=${seed}`}
    alt={`Placeholder ${seed}`}
  />
);

// eslint-disable-next-line react/prop-types
const BgSlide = ({ seed }) => (
  <article
    style={{
      backgroundImage: `url(https://placem.at/places?w=1920&h=1080&random=${seed}&txt=${seed})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
  />
);

export const Images = () => (
  <HeroCarousel>
    <FgSlide seed="1" />
    <FgSlide seed="2" />
    <FgSlide seed="3" />
    <FgSlide seed="4" />
    <FgSlide seed="5" />
  </HeroCarousel>
);

export const BackgroundImages = () => (
  <HeroCarousel>
    <BgSlide seed="1" />
    <BgSlide seed="2" />
    <BgSlide seed="3" />
    <BgSlide seed="4" />
    <BgSlide seed="5" />
  </HeroCarousel>
);

export const CustomInterval = () => (
  <HeroCarousel interval={8000}>
    <BgSlide seed="1" />
    <BgSlide seed="2" />
    <BgSlide seed="3" />
    <BgSlide seed="4" />
    <BgSlide seed="5" />
  </HeroCarousel>
);
