import { useEffect, useState } from "react";

export const useOnScreen = ref => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
