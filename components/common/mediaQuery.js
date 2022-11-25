export const getMatchMedia = (max) => {
  const mediaQuery = `(max-width:${max})`;
  return window.matchMedia(mediaQuery);
};
