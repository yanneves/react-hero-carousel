import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./HeroCarousel.module.css";

function HeroCarousel({ interval, children }) {
  if (interval < 1200) {
    throw new Error(
      `Interval provided to HeroCarousel component (${interval}ms) must be at least 1200ms`
    );
  }

  const [active, setActive] = useState(0);

  useEffect(() => {
    const count = React.Children.count(children);
    const autoplay = setTimeout(() => {
      setActive(active + 1 >= count ? 0 : active + 1);
    }, interval);

    return () => clearTimeout(autoplay);
  }, [children, interval, active, setActive]);

  return (
    <div className={styles.wrapper}>
      {React.Children.map(children, (child, index) => (
        <div
          className={
            active === index ? `${styles.slide} ${styles.active}` : styles.slide
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}

HeroCarousel.propTypes = {
  interval: PropTypes.number,
  children: PropTypes.node.isRequired,
};

HeroCarousel.defaultProps = {
  interval: 3000,
};

export default React.memo(HeroCarousel);
