const modoBtn = document.getElementById('modo-btn');

modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modoBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
