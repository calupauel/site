const overlay = document.createElement('div');
overlay.id = 'lightbox';
overlay.innerHTML = `
  <div id="lightbox-inner">
    <img id="lightbox-img" src="" alt="">
    <button id="lightbox-fechar">&gt;fechar</button>
  </div>
`;
document.body.appendChild(overlay);

document.querySelectorAll('.ABRELIGTBOX').forEach(el => {
  el.addEventListener('click', () => {
    const img = el.tagName === 'IMG' ? el : el.querySelector('img');
    if (img) {
      document.getElementById('lightbox-img').src = img.src;;
      overlay.classList.add('ativo');
    }
  });
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.target.id === 'lightbox-fechar') {
    overlay.classList.remove('ativo');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') overlay.classList.remove('ativo');
});