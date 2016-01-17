/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrEventsControllers = angular.module('rr.events.controllers', []);

    rrEventsControllers.controller('eventsController', ['$scope','$window',function ($scope,$window) {

    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "EVENTS";
    $scope.pageData = "Hello event";
    console.log("hello");


    }]);


})(window, window.angular);