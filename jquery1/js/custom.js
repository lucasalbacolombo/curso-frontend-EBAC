$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-dark stretch-link');

     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })

     $(document).ready(function(){
        $('#phone').mask('(00) 00000-0000');
        $('#cpf').mask('000.000.000-00', {reverse: true});
    });

})

function alerta() {
    alert("Produto Esgotado")
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})