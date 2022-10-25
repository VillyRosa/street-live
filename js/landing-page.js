var body = document.querySelector('body');
var section = document.querySelector('section');
var chevron = document.querySelector('.chevron');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
         e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
     });
});

chevron.onclick = function() {
    section.classList.toggle('hidden');
    chevron.classList.toggle('updown');
    window.location.href = '#sla';
}