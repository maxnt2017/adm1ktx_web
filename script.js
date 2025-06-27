// Бургер-меню
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}

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
