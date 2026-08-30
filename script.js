
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function submitForm(event){
  event.preventDefault();
  document.getElementById('form-note').textContent =
    'Thanks — the form layout works. We still need to connect it to your email before customers can send enquiries.';
  return false;
}
