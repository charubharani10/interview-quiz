import { useEffect, useState } from "react";

export default function useOnScreen(refs) {
  const [isIntersecting, setIntersecting] = useState(
    refs.map(() => false) // Initialize an array of booleans for each ref
  );

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      console.error(
        "IntersectionObserver is not supported by this environment."
      );
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIntersecting((prev) => {
            const newIntersecting = [...prev];
            newIntersecting[index] = true;
            return newIntersecting;
          });
          // Stop observing the element once it's intersected
          observer.unobserve(entry.target);
        }
      });
    });

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [refs]);

  return isIntersecting;
}
