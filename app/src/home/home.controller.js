/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrHomeControllers = angular.module('rr.home.controllers', []);

    rrHomeControllers.controller('homeController', ['$scope','$window',function ($scope,$window) {

        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "HOME";
        $scope.pageData = "Hello HOME";
        console.log("hello");

        $scope.upaDevatas = [{Name:'Dev1',imageSrc:'images/round/r1.gif',text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
            {Name:'Dev2',imageSrc:'images/round/r2.jpg',text:'majority have suffered alteration in some form, by injected humoure'},
            {Name:'Dev3',imageSrc:'images/round/r3.jpg',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {Name:'Dev4',imageSrc:'images/round/r4.jpg',text:'majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'},
            {Name:'Dev5',imageSrc:'images/round/r5.jpg',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
           ];


    }]);


})(window, window.angular);