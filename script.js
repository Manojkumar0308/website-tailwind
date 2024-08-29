const navDialog = document.getElementById("nav-dialog");
function handleClick() {
  console.log("button clicked");
  navDialog.classList.toggle("hidden");
}
const innerTranslateLTR = -48 * 4;
const innerTranslateRTL = 36 * 4;
function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    console.log(element, isIntersecting);
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  // observe code
  intersectionObserver.observe(element);
  //function for to know how much is scrolled.
  function scrollHandler() {
    let totalTranslate = 0;
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    if (isLTR) {
      totalTranslate = translateX + innerTranslateLTR;
    } else {
      totalTranslate = -(translateX + innerTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
