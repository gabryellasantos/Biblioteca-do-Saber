function limitarTexto(selector, limite) {
  document.querySelectorAll(selector).forEach(el => {
    const texto = el.textContent.trim();
    if (texto.length > limite) {
      el.textContent = texto.slice(0, limite) + '...';
    }
  });
}

limitarTexto('.card-title', 45);

function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.style.display = 'none');

  document.getElementById(id).style.display = 'block';
}

