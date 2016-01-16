/**
 * Created by kiran on 1/16/2016.
 */

(function(window, angular,undefined) {
    "use strict";
// Main
var rrApp = angular.module('rrApp', ['ui.router']);
    rrApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "src/home/views/home.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "src/home/views/home2.html"
            })

    }]);

})(window, window.angular);