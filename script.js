const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuAtags = document.querySelectorAll("a"); // Select all <a> tags

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
};
cancelBtn.onclick = () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

// Loop through all <a> tags and add click event listener to each
menuAtags.forEach((link) => {
  link.onclick = () => {
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
});
