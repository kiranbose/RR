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
                controller: 'poojasController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-40');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-40');
                }
            })
            .state('gallery', {
                url: "/gallery",
                templateUrl: "src/gallery/views/gallery.html",
                controller: 'galleryController',
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
                controller: 'contactController',
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
            controller: 'yagamController',
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
        console.log($(window).scrollTop());
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



/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrContactControllers = angular.module('rr.contact.controllers', []);

    rrContactControllers.controller('contactController', ['$scope','$window',function ($scope,$window) {

    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "CONTACTS";
    $scope.pageData = "Hello CONTACTS";
    console.log("hello");


    }]);


})(window, window.angular);
/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    angular.module("rr.contact", [
        "rr.contact.controllers"
    ]);

})(window, window.angular);
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
/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    angular.module("rr.events", [
        "rr.events.controllers"
    ]);

})(window, window.angular);
/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrFestivalsControllers = angular.module('rr.gallery.controllers', []);

    rrFestivalsControllers.controller('galleryController', ['$scope','$window',function ($scope,$window) {

    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "EVENTS";
    $scope.pageData = "Hello event";
    console.log("hello");

        var $images = $('.docs-pictures');
        var $toggles = $('.docs-toggles');
        var $buttons = $('.docs-buttons');
        var options = {
            // inline: true,
            rotatable: false,
            url: 'data-original',

        };

        function toggleButtons(mode) {
            if (/modal|inline|none/.test(mode)) {
                $buttons.
                find('button[data-enable]').
                prop('disabled', true).
                filter('[data-enable*="' + mode + '"]').
                prop('disabled', false);
            }
        }

        $images.viewer(options);

        toggleButtons(options.inline ? 'inline' : 'modal');

        $toggles.on('change', 'input', function () {
            var $input = $(this);
            var name = $input.attr('name');

            options[name] = name === 'inline' ? $input.data('value') : $input.prop('checked');
            $images.viewer('destroy').viewer(options);
            toggleButtons(options.inline ? 'inline' : 'modal');
        });

    }]);

})(window, window.angular);
/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    angular.module("rr.gallery", [
        "rr.gallery.controllers"
    ]);

})(window, window.angular);


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
/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    angular.module("rr.home", [
        "rr.home.controllers"
    ]);

})(window, window.angular);
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
/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    angular.module("rr.poojas", [
        "rr.poojas.controllers"
    ]);

})(window, window.angular);
/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrYagamControllers = angular.module('rr.yagam.controllers', []);

    rrYagamControllers.controller('yagamController', ['$scope','$window',function ($scope,$window) {

        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "YAGaM";
        $scope.pageData = "Hello YAGaM";
        console.log("hello");


    }]);


})(window, window.angular);
/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    angular.module("rr.yagam", [
        "rr.yagam.controllers"
    ]);

})(window, window.angular);