$(document).ready(function(){

    //menu
    $('.btn-menu').click(function(){
        $('.main-nav').find('ul li').each(function(){
            if($(this).find('ul>li').lenght > 0){
                $(this).prepend('<i class="fa fa-angle-down"></i>')
            }
        });
        if($('.main-nav>ul').is(":hidden")){
            $(this).addClass('active');
            $('.main-nav>ul').slideDown(300);
        }
        else{
            $('.main-nav>ul').slideUp(300);
            $(this).removeClass('active');
        }
    });
    $('.main-nav').find('li i').click(function () {
        var ul = $(this).nextAll("ul");
        if (ul.is(":hidden") == true) {
            $(this).addClass('active');
            $(this).removeClass('fa fa-angle-down');
            ul.slideDown(300);
        }
        else {            
            $(this).addClass('fa fa-angle-down');
            $(this).removeClass('active');
            $(this).removeClass('fa fa-angle-up');
            ul.slideUp(300);
        }
    });
    $(window).click(function(e){
        if($(window).width() < 992 && $('.main-nav').has(e.target).length == 0 && !$('.main-nav').is(e.target)){
            $('.main-nav').find('ul').slideUp(300);
            $('.main-nav').find('li>i').removeClass('active');
            $('.main-nav').find('.btn-menu').removeClass('active');
        }
    });

    //search
    $('.btn-search').click(function(event){
        event.stopPropagation();
        if($('.form-search').is(":hidden")){
           $('.form-search').css('display', 'block');
        }
        else{
           $('.form-search').css('display', 'none');
        }
    });
    $('#search').click(function(event){
        event.stopPropagation();
    });
    $(window).click(function(event){
        if($('.form-search').is(":visible")){
            $('.form-search').css('display', 'none');
        }
    });

    // fixed hidden
    $(window).scroll(function(){
        var zzz = $('.information').height();
        if($(window).scrollTop() > zzz){
            $('.main-menu').addClass('scroll-top');
        }
        else if($('.information').is(":hidden")){
            $('.main-menu').addClass('scroll-top');
        }
        else{
            $('.main-menu').removeClass('scroll-top');
        }
    });

    //video-iframe
    var iframe_1 = "<iframe width='560' height='315' src='";
    var iframe_2 = "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    $('.clicked').click(function(){
        var video = $(this).attr('data-video');
        var iframe = iframe_1 + video + iframe_2;
        $(this).attr('href', iframe);
    });


    //slide
    $('.slider-educate').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-chevron-left" title="Prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right" title="Next"></i>',
    });


    $('.slider-steps').slick({
        dots: false,
        infinite: false,
        speed: 1000,
        arrows: false,
        autoplay: false,
        slidesToShow: 2,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-teacher, .slider-parent, .slider-course').slick({
        dots: false,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.slider-events').slick({
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-down" title="Next"></i>',
        prevArrow: '<i class="fa fa-angle-up" title="Prev"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var GUI = {};
    GUI.win = $(window);
    GUI.initFancy = function (){
        if($('.fancy').length == 0) return;
        $('.fancy').fancybox({
            width: 1200,
            height: 600
        });
    }
    GUI.init= function (){
        GUI.initFancy();
    }
    $(function() {
        GUI.init();
    });
    
    var modal = document.getElementById("info-box");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function(){
        modal.style.display = "block";
    }
    span.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }


    if($(window).width() > 991){
        if($('.wow').length){
            new WOW().init();
        }
    }

    $(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$('.back-to-top').css('display', 'block');
		}
		else {
			$('.back-to-top').css('display', 'none');
		}
	});
	$('.back-to-top').click(function (event) {
		$("html,body").animate({ scrollTop: 0 }, 800);
		return false;
	});

});
