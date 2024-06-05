"use client";

import { useEffect, useRef } from "react";

import styles from "./mouseTrailer.module.scss";

const MouseTrailer = () => {
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = trailerRef.current;
    if (!blob) return;

    const pointerHandler = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" },
      );
    };

    window.addEventListener("pointermove", pointerHandler);
    window.addEventListener("pointerdown", pointerHandler);
    return () => {
      window.removeEventListener("pointermove", pointerHandler);
      window.removeEventListener("pointerdown", pointerHandler);
    };
  }, [trailerRef]);

  return (
    <div className={styles.mouseTrailer}>
      <div className={styles.blob} ref={trailerRef} />
      <div className={styles.blur} />
    </div>
  );
};

export default MouseTrailer;
