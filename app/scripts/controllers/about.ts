/// <reference path='../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts' />
'use strict';

/**
 * @ngdoc function
 * @name firstappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstappApp
 */
angular.module('firstappApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
