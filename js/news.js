app.controller('newsCtrl', function ($http) {
	let vm = this;

	//news api
	$http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3942066075be48fd84515c049d1fb857').then(function (response) {
		vm.news = response.data.articles;
	});
	$http.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=3942066075be48fd84515c049d1fb857').then(function (response) {
		vm.newsSport = response.data.articles;
	});


	vm.userIsActive = function () {
		if (localStorage.getItem('user_data') !== null) { //if local storage is empty -> make array empty too
			window.location.href = "#!/profile";
		}
		else {
			window.location.href = "#!/login";
		}
	}

	$(function () {
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
	})
})