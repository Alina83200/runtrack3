document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // Визначаємо відсоток прокрутки
    let scrollPercentage =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    // Змінюємо колір футера в залежності від відсотка прокрутки
    let footer = document.querySelector(".footer");
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 50%, 50%)`;
  });
}); 
