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

// Profile picture upload
const photo = document.getElementById('photo');
const fileInput = document.getElementById('file');

function showPhoto(src) {
  photo.innerHTML = '';
  const img = new Image();
  img.src = src;
  img.alt = 'Renzel Lacbu';
  photo.appendChild(img);
}

try {
  const saved = localStorage.getItem('portfolio-photo');
  if (saved) showPhoto(saved);
} catch (e) { /* storage unavailable */ }

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    showPhoto(reader.result);
    try { localStorage.setItem('portfolio-photo', reader.result); } catch (e) {}
  };
  reader.readAsDataURL(file);
});
