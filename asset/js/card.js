$('.owl-carousel').owlCarousel({
    loop:false,
    stagePadding: 25,
    margin:10,
    loop:true,
    nav:true,
    navText: ["<img src='https://i.imgur.com/IgMqAjA.png'>","<img src='https://i.imgur.com/LdPGTL9.png'>"],
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
      960:{
            items:3
        },
        1200:{
            items:3
        }
    }
})