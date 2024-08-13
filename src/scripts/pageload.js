document.addEventListener("swup:page:view", () => {
  const astroPageLoadEvent = new Event("astro:page-load");
  document.dispatchEvent(astroPageLoadEvent);
});
document.addEventListener("DOMContentLoaded", () => {
  const astroPageLoadEvent = new Event("astro:page-load");
  document.dispatchEvent(astroPageLoadEvent);
});
