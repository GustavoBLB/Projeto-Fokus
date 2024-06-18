
    // Script adicional para mostrar/esconder a seção do PIX
    var btn = document.querySelector('.enviar-mostrar');
    var FormP = document.querySelector('.form_pix');

    btn.addEventListener('click', function() {

        event.preventDefault();

        var style = window.getComputedStyle(FormP);

        if (style.display === 'none') {
            FormP.style.display = 'flex';
        }
    });
