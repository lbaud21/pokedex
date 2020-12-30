import React, { useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function useIntersectionObserverScroll(observedRef) {
  const loading = useSelector((state) => state.loading);
  const hasMore = useSelector((state) => state.hasMore);
  //const observer = useRef();

  function handler(entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        console.log("intersecting");
      } else {
        console.log("not intersecting");
      }
    });
  }

  let observer = new IntersectionObserver(handler);
  observer.observe(observedRef);
}
