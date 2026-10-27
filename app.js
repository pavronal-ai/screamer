  const boton = document.getElementById('miBoton');
  const screamer = document.getElementById('screamerContenedor');
  const sonido = document.getElementById('sonidoSusto');

  boton.addEventListener('click', () => {
    // 1. El botón se vuelve blanco de inmediato para generar confusión
    boton.classList.add('clicado');

    // 2. Espera 1 segundo (1000ms) y suelta el screamer
    setTimeout(() => {
      // Muestra la imagen a pantalla completa
      screamer.classList.add('activado');
      
      // Reproduce el sonido de susto a máximo volumen
      sonido.volume = 1.0; 
      sonidoplay().catch(error => {
        console.log("El navegador bloqueó el audio automático, pero la imagen se mostró.");
      });
    }, 1000);
  });