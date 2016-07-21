'use strict';

/**
 * @ngdoc overview
 * @name telligenTechApp
 * @description
 * # telligenTechApp
 *
 * Main module of the application.
 */
angular
  .module('telligenTechApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.router',
    'ui.bootstrap'
  ])

  .constant('FBMSG', 'https://telligen-tech.firebaseio.com')

  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html'
      })

      /*.state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs:'loginCtl'

      })*/
      /*.state('logout', {
        url: '/logout',
        templateUrl: 'views/login.html'
      })

      .state('careers', {
        url: '/careers',
        templateUrl: 'views/careers.html'
      })
      .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs:'aboutCtrl'
      })
      .state('contactUs', {
        url: '/contactUs',
        templateUrl: 'views/contactUs.html',
        controller: 'ContactCtrl',
        controllerAs:'contactUsController'
      })
      .state('jobPostings', {
        url: '/jobPostings',
        templateUrl: 'views/jobPostings.html'
      })*/
  }])

;
