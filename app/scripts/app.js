/// <reference path='../../bower_components/DefinitelyTyped/angularjs/angular.d.ts' />
'use strict';
/**
 * @ngdoc overview
 * @name firstappApp
 * @description
 * # firstappApp
 *
 * Main module of the application.
 */
angular
    .module('firstappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
        .otherwise({
        redirectTo: '/'
    });
});
//# sourceMappingURL=app.js.map