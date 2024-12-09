/* Created by Tivotal */

let letters = document.querySelectorAll(".word span");

letters.forEach((letter) => {
  letter.addEventListener("mouseover", (e) => {
    e.target.classList.add("bounce");

    setTimeout(() => {
      e.target.classList.remove("bounce");
    }, 1000);
  });
});
