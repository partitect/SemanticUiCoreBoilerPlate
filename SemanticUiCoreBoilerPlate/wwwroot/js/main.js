// fix menu when passed
$(".following-menu-fix").visibility({
	once: false,
	onBottomPassed: function () {
		$(".fixed.menu").transition("fade in");
	},
	onBottomPassedReverse: function () {
		$(".fixed.menu").transition("fade out");
	}
});

$(".toc.item").on("click", function () {
	$(".ui.sidebar").sidebar("toggle");
});

$(".following-menu-fix").vegas({
	preload: true,
	delay:10000,
	slides: [
		{ src: "/assets/img/10.jpg" },
		{ src: "/assets/img/11.jpg" },
		{ src: "/assets/img/12.jpg" },
		{ src: "/assets/img/13.jpg" }
	]
});

$.vegas.isVideoCompatible = function () {
	var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
	return !devices.test(navigator.userAgent);
}