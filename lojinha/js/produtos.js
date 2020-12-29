$(function(){

    // Inicializa o Isotopo de mosaico do site deixa os produtos lado a lado
    $('#isotope').isotope({
        itemSelector : '.sortable'
    });

    // abre a imagem com um click
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        }
    });

})