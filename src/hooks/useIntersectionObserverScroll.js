import React, { useRef, useCallback } from "react";

export default function useIntersectionObserverScroll(
  loading,
  hasMore,
  changeOffset
) {
  const observer = useRef();
  const lastPokemonCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            changeOffset();
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, changeOffset]
  );
  return lastPokemonCardRef;
}
