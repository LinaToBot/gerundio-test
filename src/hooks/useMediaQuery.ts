import { useState, useEffect } from "react";

/**
 * Custom hook to check if the screen matches a given media query.
 * @param query The media query string (e.g., "(min-width: 1024px)").
 * @returns `true` if the screen matches the query, otherwise `false`.
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleResize = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [query]);

  return matches;
};

export default useMediaQuery;
