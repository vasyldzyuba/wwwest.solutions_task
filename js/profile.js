app.controller('profileCtrl', function ($http) {
    let vm = this;

    //news api
    $http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3942066075be48fd84515c049d1fb857').then(function (response) {
        vm.favoriteNews = response.data.articles;
    })

    //jquery part for profile module
    $(function () {
        $('.newsScroll').click(function () {
            $('html, body').animate({
                scrollTop: '760px'
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
    })
})

