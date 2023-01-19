import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

const myObject = {
  totalValue: 0
};

const Number = ({number}) => {
    const [stats, setStats] = React.useState({ value: 0 })    
    const numberRef = useRef()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const target = {
          value: 0
        };
        const heroAnimation = gsap.context(() => {
        gsap.to(target, {
          duration: 3,
          value: `+=${number}`,
          roundProps: "value",
          ease: "none",
          scrollTrigger: {
            trigger: numberRef.current,
            start: 'left center',
            end: 'right center',
          },
          onUpdate() {
            setStats({ value: target.value });
          }
        });
    }, numberRef);
    return () => heroAnimation.revert();
      }, []);
  return (
    <span className="number" ref={numberRef}>
        {stats.value}
    </span>
  );
};

export default Number;
