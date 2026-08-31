
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// KJ Contracting Services Slider

const serviceSlider = document.querySelector('#services .cards');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

if (serviceSlider && prevButton && nextButton) {
  const moveSlider = (direction) => {
    const card = serviceSlider.querySelector('.card');
    if (!card) return;

    const distance = card.offsetWidth + 24;

    serviceSlider.scrollBy({
      left: direction * distance,
      behavior: 'smooth'
    });
  };

  nextButton.addEventListener('click', () => {
    moveSlider(1);
  });

  prevButton.addEventListener('click', () => {
    moveSlider(-1);
  });
}


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function submitForm(event){
  event.preventDefault();
  document.getElementById('form-note').textContent =
    'Thanks — the form layout works. We still need to connect it to your email before customers can send enquiries.';
  return false;
}

// Automatic service slider

if (serviceSlider) {
  setInterval(() => {
    const card = serviceSlider.querySelector('.card');
    if (!card) return;

    const distance = card.offsetWidth + 24;
    const nearEnd =
      serviceSlider.scrollLeft + serviceSlider.clientWidth >=
      serviceSlider.scrollWidth - 10;

    if (nearEnd) {
      serviceSlider.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      serviceSlider.scrollBy({
        left: distance,
        behavior: 'smooth'
      });
    }
  }, 3500);
}
