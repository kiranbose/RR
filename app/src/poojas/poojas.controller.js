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
        $scope.poojas=[{header:"Maha sreechakrarajapooja", content: "Lorem ipsum hfsakh sfjahj  jj",imgSrc:"images/sreechakram.jpg"},
            {header:"Sree rudranipooja", content: "Lorem ipsum hfsakh sfjahj  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"},
            {header:"Maha pournamipooja", content: "gd gds hfsakh sfjahj  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"},
            {header:"Sree vidyamahamanthrarchana", content: "vds ipsum hfsakh sfjahj  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"},
            {header:"Sree mahaganapathyhomam", content: "Lorem ipsum hfsakh sfjahj  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"},
            {header:"Sree bhagavathiseva", content: "Lorem gds hfsakh hssd  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"},
            {header:"Maha mrithunjayahomam", content: "Lorem gds hfsakh hssd  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"},
            {header:"Sarvalankarapooja", content: "Lorem gds hfsakh hssd  jj",imgSrc:"http://mdbootstrap.com/images/reg/reg%20(2).jpg"}];


    }]);


})(window, window.angular);