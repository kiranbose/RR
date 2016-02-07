/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrPoojasControllers = angular.module('rr.poojas.controllers', []);

    rrPoojasControllers.controller('poojasController', ['$scope','$window',function ($scope,$window) {

        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "POOJAS";
        $scope.pageData = "Hello poojas";
        console.log("hello");


    }]);


})(window, window.angular);