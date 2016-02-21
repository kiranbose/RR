/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrYagamControllers = angular.module('rr.yagam.controllers', []);

    rrYagamControllers.controller('yagamController', ['$scope','$window',function ($scope,$window) {
        $('html, body').animate({scrollTop: 0}, "slow");
        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "YAGaM";
        $scope.pageData = "Hello YAGaM";
        console.log("hello");
        $scope.yagamDates = [18,19,20,21,22];


    }]);


})(window, window.angular);
