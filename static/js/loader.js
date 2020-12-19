$(document).ready(function () {
    $('.sidenav').sidenav();    // initializing a sidenav

    $('.parallax').parallax();   // initializing parallax
    


    $('.materialboxed').materialbox();  //initializing material boxed
    
    $('.fixed-action-btn').floatingActionButton();  //initializing action button
    
    $('.slider').slider({       // initiaizing a slider
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });      
    
    $('input.autocomplete').autocomplete({    //initializing autocomplete
        data: {
          "@gmail": null,
          ".com": null,
          "@icloud": null,
          "@yahoo": null,
          
        },
      });
    
      $('.scrollspy').scrollSpy();     //initializing a scroller
    
    
});










