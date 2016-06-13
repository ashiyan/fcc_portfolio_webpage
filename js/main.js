/*global $, document, window, jQuery*/

$(document).ready(function () {
	function scroll_active() {
		"use strict";

		var window_top = $(window).scrollTop(),
			portfolio_top = $("div.about").height(),
			contact_top = $("div.about").height() + $("div.portfolio").height();

		if (window_top > contact_top) {
			$(".link").removeClass("active");
			$(".link-contact").addClass("active");
		} else if (window_top > portfolio_top) {
			$(".link").removeClass("active");
			$(".link-portfolio").addClass("active");
		} else {
			$(".link").removeClass("active");
			$(".link-about").addClass("active");
		}
	}

	jQuery(function () {
		"use strict";
		jQuery(window).scroll(scroll_active);
	});
});