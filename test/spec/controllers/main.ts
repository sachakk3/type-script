/// <reference path='../../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts' />

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('firstappApp'));

  var MainCtrl:any;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller:any) {
    MainCtrl = $controller('MainCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
