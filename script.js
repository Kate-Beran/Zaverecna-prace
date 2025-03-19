document.addEventListener("DOMContentLoaded", function () {
  // Animace Portfolio Items při rolování
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  function checkSlide() {
    portfolioItems.forEach((item) => {
      const slideInAt =
        window.scrollY + window.innerHeight - item.offsetHeight / 2;
      const itemBottom = item.offsetTop + item.offsetHeight;
      const isHalfShown = slideInAt > item.offsetTop;
      const isNotScrolledPast = window.scrollY < itemBottom;

      if (isHalfShown && isNotScrolledPast) {
        item.classList.add("animated");
      } else {
        item.classList.remove("animated");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  checkSlide();
});
