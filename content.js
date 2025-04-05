(function () {
    // Previene múltiples inyecciones
    if (document.getElementById('forzar-light-mode-style')) return;
  
    const style = document.createElement('style');
    style.id = 'forzar-light-mode-style';
    style.textContent = `
      html, body {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
  
      * {
        background-color: transparent !important;
        color: #000000 !important;
        border-color: #666 !important;
        text-shadow: none !important;
        box-shadow: none !important;
      }
  
      img, video {
        filter: brightness(1) !important;
      }
  
      ::selection {
        background: #d0d0d0 !important;
        color: #000000 !important;
      }
    `;
    document.head.appendChild(style);
  })();  