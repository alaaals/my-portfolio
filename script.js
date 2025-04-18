document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  
  let current = 0;

  window.onload = function () {
    const slides = document.querySelectorAll(".carousel img");
  
    window.nextSlide = function () {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    };
  };
  

  function scrollProjects(direction) {
    const container = document.getElementById("projectScroll");
    const scrollAmount = 320; // Adjust based on card width + gap
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  }
  