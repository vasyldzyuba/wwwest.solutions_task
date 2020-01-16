let app = angular.module('app', ['ngRoute', 'oc.lazyLoad']);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './public/home.html',
		controller: 'homeCtrl',
		controllerAs: 'home',
		resolve: {
			LazyLoadCtrl: ["$ocLazyLoad", function($ocLazyLoad){
				return $ocLazyLoad.load('homectrl');
			}]
		},
	});
	$routeProvider.when('/news', {
		templateUrl: './public/news.html',
		controller: 'newsCtrl',
		controllerAs: 'news',
		resolve: {
			LazyLoadCtrl: ["$ocLazyLoad", function($ocLazyLoad){
				return $ocLazyLoad.load('newsctrl');
			}]
		},
	});
	$routeProvider.when('/login', {
		templateUrl: './public/login.html',
		controller: 'loginCtrl',
		controllerAs: 'login'
	});

	$routeProvider.when('/profile', {
		templateUrl: './public/profile.html',
		controller: 'profileCtrl',
		controllerAs: 'profile'
	});
})
