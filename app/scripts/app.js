'use strict';

/**
 * @ngdoc overview
 * @name angularWebAppTestApp
 * @description
 * # angularWebAppTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularWebAppTestApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
