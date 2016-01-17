/**
 * Created by kiran on 1/16/2016.
 */

(function(window, angular,undefined) {
    "use strict";
// Main
var rrApp = angular.module('rrApp', ['ui.router',
                                    'rr.events'
                                        ]);
    rrApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/views/home.html",
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-20');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-20');
                }
            })
            .state('events', {
                url: "/events",
                templateUrl: "src/events/views/events.html",
                controller: 'eventsController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-30');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-30');
                }
            })
            .state('poojas', {
                url: "/poojas",
                templateUrl: "src/poojas/views/poojas.html",
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-40');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-40');
                }
            })
            .state('festivals', {
                url: "/festivals",
                templateUrl: "src/festivals/views/festivals.html",
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-50');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-50');
                }
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "src/contact/views/contact.html",
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-60');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-60');
                }
            })
            .state('yagam', {
            url: "/yagam",
            templateUrl: "src/yagam/views/yagam.html",
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-70');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-70');
                }
        });

    }]);

})(window, window.angular);

$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 230) {
            $('#nav_bar').addClass('rrnavbar-fixed');
            $('#brand_logo_minimized').removeClass('hidden');

        }
        if ($(window).scrollTop() < 231) {
            $('#nav_bar').removeClass('rrnavbar-fixed');
            $('#brand_logo_minimized').addClass('hidden');
        }
    });


        $('.nav li').on('click', function(){
            var _opened = $('#menuButton').is(':visible');
            if (_opened) {
            $('.btn-navbar').click(); //bootstrap 2.x
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
            }
        });



});