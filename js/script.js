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

    $('.second-city').on('click', function(e){
        e.preventDefault();
        secondCityModal();
    });

    $('.new-media-institute').on('click', function(e){
        e.preventDefault();
        newMediaModal();
    });

    $('.chicago-filmmakers').on('click', function(e){
        e.preventDefault();
        chicagoFilmmakersModal();
    });

    $('.phonetic-classic').on('click', function(e){
        e.preventDefault();
        phoneticModal();
    });

    $('.monsters-are-people').on('click', function(e){
        e.preventDefault();
        monstersModal();
    });

    $('.ahs-characters').on('click', function(e){
        e.preventDefault();
        ahsModal();
    });

    $('.wfc-group').on('click', function(e){
        e.preventDefault();
        wfcModal();
    });

    $('.easter-seals').on('click', function(e){
        e.preventDefault();
        easterSealsModal();
    });

    $('#project-modal').on('click', '.close', function(){
        $('#project-modal').removeClass('display');
        $('body').removeClass('modal-open');
        setTimeout(function(){
            $('#project-modal').css({'z-index':'-1', 'display':'none'});
        },300);
        /* ^ Could the above setTimeout be our missing link for the fade-in? */
    });

    // AJAX Project Objects

    function secondCityModal(){
        var secondCity_xhr = new XMLHttpRequest();
        secondCity_xhr.onreadystatechange = function () {
            if (secondCity_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = secondCity_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
                // $('body').addClass('modal-open').removeClass('mobile-z');
            }
        };
        secondCity_xhr.open('GET', 'projects/project-second-city.html');
        secondCity_xhr.send();
    }

    function newMediaModal(){
        var newMedia_xhr = new XMLHttpRequest();
        newMedia_xhr.onreadystatechange = function () {
            if (newMedia_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = newMedia_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        newMedia_xhr.open('GET', 'projects/project-nmi.html');
        newMedia_xhr.send();
    }

    function chicagoFilmmakersModal(){
        var chicagoFilmmakers_xhr = new XMLHttpRequest();
        chicagoFilmmakers_xhr.onreadystatechange = function () {
            if (chicagoFilmmakers_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = chicagoFilmmakers_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        chicagoFilmmakers_xhr.open('GET', 'projects/project-chicago-filmmakers.html');
        chicagoFilmmakers_xhr.send();
    }

    function phoneticModal(){
        var phonetic_xhr = new XMLHttpRequest();
        phonetic_xhr.onreadystatechange = function () {
            if (phonetic_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = phonetic_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        phonetic_xhr.open('GET', 'projects/project-phonetic.html');
        phonetic_xhr.send();
    }

    function monstersModal(){
        var monsters_xhr = new XMLHttpRequest();
        monsters_xhr.onreadystatechange = function () {
            if (monsters_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = monsters_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        monsters_xhr.open('GET', 'projects/project-monsters.html');
        monsters_xhr.send();
    }

    function ahsModal(){
        var ahs_xhr = new XMLHttpRequest();
        ahs_xhr.onreadystatechange = function () {
            if (ahs_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = ahs_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        ahs_xhr.open('GET', 'projects/project-ahs.html');
        ahs_xhr.send();
    }

    function wfcModal(){
        var wfc_xhr = new XMLHttpRequest();
        wfc_xhr.onreadystatechange = function () {
            if (wfc_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = wfc_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        wfc_xhr.open('GET', 'projects/project-wfc.html');
        wfc_xhr.send();
    }

    function easterSealsModal(){
        var easterSeals_xhr = new XMLHttpRequest();
        easterSeals_xhr.onreadystatechange = function () {
            if (easterSeals_xhr.readyState === 4) {
                document.getElementById('project-modal').innerHTML = easterSeals_xhr.responseText;
                $('#project-modal').css({'z-index':'2', 'display':'block'}).addClass('display');
                $('body').addClass('modal-open');
            }
        };
        easterSeals_xhr.open('GET', 'projects/project-easter-seals.html');
        easterSeals_xhr.send();
    }

    // Scrollorama

    var scrollorama = $.scrollorama({ blocks:'.scrollblock', enablePin:false });

    // This if statement will not reload the script if resized from mobile to desktop after load. This is acceptable now, but look for another solution
    // Perhaps reading the window size upon a resize is an acceptable, if inefficient, answer

    scrollorama.animate("#rect-float-1",{ duration: 1000, delay: -100, property:"top", end: 60 });
    scrollorama.animate("#rect-float-2",{ duration: 200, delay: -100, property:"top", end: 0 });

    if (window.matchMedia("only screen and (min-width: 23em)").matches) {

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

    // scrollorama.animate("#websites-apps-circle",{ duration: 300, delay: 625, property:"top", end: 297, easing: "easeOutQuad" });
    // scrollorama.animate("#websites-apps-circle",{ duration: 300, delay: 625, property:"left", end: 92, easing: "easeOutQuad" });


    scrollorama.animate("#scripting-circle",{ duration: 300, delay: 900, property:"top", start: 145, end: 1, easing: "easeOutQuad" });
    scrollorama.animate("#scripting-circle",{ duration: 300, delay: 900, property:"left", start: 62, end: 168, easing: "easeOutQuad" });

    scrollorama.animate("#storyboard-circle",{ duration: 300, delay: 950, property:"top", end: 98, easing: "easeOutQuad" });
    scrollorama.animate("#storyboard-circle",{ duration: 300, delay: 950, property:"left", end: 234, easing: "easeOutQuad" });

    scrollorama.animate("#animation-circle",{ duration: 300, delay: 1000, property:"top", end: 211, easing: "easeOutQuad" });
    scrollorama.animate("#animation-circle",{ duration: 300, delay: 1000, property:"left", end: 228, easing: "easeOutQuad" });

    }

});