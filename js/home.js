app.controller('homeCtrl', function ($http) {
	let vm = this;

	//exchange api
	$http.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(function (response) {
		vm.rates = response.data;
	});
	//news api
	$http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3942066075be48fd84515c049d1fb857').then(function (response) {
		vm.news = response.data.articles;
	});
	//news api
	$http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3942066075be48fd84515c049d1fb857').then(function (response) {
		vm.newsSport = response.data.articles;
	});

	//checking if user is active(logged in)
	vm.userIsActive = function () {
		if (localStorage.getItem('user_data') !== null) {
			window.location.href = "#!/profile";
		}
		else {
			window.location.href = "#!/login";  //if user is not logged in -> locate to login page
		}
	}


	//jQuery part
	$(function () {
		$('.newsScroll').click(function () {
			$('html, body').animate({
				scrollTop: '760px'
			}, 1000);
		});
		$('.weatherScroll').click(function () {
			$('html, body').animate({
				scrollTop: '500px'
			}, 1000);
		});
		$('.currency').click(function () {
			$('html, body').animate({
				scrollTop: '210px'
			}, 1000);
		});
		$('.back-to-top').click(function () {
			$('html, body').animate({
				scrollTop: '0px'
			}, 500);
		})
		$(window).bind("scroll", function () {
			if ($(this).scrollTop() > 200) {
				$(".back-to-top").fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		$(window).scroll(function () {
			$('.hideme').each(function (i) {
				let bottom_of_object = $(this).offset().top + ($(this).outerHeight() - 200);
				let bottom_of_window = $(window).scrollTop() + $(window).height();
				if (bottom_of_window > bottom_of_object) {
					$(this).animate({
						'opacity': '1'
					}, 500);
				}
			});
		});
		//weather widget
		! function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = 'https://weatherwidget.io/js/widget.min.js';
				fjs.parentNode.insertBefore(js, fjs);
			}
		}(document, 'script', 'weatherwidget-io-js');
	})
})
