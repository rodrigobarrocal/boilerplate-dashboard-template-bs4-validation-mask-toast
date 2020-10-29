(function ($) {
	"use strict";

	var activeNavLinks = function () {
		var navlink = $("#" + activenav);
		var menulink = navlink.closest(".collapse");
		if (menulink.length > 0) {
			menulink.addClass("show ");
		}
		navlink.addClass("active");
	};

	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	activeNavLinks();

	// var sidebarToggled = false;
	// if (localStorage.getItem('sidebarToggled')) {
	// 	sidebarToggled = localStorage.getItem('sidebarToggled');
	// 	console.log("JS: ---------------------------------------------------------------------------------")
	// 	console.log("JS: localStorage.getItem('sidebarToggled')", localStorage.getItem('sidebarToggled'))
	// 	console.log("JS: ---------------------------------------------------------------------------------")
	// } else {
	// 	localStorage.setItem('sidebarToggled', sidebarToggled);
	// }
	// console.log("JS: ---------------------------------")
	// console.log("JS: sidebarToggled", sidebarToggled)
	// console.log("JS: ---------------------------------")

	// if (sidebarToggled === true) {
	// 	$("body").toggleClass("sidebar-toggled");
	// 	$(".sidebar").toggleClass("toggled");
	// 	if ($(".sidebar").hasClass("toggled")) {
	// 		$('.sidebar .collapse').collapse('hide');
	// 	};
	// }

	// Toggle the side navigation
	$("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
		$("body").toggleClass("sidebar-toggled");
		$(this).toggleClass("is-active");
		$(".sidebar").toggleClass("toggled");
		if ($(".sidebar").hasClass("toggled")) {
			$(".sidebar .collapse").collapse("hide");
		} else {
			// activeNavLinks();
		}
	});

	// Close any open menu accordions when window is resized below 768px
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$(".sidebar .collapse").collapse("hide");
		}
	});

	// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
	$("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
		if ($(window).width() > 768) {
			var e0 = e.originalEvent,
				delta = e0.wheelDelta || -e0.detail;
			this.scrollTop += (delta < 0 ? 1 : -1) * 30;
			e.preventDefault();
		}
	});

	// Scroll to top button appear
	$(document).on("scroll", function () {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$(".scroll-to-top").fadeIn();
		} else {
			$(".scroll-to-top").fadeOut();
		}
	});

	// Smooth scrolling using jQuery easing
	$(document).on("click", "a.scroll-to-top", function (e) {
		var $anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr("href")).offset().top,
				},
				1000,
				"easeInOutExpo"
			);
		e.preventDefault();
	});

	//
	toastr.options = {
		closeButton: false,
		debug: false,
		newestOnTop: false,
		progressBar: false,
		positionClass: "toast-top-center",
		preventDuplicates: false,
		onclick: null,
		showDuration: "500",
		hideDuration: "500",
		timeOut: "7500",
		extendedTimeOut: "2500",
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};
})(jQuery);
