import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.2 },
  once = true,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (once && inView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, optionsRef.current);

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, inView]);

  return { ref, inView };
}
