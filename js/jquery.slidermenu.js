/*
sliderMenu v1.0.0
jQuery Sliding Menu
http://www.slidermenu.com
Developed by Rebecca Cordingley http://github.com/rebeccac
MIT license
 */


;(function($) {

	var defaults = {
		fitToSize: "false",
		title: "SliderMenu",
		menuBgColor: "#403b33",
		menuItemTitles: ["Home", "About", "Source Code", "GitHub", "Contact"],
		menuItemIcons: [],
		menuItemLinks: ["index.html", "about.html", "source.html", "github.com", "contact.html"],
		menuItemBgColor: [],
		pageTitle: "SliderMenu",
		pageLink: "http://www.slidermenu.com",
		containerClass: "slidermenu"
	};



	function Slidermenu(element, options) {
		this.config = $.extend({}, defaults, options);
		this.element = element;
		this.init();

		$(".sliderButton").click( function(e) {
			e.preventDefault();
			$("#slider").toggleClass("slidermenu-left").toggleClass("slidermenu-pushed");
			$('body').toggleClass("page-body-left").toggleClass("page-body-pushed");
		});
	}

	Slidermenu.prototype.init = function() {
		$('body').addClass("page-body page-body-left");

		this.element.addClass(this.config.containerClass).addClass("slidermenu-left").css("background-color", this.config.menuBgColor);

		if (this.config.fitToSize == "true" || this.config.fitToSize == "True") {
			this.element.css({
				"height": "auto",
				"padding-bottom": "60px"
			});
		}
		var background = $("<div>", {
			class: "background"
		}).appendTo(this.element);

		var nav = $("<nav>", {
			id: "navigation"
		}).appendTo(background);

		var ul = $("<ul>").appendTo(nav);

		var x;
		for (x = 0; x < this.config.menuItemTitles.length; x++) {

			var li = $("<li>").appendTo(ul);
			if ( this.config.menuItemBgColor.length > 0 ) {
				li.addClass("item" + x);
				$(".item"+x).css("background-color", this.config.menuItemBgColor[x]);
			}

			var menuItemLink = $("<a>", {
				href: this.config.menuItemLinks[x],
			}).appendTo(li);

			if ( this.config.menuItemIcons.length > 0 ) {

				var menuIcons = $("<i>", {
					class: this.config.menuItemIcons[x]
				}).appendTo(menuItemLink);
			}

			var menuItem = $("<span>", {
				text: this.config.menuItemTitles[x],
			}).appendTo(menuItemLink).addClass("menu-item");

		}


		var additionalinfo = $("<div>", {
				class: "additional-info",
				text: this.config.title
			}).appendTo(this.element);


		var button = $("<div>", {
			class: "sliderButton"
		}).insertAfter(this.element);

		var buttonLink = $("<a>", {
			href: ""
		}).appendTo(button);
		var buttonIcon = $("<i>", {
			class: "icon-reorder"
		}).appendTo(buttonLink);
	}

	$.fn.slidermenu = function(options) {

		slidermenu = new Slidermenu(this.first(), options);
		return this;
	};
	}(jQuery));
