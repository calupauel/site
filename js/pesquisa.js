const campo = document.getElementById('campoPesquisa');
const filtros = document.querySelectorAll('.filtro');
const itens = document.querySelectorAll('.ITEM');

let anoAtivo = 'todos';

campo.addEventListener('input', () => {
  filtrar();
});

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    anoAtivo = btn.dataset.filtro;
    filtrar();
  });
});

function filtrar() {
  const busca = campo.value.toLowerCase();

  itens.forEach(item => {
    const texto = item.innerText.toLowerCase();
    const ano = item.dataset.ano;

    const bateuTexto = texto.includes(busca);
    const bateuAno = anoAtivo === 'todos' || ano === anoAtivo;

    if (bateuTexto && bateuAno) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  paginaAtual = 1;
  paginar();
}