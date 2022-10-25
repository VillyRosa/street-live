var body = document.querySelector('body');
var main = document.querySelector('main');
var section = document.querySelector('section');
var chevron = document.querySelector('.chevron');
var linkChevron = document.querySelector('#linkChevron');
var cont = 0;

chevron.onclick = function() {
    section.classList.toggle('hidden');
    // main.classList.toggle('hidden');
    chevron.classList.toggle('updown');
}

// Âncoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
         e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
     });
});