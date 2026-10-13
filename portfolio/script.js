const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load previous mode (if user switched before)
if (localStorage.getItem('dark-mode') === 'true') {
  body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Save preference
  const isDark = body.classList.contains('dark');
  localStorage.setItem('dark-mode', isDark);

  // Change icon dynamically
  toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});


// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// --- Popup Contact Form ---
const hireBtn = document.getElementById('hire-me-btn');
const popup = document.getElementById('hire-popup');
const closePopup = document.getElementById('close-popup');
const hireForm = document.getElementById('hire-form');

// Open popup
hireBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close when clicking outside form
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Simulate form submission
hireForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
  popup.style.display = 'none';
  hireForm.reset();
});
