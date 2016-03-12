/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrHomeControllers = angular.module('rr.home.controllers', []);

    rrHomeControllers.controller('homeController', ['$scope','$window',function ($scope,$window) {
        $('html, body').animate({scrollTop: 0}, "slow");

        $('.carousel').carousel({
            interval: 3000
        });
        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "HOME";
        $scope.pageData = "Hello HOME";
        console.log("Howdy.. geek. \n Drop a mail to kiranbose@gmail.com for any queries. \n May the Force be with you !");

        $scope.upaDevatas = [{Name:'Muthappan',imageSrc:'images/round/r1.gif',text:''},
            {Name:'Yogeeswaran',imageSrc:'images/round/r2.jpg',text:''},
            {Name:'NagaRaja',imageSrc:'images/round/r3.jpg',text:''},
            {Name:'Naga YakshiAmma',imageSrc:'images/round/r4.jpg',text:''},
            {Name:'Naga Kanyaka',imageSrc:'images/round/r5.jpg',text:''},
            {Name:'Bhrahmarakshass',imageSrc:'images/round/r5.jpg',text:''},
           ];


    }]);


})(window, window.angular);