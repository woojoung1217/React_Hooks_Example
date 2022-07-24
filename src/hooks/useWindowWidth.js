import React, { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
