import { useEffect } from "react";

const useAnimationSection = nameClass => {
  useEffect(() => {
    const element = document.querySelector(`.${nameClass}`);
    if (element) {
      element.classList.add(`${nameClass}--active`);
    }

    return () => {
      element.classList.remove(`${nameClass}--active`);
    };
  }, [nameClass]);
};

export default useAnimationSection;
