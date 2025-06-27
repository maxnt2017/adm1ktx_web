// Бургер-меню
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}

// Активний пункт меню
const setActiveMenu = () => {
  const path = window.location.pathname.split('/').pop() || "index.html";
  document.querySelectorAll('#menu a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
setActiveMenu();

// Модальне вікно зворотнього звʼязку
const feedbackBtn = document.getElementById('feedbackBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const fbForm = document.getElementById('feedbackForm');
const fbSuccess = document.getElementById('fb-success');

if (feedbackBtn && modal && closeModal && fbForm && fbSuccess) {
  feedbackBtn.onclick = () => { modal.style.display = 'flex'; }
  closeModal.onclick = () => { modal.style.display = 'none'; }
  window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; }
  fbForm.onsubmit = e => {
    e.preventDefault();
    fbForm.style.display = 'none';
    fbSuccess.classList.remove('hidden');
    setTimeout(() => {
      modal.style.display = 'none';
      fbForm.reset();
      fbForm.style.display = 'flex';
      fbSuccess.classList.add('hidden');
    }, 1800);
  }
}

// Перемикач теми
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const setTheme = (dark) => {
  if (dark) {
    document.body.classList.add('dark');
    themeToggle.textContent = "☀️";
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    themeToggle.textContent = "🌙";
    localStorage.setItem('theme', 'light');
  }
};
// Початкове встановлення теми
const userTheme = localStorage.getItem('theme');
if (userTheme === 'dark' || (!userTheme && prefersDark)) setTheme(true);
else setTheme(false);

if (themeToggle) {
  themeToggle.onclick = () => setTheme(!document.body.classList.contains('dark'));
}
