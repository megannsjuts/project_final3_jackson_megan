$(document).ready(function () {

	$.backstretch(
		[
			'img/red.jpg',
			'img/blue.jpg',
			'img/green.jpg',
			'img/yellow.jpg',
			'img/orange.jpg'
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

$('#chips img').hover(function () {
	$(this).attr('src', 'img/chipshover.png');
}, function () {
	$(this).attr('src', 'img/chips.jpg');
});

$('#fries img').hover(function () {
	$(this).attr('src', 'img/frieshover.png');
}, function () {
	$(this).attr('src', 'img/fries.jpg');
});

$('#salad img').hover(function () {
	$(this).attr('src', 'img/saladhover.png');
}, function () {
	$(this).attr('src', 'img/salad.jpg');
});

$('#turkey img').hover(function () {
	$(this).attr('src', 'img/turkeyhover.png');
}, function () {
	$(this).attr('src', 'img/turkey.jpg');
});

$('#ham img').hover(function () {
	$(this).attr('src', 'img/hamhover.png');
}, function () {
	$(this).attr('src', 'img/ham.jpg');
});

$('#wrap img').hover(function () {
	$(this).attr('src', 'img/wraphover.png');
}, function () {
	$(this).attr('src', 'img/wrap.jpg');
});

$('#cookies img').hover(function () {
	$(this).attr('src', 'img/cookieshover.png');
}, function () {
	$(this).attr('src', 'img/cookies.jpg');
});

$('#brownies img').hover(function () {
	$(this).attr('src', 'img/brownieshover.png');
}, function () {
	$(this).attr('src', 'img/brownies.jpg');
});

$('#cake img').hover(function () {
	$(this).attr('src', 'img/cakehover.png');
}, function () {
	$(this).attr('src', 'img/cake.jpg');
});
