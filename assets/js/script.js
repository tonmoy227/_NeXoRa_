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
	$('.marquee-left2').marquee({
		gap: 0,
		speed: 40,
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

	$('.marquee-right3').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right4').marquee({
		gap: 0,
		speed: 40,
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
	if (window.matchMedia("(min-width: 1600px)").matches) {
		const listItems = document.querySelectorAll(".nxr-service-list-wrap li");
		const cards = Array.from(document.querySelectorAll(".nxr-ser-card-item"));

		listItems.forEach((li, index) => {
			li.addEventListener("click", () => {


				listItems.forEach(el => el.classList.remove("active"));
				li.classList.add("active");


				const reordered = [
					...cards.slice(index),
					...cards.slice(0, index)
				];


				cards.forEach(card => {
					card.classList.remove(
						"ver_1",
						"ver_2",
						"ver_3",
						"ver_4",
						"ver_5",
						"active"
						);
				});


				reordered.forEach((card, i) => {
					card.classList.add(`ver_${i + 1}`);


					if (i === 0) {
						card.classList.add("active");
					}
				});

			});
		});
	};

	if($(".bottom-text").length) {
		var aniTitle1 = $(".bottom-text");
		if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('bottom-text') ){
				gsap.set(el.split.chars, {
					yPercent: 200,
					opacity: 0,

				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play reverse play reverse",
					markers: false,

				},

				yPercent: 0,
				xPercent: 0,
				opacity: 1,
				duration: 3,
				stagger: .2,
				ease: "bounce.out",
			});

		});
	}


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		document.querySelectorAll('.nxr-portfolio-sec').forEach((section) => {
			let SecTitle = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 10%",
					end: "+=2000",
					scrub: 1,
					pin: false,
					pinSpacing: false,
					markers: false,
				}
			});

			SecTitle.to(section.querySelector('.nxr-port-big'), { y: 1500,   scale: 2, duration: 1, ease: "power2.out"});
		});
	}


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var nxWC2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.nxr-team-content-wrap',
				start: "top 0%",
				end: "bottom +=50",
				markers: false,
				scrub: 4,
			}

		});
		nxWC2
		.from(".nxr-team-text-wrap .subtitle", { y: 45, duration: .5,   ease: "power1.out" })
		.from(".nxr-team-title .line_1", { y: 45, duration: .5,   ease: "power1.out" },"<")
		.from(".nxr-team-title .line_2", {   x: -45, duration: .5,   ease: "power1.out" },"<")
		.from(".nxr-team-title .line_3", {   y: -45, duration: .5,   ease: "power1.out" },"<")
		.from(".nxr-team-feed-wrap", { height: 0, duration: 1,   ease: "power1.out" },"< = .1")
		.from(".nxr-team-item._3", { scale: 1.1,   ease: "power1.out" },"< = .5")
		.from(".nxr-team-item._2", { xPercent: 105,   ease: "power1.out" },"< = .1")
		.from(".nxr-team-item._4", { xPercent: -105,   ease: "power1.out" },"< =")
		.from(".nxr-team-item._1", { xPercent: 215,   ease: "power1.out" },"< = .1")
		.from(".nxr-team-item._5", { xPercent: -215,   ease: "power1.out" },"< = ")
	};

	var quick_view = new Swiper(".nxr-testi-thumb-slider", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 7,
		direction: "vertical",
		centeredSlides: true,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		slideToClickedSlide: true,

		navigation: {
			prevEl: ".views-button-prev",
			nextEl: ".views-button-next",
		},

		breakpoints: {
			1400: {
				slidesPerView: 7,
				direction: "vertical",
			},
			1200: {
				slidesPerView: 7,
				direction: "horizontal",
			},
			1024: {
				slidesPerView: 4,
				direction: "horizontal",
			},
			991: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			768: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			577: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			0: {
				slidesPerView: 3,
				direction: "horizontal",
			},
		},

		on: {
			slideChange: function () {

				$('.nxr-testi-thumb-slider .swiper-slide')
				.removeClass(
					'swiper-slide-nth-prev-2 swiper-slide-nth-next-2 swiper-slide-nth-prev-3 swiper-slide-nth-next-3'
					);
				let activeSlide = $(this.slides[this.activeIndex]);
				activeSlide.prev().prev().addClass('swiper-slide-nth-prev-2');
				activeSlide.next().next().addClass('swiper-slide-nth-next-2'); 
				activeSlide.prev().prev().prev().addClass('swiper-slide-nth-prev-3');
				activeSlide.next().next().next().addClass('swiper-slide-nth-next-3');
			},
		},
	});
	var swiper2 = new Swiper(".nxr-testimonial-slider", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,

		navigation: {
			prevEl: ".views-button-prev",
			nextEl: ".views-button-next",
		},

		thumbs: {
			swiper: quick_view,
		},
	});


	if (window.matchMedia("(min-width: 1200px)").matches) {
		gsap.to(".nxr-work-pro-title", {
			scrollTrigger: {
				trigger: ".nxr-work-process-sec",
				start: "top 0%", 
				end: "bottom bottom", 
				pin: ".nxr-work-pro-title", 
				pinSpacing: false,
				markers: false
			}
		});

		let proTitle = gsap.timeline({
			scrollTrigger: {
				trigger: ".nxr-work-process-sec",
				start: "top 0%", 
				end: "top -30%",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			},
		});

		proTitle.to(".nxr-work-pro-title .nxr-wrp-left-title", { xPercent: -85});
		proTitle.to(".nxr-work-pro-title .nxr-wrp-right-title", { xPercent: 85},"<");
	}

	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: 3,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -40,
			ease: "none",
		}).to(image, {
			yPercent: 40,
			ease: "none",
		}); 
	});


})(jQuery);