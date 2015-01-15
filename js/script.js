$(function(){

    // Addressing 300ms delay on mobile browsers
	// window.addEventListener('load', function() {
	//     FastClick.attach(document.body);
	// }, false);

	var pull = $('#pull');  
    var menu = $('ul.nav');

    $(pull).on('click',function(e){
    	e.preventDefault();
    	menu.slideToggle(300,'swing');
    	$('nav').toggleClass('expanded');
    	$('nav ul').toggleClass('expanded');
        if ($('nav ul').hasClass('expanded')) {
            this.innerHTML('close');
        }
    }); 

    $(window).resize(function(){
        viewportWidth = $(window).width();
        if (viewportWidth > 592) {
            $('nav ul').show();
        }
    });

    // Project Calls

    $('.project').on('click', function(e){
        e.preventDefault();
        phoneticModal();
    });

    $('#project-modal').on('click', '.close', function(){
        $('#project-modal').removeClass('display');
        setTimeout(function(){
            $('#project-modal').css('z-index','-1');
        },300);
    });

    // AJAX Project Objects

    function phoneticModal(){
        var phonetic_xhr = new XMLHttpRequest();
        phonetic_xhr.onreadystatechange = function () {
            if (phonetic_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = phonetic_xhr.responseText;
                $('#project-modal').css('z-index','2').addClass('display');
            }
        };
        phonetic_xhr.open('GET', 'projects/project-nmi.html');
        phonetic_xhr.send();
    }

    // Scrollorama

    var scrollorama = $.scrollorama({ blocks:'.scrollblock', enablePin:false });

    // This if statement will not reload the script if resized from mobile to desktop after load. This is acceptable now, but look for another solution
    // Perhaps reading the window size upon a resize is an acceptable, if inefficient, answer

    scrollorama.animate("#rect-float-1",{ duration: 200, delay: -100, property:"top", end: 60 });

    if (window.matchMedia("only screen and (min-width: 23em)").matches) {

    // scrollorama.animate("#fractal-shapes-1",{ duration: windowHeight, property:"top", end: 68 });
    // scrollorama.animate("#fractal-shapes-1",{ duration: windowHeight, property:"left", end: -80 });

    scrollorama.animate("#logos-circle",{ duration: 300, delay: 100, property:"top", end: 1, easing: "easeOutQuad" });
    scrollorama.animate("#logos-circle",{ duration: 300, delay: 100, property:"left", end: 168, easing: "easeOutQuad" });

    scrollorama.animate("#brand-strategy-circle",{ duration: 300, delay: 150, property:"top", end: 98, easing: "easeOutQuad" });
    scrollorama.animate("#brand-strategy-circle",{ duration: 300, delay: 150, property:"left", end: 234, easing: "easeOutQuad" });

    scrollorama.animate("#copy-circle",{ duration: 300, delay: 200, property:"top", end: 211, easing: "easeOutQuad" });
    scrollorama.animate("#copy-circle",{ duration: 300, delay: 200, property:"left", end: 228, easing: "easeOutQuad" });

    
    scrollorama.animate("#ia-circle",{ duration: 300, delay: 475, property:"top", end: 1, easing: "easeOutQuad" });
    scrollorama.animate("#ia-circle",{ duration: 300, delay: 475, property:"left", end: 70, easing: "easeOutQuad" });

    scrollorama.animate("#ux-circle",{ duration: 300, delay: 525, property:"top", end: 98, easing: "easeOutQuad" });
    scrollorama.animate("#ux-circle",{ duration: 300, delay: 525, property:"left", end: 4, easing: "easeOutQuad" });

    scrollorama.animate("#responsive-circle",{ duration: 300, delay: 575, property:"top", end: 211, easing: "easeOutQuad" });
    scrollorama.animate("#responsive-circle",{ duration: 300, delay: 575, property:"left", end: 10, easing: "easeOutQuad" });

    scrollorama.animate("#websites-apps-circle",{ duration: 300, delay: 625, property:"top", end: 297, easing: "easeOutQuad" });
    scrollorama.animate("#websites-apps-circle",{ duration: 300, delay: 625, property:"left", end: 92, easing: "easeOutQuad" });


    scrollorama.animate("#scripting-circle",{ duration: 300, delay: 900, property:"top", start: 145, end: 1, easing: "easeOutQuad" });
    scrollorama.animate("#scripting-circle",{ duration: 300, delay: 900, property:"left", start: 62, end: 168, easing: "easeOutQuad" });

    scrollorama.animate("#storyboard-circle",{ duration: 300, delay: 950, property:"top", end: 98, easing: "easeOutQuad" });
    scrollorama.animate("#storyboard-circle",{ duration: 300, delay: 950, property:"left", end: 234, easing: "easeOutQuad" });

    scrollorama.animate("#animation-circle",{ duration: 300, delay: 1000, property:"top", end: 211, easing: "easeOutQuad" });
    scrollorama.animate("#animation-circle",{ duration: 300, delay: 1000, property:"left", end: 228, easing: "easeOutQuad" });

    }

});