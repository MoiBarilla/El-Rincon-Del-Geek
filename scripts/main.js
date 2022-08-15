/******************************** LAS CARDS DE LOS TESTIMONIOS; ANIMADAS CON JQUERY *******************/

$(document).ready(function() {
    //DATOS DE LAS CARDS DE LOS TESTIMONIOS PARA DARLES UN DISPLAY NONE CON JQUERY.

    $(info1).hide(info1);


    $(info2).hide(info2);


    $(info3).hide(info3);

    //BOTONES PARA MOSTAR Y OCULTAR USUARIOS
    $("#infoToggle1").click(function() {
        $(info1).toggle(info1);

    });

    $("#infoToggle2").click(function() {
        $(info2).toggle(info2);

    });

    $("#infoToggle3").click(function() {
        $(info3).toggle(info3);

    });
});

//SCROLL REVEAL ANIMATIONS
window.sr = ScrollReveal();
sr.reveal(".logo", {
    scale: 0.3,
    duration: 5000
});

sr.reveal('.rounded', {
    duration: 3000,
    origin: 'bottom'
});

sr.reveal('.direccion', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.mapscroll', {
    duration: 5000,
    origin: 'top',
    distance: '300px'
});