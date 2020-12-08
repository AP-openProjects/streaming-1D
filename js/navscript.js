// Shrink nav

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "var(--clr--bgc1-footer)";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

// Toggle button

const navToggle = document.querySelector('.toggle-button');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav__list-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav__list-open');
    })
});