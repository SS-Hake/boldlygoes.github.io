$('document').ready(function() {

	$(".wc, .nf").hide();

	$(".hvrwc").hover(function() {
		$(".wc").fadeIn(100).css("display", "block");
	}, function() {
		$(".wc").fadeOut(100);
	});

	$(".hvrnf").hover(function() {
		$(".nf").fadeIn(100);
	}, function() {
		$(".nf").fadeOut(100);
	});

	$(".hvrkg").hover(function() {
		$(".kg").fadeIn(100);
	}, function() {
		$(".kg").fadeOut(100);
	});
});