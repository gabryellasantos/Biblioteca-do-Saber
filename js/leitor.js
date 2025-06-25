function limitarTexto(selector, limite) {
  document.querySelectorAll(selector).forEach(el => {
    const texto = el.textContent.trim();
    if (texto.length > limite) {
      el.textContent = texto.slice(0, limite) + '...';
    }
  });
}

// Uso:
limitarTexto('.card-title', 45);