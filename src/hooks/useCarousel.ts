import { useEffect, useState } from "react";

export function useCarousel(length: number, interval = 5000) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      const newIndex = (prev + dir + length) % length;
      return [newIndex, dir];
    });
  };

  useEffect(() => {
    const auto = setInterval(() => paginate(1), interval);
    return () => clearInterval(auto);
  }, [length, interval]);

  return {
    index,
    direction,
    paginate,
    setIndex,
  };
}