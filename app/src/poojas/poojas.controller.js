/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrPoojasControllers = angular.module('rr.poojas.controllers', []);

    rrPoojasControllers.controller('poojasController', ['$scope', '$window', function ($scope, $window) {

        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
        $scope.selectedMenuItem = "POOJAS";
        $scope.pageData = "Hello poojas";
        console.log("hello");
        $scope.poojas = [{
                header: "Maha Sreechakraraja Pooja",
                content: "Mahasreechakrarajapooja followed by Mahachandikahomam (The greatest pooja getting complete result of all poojas) held once a year in September, October only. Sreechakrams and sreepathakkams in gold, gold plated, silver and copper can be had during this time.",
                imgSrc: "images/sreechakram.jpg"
            },
            {
                header: "Sree Rudrani Pooja",
                content: "Sreerudranipooja (for getting all ambitions fulfilled) held on every Sunday followed by gift of food.",
                imgSrc: "images/poojas/p1.jpg"
            },
            {
                header: "Maha Pournami Pooja",
                content: "The most powerful pooja that avoids all the evil influence and brings happiness. The pooja is held on every full moon day.",
                imgSrc: "images/poojas/p2.png"
            },
            {
                header: "Sree Vidyamahamanthrarchana",
                content: "For students getting higher position through education. This pooja is held on every Wednesday, Sunday and full moon day.",
                imgSrc: "images/poojas/p3.jpg"
            },
            {
                header: "Sree Mahaganapathy Homam",
                content: "For getting rid of all obstacles and getting Ashtaiswaryas. This pooja is held everyday.",
                imgSrc: "images/poojas/p4.jpg"
            },
            {
                header: "Sree Bhagavathiseva",
                content: "For getting Sreedevi’s blessing. This pooja is held everyday.",
                imgSrc: "images/poojas/p5.jpg"
            },
            {
                header: "Maha Mrithunjaya Homam",
                content: "Mahamrithunjayahomam (surpassing death and getting vitality) held on the first Monday of every Malayalam month. Gift of Food (for getting Mukthi – Salvation) held on every Sunday and on full moon day.",
                imgSrc: "images/poojas/p6.jpg"
            },
            {
                header: "Sarvalankarapooja",
                content: "Lorem gds hfsakh hssd  jj",
                imgSrc: "images/poojas/p7.jpg"
            }];

        $scope.scrollToDiv = function (index) {
            console.log("scrolling");
            var divPosition = $('#pooja-div-' + (index + 1)).offset();
            console.log("divpost", divPosition);
            $('html, body').animate({
                scrollTop: divPosition.top - 100
            }, "slow");
        }

    }]);


})(window, window.angular);
