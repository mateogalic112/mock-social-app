import React from "react";

const useOnScreen = (
  ref: React.RefObject<HTMLDivElement>,
  rootMargin = "0px"
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const refCopy = ref.current;

    const cb: IntersectionObserverCallback = ([entry]) =>
      setIsIntersecting(entry.isIntersecting);

    const options = {
      rootMargin,
      threshold: 1,
    };

    const observer = new IntersectionObserver(cb, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.unobserve(refCopy as Element);
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
