// Show / hide profile
const toggleBtn = document.getElementById('toggle');
const profile = document.getElementById('profile');

toggleBtn.addEventListener('click', () => {
  const isHidden = profile.classList.toggle('hidden');
  toggleBtn.querySelector('span').textContent = isHidden ? 'Show Profile' : 'Hide Profile';
  toggleBtn.querySelector('use').setAttribute('href', isHidden ? '#i-eye' : '#i-eye-off');
  toggleBtn.setAttribute('aria-expanded', String(!isHidden));
});

// Adjustable skill sliders
document.querySelectorAll('input[type="range"]').forEach((slider) => {
  slider.addEventListener('input', () => {
    const key = slider.dataset.k;
    document.getElementById('b-' + key).style.width = slider.value + '%';
    document.getElementById('v-' + key).textContent = slider.value + '%';
  });
});

// Message for Sir (click to show / hide)
const msgBtn = document.getElementById('msgBtn');
const msgBody = document.getElementById('msgBody');

msgBtn.addEventListener('click', () => {
  const open = msgBody.hasAttribute('hidden');
  msgBody.toggleAttribute('hidden', !open);
  msgBtn.setAttribute('aria-expanded', String(open));
  msgBtn.querySelector('small').textContent = open ? 'Click to close' : 'Click to read';
});
