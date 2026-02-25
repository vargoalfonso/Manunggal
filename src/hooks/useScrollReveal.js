import { useEffect } from "react";

export function useScrollReveal(options = {}) {
  const {
    selector = ".reveal",
    root = null,
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.12,
    once = true,
  } = options;

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-revealed");
          }
        }
      },
      { root, rootMargin, threshold }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [selector, root, rootMargin, threshold, once]);
}
