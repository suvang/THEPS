$(document).ready(function() {

$('#slides').superslides({
	animation: 'fade',
	play: 3000,
	pagination: false
});

var typed = new Typed(".typed", {
	strings: ["MUSIC ARTIST.", "PURU.", "CHICAGO.", "SOUND PRODUCER."],
	typeSpeed: 80,
	loop: true,
	startDelay: 1000,
	showCursor: false
});


       $('.owl-carousel').owlCarousel({
       	
        items:10,
        
        loop:true,
        margin:20,
        video:true,
        
        
        
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });



      

    var skillsTopOffset = $(".skillsection").offset().top;

    $(window).scroll(function() {

      if(window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
            
               $('.chart').easyPieChart({
            easing: 'easeInOut' ,
            barColor: '#e84118',
            trackColor: true,
            scaleColor: true,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }

    });

     }
 
    });


});