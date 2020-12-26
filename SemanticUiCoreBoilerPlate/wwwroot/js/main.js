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