import { useState, useEffect } from 'react';

/**
 * useMediaQuery Hook
 * 
 * @param {string} query - The media query string.
 * @returns {boolean} - True if the document matches the media query, false if not.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
