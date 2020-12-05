$(document).ready(function () {
    $('.sidenav').sidenav();    // initializing a sidenav
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({       // initiaizing a slider
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });      
    $('input.autocomplete').autocomplete({    //initializong autocomplete
        data: {
          "@gmail": null,
          ".com": null,
          "@icloud": null,
          "@yahoo": null,
          
        },
      });
    $('.scrollspy').scrollSpy();
    
});