import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { TLSSocket } from "tls";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const timeline = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  return { counter, elementToAnimate, handleClick };
};
