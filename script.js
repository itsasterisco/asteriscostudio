const botoesBio = document.querySelectorAll('.bio-toggle');

botoesBio.forEach(botao => {
    botao.addEventListener('change', function() {
        if (this.checked) {
            botoesBio.forEach(outroBotao => {
                if (outroBotao !== this) {
                    outroBotao.checked = false;
                }
            });
        }
    });
});