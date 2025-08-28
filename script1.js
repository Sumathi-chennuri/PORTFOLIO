// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
link.addEventListener('click', e => {
const target = document.querySelector(link.getAttribute('href'));
if(target){
e.preventDefault();
target.scrollIntoView({behavior:'smooth'});
}
});
});


// Footer year
document.getElementById('year').textContent = new Date().getFullYear();


// Demo form
const sendBtn = document.getElementById('sendBtn');
sendBtn?.addEventListener('click', e => {
e.preventDefault();
alert('Form submitted (demo only). Hook with EmailJS or backend.');
});
```