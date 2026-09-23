const check = document.getElementById('tema-check');

// carrega preferência salva
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
  check.checked = true;
}

check.addEventListener('change', () => {
  if (check.checked) {
    document.body.classList.add('escuro');
    localStorage.setItem('tema', 'escuro');
  } else {
    document.body.classList.remove('escuro');
    localStorage.setItem('tema', 'claro');
  }
});