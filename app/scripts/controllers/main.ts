/// <reference path='../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts' />
'use strict';

/**
 * @ngdoc function
 * @name firstappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstappApp
 */
angular.module('firstappApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate 1',
      'AngularJS 1',
      'Karma 1'
    ];
    this.GetMessage = function(){
      window.alert("TestClick");
    };    
  });  