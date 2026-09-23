const itensPorPagina = 5;
let paginaAtual = 1;

function paginar() {
    const itensVisiveis = [...document.querySelectorAll('.ITEM')]
        .filter(item => item.style.display !== 'none');

    const totalPaginas = Math.ceil(itensVisiveis.length / itensPorPagina);

    // esconde todos
    itensVisiveis.forEach(item => item.style.visibility = 'hidden');

    // mostra só os da página atual
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    itensVisiveis.slice(inicio, fim).forEach(item => item.style.visibility = 'visible');

    // atualiza os números
    const pagNums = document.getElementById('pagNums');
    pagNums.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.className = 'pag-num' + (i === paginaAtual ? ' ativo' : '');
        btn.innerText = '>' + i;
        btn.addEventListener('click', () => {
            paginaAtual = i;
            paginar();
        });
        pagNums.appendChild(btn);
    }

    // botões anterior e próximo
    document.getElementById('anterior').disabled = paginaAtual === 1;
    document.getElementById('proximo').disabled = paginaAtual === totalPaginas;
}

document.getElementById('anterior').addEventListener('click', () => {
    if (paginaAtual > 1) {
        paginaAtual--;
        paginar();
    }
});

document.getElementById('proximo').addEventListener('click', () => {
    const itensVisiveis = [...document.querySelectorAll('.ITEM')]
        .filter(item => item.style.display !== 'none');
    const totalPaginas = Math.ceil(itensVisiveis.length / itensPorPagina);

    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        paginar();
    }
});

// inicializa
paginar();