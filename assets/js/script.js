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

	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
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


					$(document).ready(function() {
						var st = $(".tx-split-text");
						if(st.length == 0) return;
						gsap.registerPlugin(SplitText);
						st.each(function(index, el) {
							el.split = new SplitText(el, { 
								type: "lines,words,chars",
								linesClass: "split-line"
							});
							gsap.set(el, { perspective: 400 });

							if( $(el).hasClass('split-in-right') ){
								gsap.set(el.split.chars, {
									scale: 0,
									opacity: 0,
									rotation: 90,
									ease: "elastic.in(1,0.3)",
								});
							}
							el.anim = gsap.to(el.split.chars, {
								scrollTrigger: {
									trigger: el,
									start: "top 90%",
								},
								x: "0",
								y: "0",
								rotateX: "0",
								rotation: 0,
								rotationX: "0",
								color: 'inherit',
								webkitTextStroke: "0px white",
								scale: 1,
								opacity: 1,
								duration: 0.4, 
								stagger: 0.02,
							});
						});
					});

					const NXRHEO = gsap.timeline();
					NXRHEO
					.from(".nxr-btn-grp", { x: 200, opacity: 0, duration: 1, transformOrigin: "top",  ease: "power1.out" })
					.from(".nxr-hr-desc", { x: 100, opacity: 0, duration: 1, transformOrigin: "top",  ease: "power1.out" },"< = .5")
					.from(".nxr-hero-card-wrapper", { x: 200, opacity: 0, duration: 1, transformOrigin: "top",  ease: "power1.out" },"< = .5")
					.from(".nxr-hero-content .nxr-hero-img2", { xPercent: -20, opacity: 0, duration: 1.5, transformOrigin: "top",  ease: "power1.out" },"< =")

				}, 1000 ) ;

			}
			setTimeout(function() {
				afterPageLoad();
			}, 700);
		})		
	});
	
	function afterPageLoad() {


		if (window.matchMedia("(min-width: 1200px)").matches) { 


			if ($("#nx_hero_anim").length) {

				const nxWrap = document.getElementById("nx_hero_anim");
				const nXimg = nxWrap.querySelector("img");
				const waImageURL = nXimg.getAttribute("src");
				nXimg.remove();

				const { width: nxWidth, height: nxHeight } = nxWrap.getBoundingClientRect();

				const nxUP = new PIXI.Application({
					width: nxWidth,
					height: nxHeight,
					transparent: true,
					autoDensity: true,
					resolution: window.devicePixelRatio,
				});
				nxUP.view.style.pointerEvents = "none";

				nxWrap.appendChild(nxUP.view);

				const nxDispl = "assets/img/hero/h1-bg-noise-1.gif";

				nxUP.loader
				.add("nxHero", waImageURL)
				.add("nxDIP", nxDispl)
				.load((waLoader, nxResourse) => {
					const nxCountain = new PIXI.Container();
					nxUP.stage.addChild(nxCountain);

					const nxHero = new PIXI.Sprite(nxResourse.nxHero.texture);
					nxCountain.addChild(nxHero);

					const nxTexture = nxHero.texture.width / nxHero.texture.height;
					const nxCountainRatio = nxWidth / nxHeight;

					if (nxCountainRatio > nxTexture) {
						nxHero.width = nxWidth;
						nxHero.height = nxWidth / nxTexture;
					} else {
						nxHero.height = nxHeight;
						nxHero.width = nxHeight * nxTexture;
					}

					nxHero.x = (nxWidth - nxHero.width) / 2;
					nxHero.y = (nxHeight - nxHero.height) / 2;

					const nxDispri = new PIXI.Sprite(nxResourse.nxDIP.texture);
					nxDispri.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
					const nxDfilter = new PIXI.filters.DisplacementFilter(nxDispri);
					nxDispri.scale.set(2);
					nxUP.stage.addChild(nxDispri);
					nxCountain.filters = [nxDfilter];

					function waPlayDistortionIn() {
						gsap.fromTo(nxDfilter.scale,
							{ x: 220, y: 220 },
							{ x: 0, y: 0, duration: 2,  ease: "power1.out", }
							);
					}
					waPlayDistortionIn();

					nxUP.ticker.add(() => {
						nxDispri.x += 1;
						nxDispri.y += 1;
					});
				});
			}
		}

		gsap.utils.toArray(".nx-text p").forEach(paragraph => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: paragraph,
					start: "top 90%",
					end: "bottom 60%",
					toggleActions: "play none none none"
				}
			});
			let splitText = new SplitText(paragraph, { type: "lines" });
			gsap.set(paragraph, { perspective: 400 });
			timeline.from(splitText.lines, {
				opacity: 0,
				y: 20,
				transformOrigin: "top center -50",
				force3D: true,
				duration: 1,
				delay: 0.5,
				stagger: 0.1
			});
		});

	}

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


	if (window.matchMedia("(min-width: 1600px)").matches) { 
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


	const buttons = document.querySelectorAll(".nxr-btn1 a span, .nxr-btn2 a, .nxr-btn1 button span ");
	buttons.forEach(btn => {
		const split = new SplitText(btn, { type: "chars" });
		gsap.set(split.chars, {
			y: 0,
			opacity: 1
		});
		btn.addEventListener("mouseenter", () => {
			split.chars.forEach((char, index) => {
				if (index % 2 === 0) {

					gsap.fromTo(
						char,
						{
							x: -20,
							y: 20,
							rotate: 180,
							opacity: 0,
							scale: 0.5
						},
						{
							x: 0,
							y: 0,
							rotate: 0,
							opacity: 1,
							scale: 1,
							duration: 0.5,
							delay: index * 0.03,
							ease: "back.out(2)"
						}
						);

				}
				else {

					gsap.fromTo(
						char,
						{
							x: 20,
							y: -20,
							rotate: -180,
							opacity: 0,
							scale: 1.5
						},
						{
							x: 0,
							y: 0,
							rotate: 0,
							opacity: 1,
							scale: 1,
							duration: 0.5,
							delay: index * 0.03,
							ease: "power3.out"
						}
						);

				}

			});

		});

	});


	$(document).ready(function() {
		var st = $(".nxr-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('split-in-right') ){
				gsap.set(el.split.chars, {
					scale: 0,
					opacity: 0,
					rotationY: 90,
					ease: "elastic.in(1,0.3)",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				rotation: 0,
				rotationY: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 0.4, 
				stagger: 0.02,
			});
		});
	});


	gsap.utils.toArray(' .left_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, x: "300"})
	});

	gsap.utils.toArray(' .left_view2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, x: "-300"})
	});
	gsap.utils.toArray(' .left_view3').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, opacity: 0, x: "-50"})
	});

	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "300"})
	});
	gsap.utils.toArray(' .top_view2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "100"})
	});

	gsap.utils.toArray(' .nxr-portfolio-top .nxr-port-year .mdl-img').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 80%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  opacity: 0, width: 0})
	});


	var AXFT = gsap.timeline({
		scrollTrigger: {
			trigger: ".nxr-about-card-wrap",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXFT
	.from(".nxr-ab-card", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})


	var AXC = gsap.timeline({
		scrollTrigger: {
			trigger: ".nxr-service-content",
			start: "top 30%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC
	.from(".nxr-ser-ratting .nxr-ser-rate-top li", {
		yPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var TVCONT = gsap.timeline({
			scrollTrigger: {
				trigger: '.nxr-team-text-wrap',
				start: "top 40%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		TVCONT
		.from(".nxr-team-title .middle-line .img-wrapper .item-img:nth-child(3)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "elastic.out(1,0.7)" })
		.from(".nxr-team-title .middle-line .img-wrapper .item-img:nth-child(2)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")
		.from(".nxr-team-title .middle-line .img-wrapper .item-img:nth-child(1)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")
		.from(".nxr-team-title .last-line .img-pair-1 .item-img:nth-child(1)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")
		.from(".nxr-team-title .last-line .img-pair-1 .item-img:nth-child(2)", { opacity: 0,  xPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")

	};

	$('.ax_item_active').on('mouseover', function () {
		var $group = $(this).closest('[data-nx-group]');
		$group.find('.ax_item_active').removeClass('active');
		$(this).addClass('active');
	});

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var NXCN = gsap.timeline({
			scrollTrigger: {
				trigger: '.nxr-contact-cta-wrap',
				start: "top 40%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		NXCN
		.from(".nxr-cnt-img-wrap .nxr-cn-reel-marquee .item-img:nth-child(1)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "power1.out" })
		.from(".nxr-cnt-img-wrap .nxr-cn-reel-marquee .item-img:nth-child(2)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "power1.out" },"<= .3")
		.from(".nxr-cnt-img-wrap .nxr-cn-reel-marquee .item-img:nth-child(3)", { opacity: 0,  xPercent: -100, duration: 2,   ease: "power1.out" },"<= .3")
		

	};



})(jQuery);