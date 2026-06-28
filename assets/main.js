const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const waitlistForm = document.getElementById('waitlist-form');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (this.querySelector('[name="website"]').value !== '') return;

    const form = this;
    const btn = form.querySelector('.submit-btn');
    btn.disabled = true;
    btn.textContent = 'Submitting…';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      mode: 'no-cors',
    }).finally(() => {
      form.hidden = true;
      document.getElementById('waitlist-success').hidden = false;
    });
  });
}
