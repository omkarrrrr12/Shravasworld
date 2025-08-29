document.addEventListener("DOMContentLoaded", () => { 
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;

      // ✅ Initialize Swiper if testimonials are loaded
      if (file.includes("testimonials") && typeof Swiper !== "undefined") {
        new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            }
          }
        });
      }

    } catch (err) {
      el.innerHTML = "<p style='color:red;'>Error loading " + file + "</p>";
      console.error("Error loading file:", file, err);
    }
  });
});
