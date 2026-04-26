/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 10,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 10,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});

	$('.marquee-right2').marquee({
		gap: 0,
		speed: 30,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});

	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			CustomEase.create("ease1", ".645,.045,.355,1");

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				
			}, 700);
		})		
	});
	


	if ($('.nxr-hero-card-slider').length > 0 ) {
		const slider = new Swiper('.nxr-hero-card-slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			speed: 1000,
			effect: "creative",
			creativeEffect: {
				prev: {
					shadow: true,
					translate: ["-20%", 0, -1],
					rotate: [0, 0, -5],
					scale: 0.9,
					opacity: 0,
				},
				next: {
					translate: ["100%", 0, 0],
					scale: 1.1,
					opacity: 0,
				},
			},
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".nxr-hero-pagi",
				clickable: true,

				renderBullet: function (index, className) {
					return `
					<span class="${className}">
						<span class="bullet-progress"></span>
					</span>
					`;
				},
			},
			on: {
				autoplayTimeLeft(s, time, progress) {

					let bullets = document.querySelectorAll(
						'.swiper-pagination-bullet .bullet-progress'
						);
					bullets.forEach((el) => {
						el.style.transform = `scaleX(0)`;
					});
					let active = document.querySelector(
						'.swiper-pagination-bullet-active .bullet-progress'
						);
					if(active) {
						active.style.transform = `scaleX(${1 - progress})`;
					}
				},
			},
		});
	}

	var swiper = new Swiper(".nxr-service-card-wrapper", {
		effect: "cards",
		grabCursor: true,

		cardsEffect: {
			perSlideOffset: 10,
			perSlideRotate: 5, 
			rotate: true,
			slideShadows: false,
		}
	});



})(jQuery);