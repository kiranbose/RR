/**
 * Created by kiran on 1/16/2016.
 */

(function(window, angular,undefined) {
    "use strict";
// Main
    var rrApp = angular.module('rrApp', ['ui.router',
        'rr.contact',
        'rr.events',
        'rr.gallery',
        'rr.home',
        'rr.poojas',
        'rr.yagam',
        'angular-loading-bar',
        'ngAnimate'
    ]);
    rrApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/views/home.html",
                controller: 'homeController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-20');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-20');
                }
            })
            .state('poojas', {
                url: "/poojas",
                templateUrl: "src/poojas/views/poojas.html",
                controller: 'poojasController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-30');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-30');
                }
            })
            .state('gallery', {
                url: "/gallery",
                templateUrl: "src/gallery/views/gallery.html",
                controller: 'galleryController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-40');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-40');
                }
            })
            .state('info', {
                url: "/information",
                templateUrl: "src/events/views/events.html",
                controller: 'eventsController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-50');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-50');
                }
            })

//            .state('yagam', {
//                url: "/yagam",
//                templateUrl: "src/yagam/views/yagam.html",
//                controller: 'yagamController',
//                onEnter: function() {
//                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-60');
//                },
//                onExit: function() {
//                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-60');
//                }
//            })
            .state('contact', {
                url: "/contact",
                templateUrl: "src/contact/views/contact.html",
                controller: 'contactController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-60');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-60');
                }
            });

    }]);

})(window, window.angular);

$(document).ready(function() {



    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        //console.log($(window).scrollTop());
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

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
    $('body').on('click','.carousel-control',function() {
        $(this).closest('.carousel').carousel( $(this).data('slide') );
    });

});


