function mostrarSecao(idSecao) {
    const secoes = document.querySelectorAll('.secao');

    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    document.getElementById(idSecao).style.display = 'block';
}
