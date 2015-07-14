/*

My Custom JS
============


$(function(){

	$('#alertMe').click(function(e){
		e.preventDefault();

		$('#successAlert').slideDown();
	});

	$('.carousel').carousel({
      interval: 1200
    });

    $('a.pop').click(function(e){
    	e.preventDefault();
    });

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();

    $('#expand').click(function(e){
        e.preventDefault();

        $(this).find('p').slideToggle();
    });



});