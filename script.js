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


document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const menuAtags = document.querySelectorAll("a");

  menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
  };
  cancelBtn.onclick = () => {
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
  menuAtags.forEach((link) => {
    link.onclick = () => {
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    };
  });
});
//Light dark theme toggle js code
$('.appearance').click(function() {
  $('body').toggleClass("dark");
  $(this).toggleClass("switch");
});
document.addEventListener('DOMContentLoaded', () => {
const themeToggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
// Apply the saved theme or default to dark
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
} else {
  document.body.classList.remove('light-theme');
}
themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});
});
document.addEventListener("DOMContentLoaded", function() {
const sections = document.querySelectorAll(".content-section");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add("visible");
  }
});
}, { threshold: 0.1 });

sections.forEach(section => {
observer.observe(section);
});
});
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const cards1 = document.getElementById('cards1');
const cards2 = document.getElementById('cards2');

// Button 1 should be active by default, so cards1 is shown initially.
button1.addEventListener('click', () => {
button1.classList.add('active');
button2.classList.remove('active');
cards1.classList.add('active');
cards2.classList.remove('active');
});

button2.addEventListener('click', () => {
button2.classList.add('active');
button1.classList.remove('active');
cards2.classList.add('active');
cards1.classList.remove('active');
});
document.addEventListener('DOMContentLoaded', function() {
const techImages = document.querySelectorAll('.tech-image');

techImages.forEach(image => {
  const techStack = image.getAttribute('data-tech');
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerText = techStack;
  image.appendChild(tooltip);
});
});

