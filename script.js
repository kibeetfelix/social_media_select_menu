const menuEl = document.querySelector(".menu");
const socialListEl = document.querySelector(".social-list");


menuEl.addEventListener("click", () => {
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate")
});
