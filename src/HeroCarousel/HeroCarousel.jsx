import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { wrapper, slide, active } from "./HeroCarousel.module.css";

function HeroCarousel({ interval, height, children }) {
  if (interval < 1200) {
    throw new Error(
      `Interval provided to HeroCarousel component (${interval}ms) must be at least 1200ms`
    );
  }

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const count = React.Children.count(children);
    const autoplay = setTimeout(() => {
      setActiveSlide(activeSlide + 1 >= count ? 0 : activeSlide + 1);
    }, interval);

    return () => clearTimeout(autoplay);
  }, [children, interval, activeSlide, setActiveSlide]);

  return (
    <div className={wrapper} style={{ height }}>
      {React.Children.map(children, (child, index) => (
        <div className={activeSlide === index ? `${slide} ${active}` : slide}>
          {child}
        </div>
      ))}
    </div>
  );
}

HeroCarousel.propTypes = {
  interval: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

HeroCarousel.defaultProps = {
  interval: 3000,
  height: null,
};

export default React.memo(HeroCarousel);
