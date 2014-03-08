;(function($) {

	var defaults = {
		title: "SliderMenu",
		backgroundColor: "#403b33",
		menuItemTitles: ["Home", "About", "Source Code", "GitHub", "Contact"],
		menuItemIcons: [],
		menuItemLinks: ["index.html", "about.html", "source.html", "#", "contact.html"],
		pageTitle: "SliderMenu",
		containerClass: "slidermenu"
	};



	function Slidermenu(element, options) {
		this.config = $.extend({}, defaults, options);
		this.element = element;
		this.init();

		$(".sliderButton").click( function() {
			event.preventDefault();
			$("#slider").toggleClass("slidermenu-left").toggleClass("slidermenu-pushed");
			$('body').toggleClass("page-body-left").toggleClass("page-body-pushed");
		});
	}

	Slidermenu.prototype.init = function() {
		$('body').addClass("page-body page-body-left");

		this.element.addClass(this.config.containerClass).addClass("slidermenu-left").css("background-color", this.config.backgroundColor);

		var nav = $("<nav>", {
			id: "navigation"
		}).appendTo(this.element);

		var ul = $("<ul>").appendTo(nav);
		
		var x;
		for (x = 0; x < this.config.menuItemTitles.length; x++) {
			
			var li = $("<li>").appendTo(ul);
			
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