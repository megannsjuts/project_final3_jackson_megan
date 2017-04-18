$(document).ready(function () {

	$.backstretch(
		[
			"img/red.jpg",
			"img/blue.jpg",
			"img/green.jpg",
			"img/yellow.jpg",
			"img/orange.jpg"
		], {
			fade: 1000
		}
	);

});

$(document).ready(function () {
	$('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
