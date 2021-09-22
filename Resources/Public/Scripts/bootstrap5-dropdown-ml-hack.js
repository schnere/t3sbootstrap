
(function($bs) {
	const CLASS_NAME = 'has-child-dropdown-show';
	$bs.Dropdown.prototype.toggle = function(_orginal) {
		return function() {
			document.querySelectorAll('.' + CLASS_NAME).forEach(function(e) {
				e.classList.remove(CLASS_NAME);
			});
			let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
			for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
				dd.classList.add(CLASS_NAME);
			}
			return _orginal.call(this);
		};
	}($bs.Dropdown.prototype.toggle);

	document.querySelectorAll('.dropdown').forEach(function(dd) {
		dd.addEventListener('hide.bs.dropdown', function(e) {
			if(this.classList.contains(CLASS_NAME)) {
				this.classList.remove(CLASS_NAME);
				e.preventDefault();
			}
			e.stopPropagation();
		});
	});

	document.querySelectorAll('.dropdown [data-bs-toggle="dropdown"]').forEach(function(dd) {
		dd.addEventListener('click', function(e) {

			var navbar = document.getElementById('main-navbar'),
				clickableparent = navbar.classList.contains('clickableparent') ? 1 : 0,
				href = e.currentTarget.getAttribute('href');
			
			if ( isNav(navbar) && !isTouch() && !this.classList.contains('show') && clickableparent ) {
				e.stopImmediatePropagation();
				if(href != '#') {
					location.href = href;
				}
			}
			if ( isNav(navbar) && !isTouch() && this.classList.contains('dropdown-hover') ) {
				e.stopImmediatePropagation();
				if(href != '#') {
					location.href = href;
				}
			}
		});
	});

	function isHidden(el) {
		return (el.offsetParent === null);
	}
	
	function isNav(navbar) {
		return isHidden(navbar);
	}

	function isTouch() {
		return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
	}

	function getDropdown(element) {
		return $bs.Dropdown.getInstance(element) || new $bs.Dropdown(element);
	}

	document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function(dd) {
		dd.addEventListener('mouseenter', function(e) {
			let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
			if (!toggle.classList.contains('show')) {
				getDropdown(toggle).toggle();
			}
		});
		dd.addEventListener('mouseleave', function(e) {
			let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
			if (toggle.classList.contains('show')) {
				getDropdown(toggle).toggle();
			}
		});
	});

})(bootstrap);
