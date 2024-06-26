(function ($) {
	"use strict";

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($("#spinner").length > 0) {
				$("#spinner").removeClass("show");
			}
		}, 1);
	};
	spinner(0);

	document.querySelectorAll(".nav-pills a").forEach(function (element) {
		element.addEventListener("click", function (event) {
			event.preventDefault();
			var targetTab = document.querySelector(event.target.getAttribute("href"));
			var activeTab = document.querySelector(".tab-pane.active");
			if (activeTab) {
				activeTab.classList.remove("active", "show");
			}
			if (targetTab) {
				targetTab.classList.add("active", "show");
			}
		});
	});

	// Fixed Navbar
	$(window).scroll(function () {
		if ($(window).width() < 992) {
			if ($(this).scrollTop() > 55) {
				$(".fixed-top").addClass("shadow");
			} else {
				$(".fixed-top").removeClass("shadow");
			}
		} else {
			if ($(this).scrollTop() > 55) {
				$(".fixed-top").addClass("shadow").css("top", -55);
			} else {
				$(".fixed-top").removeClass("shadow").css("top", 0);
			}
		}
	});
	// Product Quantity
	$(".quantity button").on("click", function () {
		var button = $(this);
		var oldValue = button.parent().parent().find("input").val();
		if (button.hasClass("btn-plus")) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		button.parent().parent().find("input").val(newVal);
	});

	// Testimonials data
	var testimonials = [
		{
			image: "./img/review/Image1.jpg",
			name: "Akansha Ganguly",
			stars: 5,
			message:
				"Bhikhaaram Chandmal Rajuji ke samose aur kachori, wahi purani yaadon ko taaza kar dete hain! Must try!",
		},
		{
			image: "./img/review/Image-6.jpg",
			name: "Raj Chandak",
			stars: 4,
			message:
				"Bhikhaaram Chandmal Rajuji yani 100% swaad. Aisa swaad ko sabko jeet le",
		},
		{
			image: "./img/review/image2.jpg",
			name: "Muskan Patodia",
			stars: 5,
			message:
				"Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji",
		},
		{
			image: "./img/review/Image4.jpg",
			name: "Harsh Singh",
			stars: 5,
			message: "Agar kolkata aae toh Bhikhaaram Chandmal Rajuji zaroor jaana",
		},
		{
			image: "./img/review/Image-5.jpg",
			name: "Rajesh Mittal",
			stars: 4,
			message:
				"Jalebi ho toh Bhikhaaram Chandmal Rajuji ki. Hazar baar kha ke bhi maan nhi bharta hai.",
		},
		{
			image: "./img/review/Image3.jpg",
			name: "Hitesh Rathi",
			stars: 5,
			message:
				"Swad ka sahi naam *Rajuji. Yahan kuch bhi kha lo dil garden-garden ho jata hai! Bahut hi swaadisht hai!",
		},
	];

	// Populate testimonial carousel
	$.each(testimonials, function (index, testimonial) {
		var item = $("<div>").addClass(
			"testimonial-item img-border-radius bg-transparent rounded p-4 pt-0"
		);
		var positionRelative = $("<div>").addClass("position-relative");
		var quoteIcon = $("<i>")
			.addClass(
				"fa fa-quote-right fa-2x text-yellow position-absolute d-none d-sm-block"
			)
			.css({ bottom: "30px", right: "0" });
		var contentWrapper = $("<div>").addClass(
			"mb-4 pb-4 border-bottom border-secondary"
		);
		var message = $("<p>")
			.addClass("mb-0 text-white text-capitalize text-cocon")
			.text(testimonial.message);
		var authorInfo = $("<div>").addClass(
			"d-flex align-items-center text-secondary flex-nowrap"
		);
		var imageWrapper = $("<div>").addClass("bg-transparent rounded");
		var img = $("<img>")
			.attr("src", testimonial.image)
			.addClass("img-fluid  rounded-circle")
			.css({ width: "100px", height: "100px" })
			.attr("alt", testimonial.name);
		var textWrapper = $("<div>").addClass("ms-4 d-block");
		var authorName = $("<h4>")
			.addClass("text-white text-montserrat")
			.text(testimonial.name);
		var authorTitle = $("<p>").addClass("m-0  pb-3").text(testimonial.title);
		var starWrapper = $("<div>").addClass("d-flex pe-5");

		// Add stars if provided in the testimonial object
		if (testimonial.stars) {
			for (var i = 0; i < 5; i++) {
				var starIcon = $("<i>").addClass(
					"fas fa-star" + (i < testimonial.stars ? " text-yellow" : "")
				);
				starWrapper.append(starIcon);
			}
		}

		// Appending elements to build the structure
		imageWrapper.append(img);
		contentWrapper.append(message);
		textWrapper.append(authorName, authorTitle, starWrapper);
		authorInfo.append(imageWrapper, textWrapper);
		positionRelative.append(quoteIcon, contentWrapper, authorInfo);
		item.append(positionRelative);

		$(".owl-carousel").append(item);
	});

	// Initialize Owl Carousel with autoplay and mousewheel options
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		autoplayTimeout: 1500, // Autoplay interval in milliseconds
		autoplayHoverPause: true, // Pause autoplay on hover
		mouseDrag: true, // Enable mouse drag
		touchDrag: true, // Enable touch drag
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});
	
})(jQuery);
