const menuButtonRef = document.getElementById("menu-btn");
const navLinksRef = document.getElementById("nav-links");

menuButtonRef.addEventListener("click", () => {
  menuButtonRef.classList.toggle("open");
  navLinksRef.classList.toggle("open");
});
