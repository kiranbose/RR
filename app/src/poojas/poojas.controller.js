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
                content: "Sarvalankarapooja (The sublime pooja followed by eighteen poojas) held on special occasions in which the goddess is pleased and bestows all the blessings on the devotees. Abhishekas like Kalashabhishekam, Kalabhabhishekam, Kumkuma abhishekam, Elaneerabhishekam, Pushpabhishekam, Neyyabhishekam, Panchamrithaabhishekam held on Sunday, full moon day and on special occasions (curing all diseases and getting mental happiness) Sreemahathripurasundareehomam the supreme pooja held on special occasions gives the devotees victory in all walks of life. Surppapooja, Surppabali and Nagaroottu held once in a month on Aayilyam star and on festival. This poojas saves the devotees from snake curse. Neerajanapooja held everyday and on festival (the pooja saves the devotees from all the evil influence of starts) Mangalyasoubhagyapooja, Muthappanoottu, Sreesooktham, Purushasooktham, Sudhasooktham, and Navagrahapoojas are among the great many poojas held here. Special 10 days’ poojas are conducted marking Mahanavami and Vijayadasami. Vidhyarambham (initiation into letters) As the Goddess is Sreevidhya, the embodiment of wisdom (Vidhyarambham) initiation into letters is the most prominent ritual here and it is conducted on Vijayadasami day followed by 10 days’ successive poojas, homas and japas. Great scriptures, hymns and Vedas are red sung and chanted here with utmost piety marking all the worshipful seasons.",
                imgSrc: "images/poojas/p7-icon.jpg"
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
