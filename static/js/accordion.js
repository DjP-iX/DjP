// accordion script
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll("[data-accordion]");
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        header.parentElement.classList.toggle("active");
      });
    });
  });

})();
