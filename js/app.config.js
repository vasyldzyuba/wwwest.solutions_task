angular.module('app').config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        'debug': true,
        'events': true,
        'modules': [{
            name: 'homectrl',
            files: ['js/home.js']
        },{
            name: 'newsctrl',
            files: ['js/news.js']
        }]
    });
}]);