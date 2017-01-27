$('document').ready(function() {

	$(".wc, .nf").hide();

	$(".hvrwc").hover(function() {
		$(".wc").fadeIn(1000).css("display", "block");
	}, function() {
		$(".wc").fadeOut(1000);
	});

	$(".hvrnf").hover(function() {
		$(".nf").fadeIn(1000);
	}, function() {
		$(".nf").fadeOut(1000);
	});
});