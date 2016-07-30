/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrContactControllers = angular.module('rr.contact.controllers', []);

    rrContactControllers.controller('contactController', ['$scope','$window',function ($scope,$window) {
    $('html, body').animate({scrollTop: 0}, "slow");
    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "CONTACTS";
    $scope.pageData = "Hello CONTACTS";

        $scope.contacts = [
            {name:"Sri. B.C Bose",desc:"The Acharya and the President",ph:"9447894916",imgSrc:"images/contacts/contact1.jpg"},
            {name:"Sri. M. Padmalal",desc:"The Secretary",ph:"944556548",imgSrc:"images/contacts/contact2.jpg"},
            {name:"Sri. N. Santhosh Kumar",desc:"The Treasurer",ph:"9747105777",imgSrc:"images/contacts/contact3.jpg"}
        ];

    }]);


})(window, window.angular);
