/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrYagamControllers = angular.module('rr.yagam.controllers', []);

    rrYagamControllers.controller('yagamController', ['$scope','$window',function ($scope,$window) {
        $('html, body').animate({scrollTop: 0}, "slow");
        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "YAGaM";
        $scope.pageData = "Hello YAGaM";
        console.log("hello");
        $scope.yagamDates = [18,19,20,21,22];


        $scope.announcements = [
            {
                head: 'Inauguration',
                desc: 'Mookambika thanthri Ninthyananda Adiga & His wife Rakshitha adiga have visited Kollam Kadappakkada Vadakkekunnathu Sree Rajarajeswari Devi Temple for the preparation of Yaga Mandam and everything to do the best',
                imgSrc:'images/yagam/announcements/a1.jpg'
            },{
                head: 'Gift of Food',
                desc: 'Food will be served on all 5 days of yagam in temple. Devotees interested in sponsoring Annadaanam can contact temple and book at the earliest. Availability depends.',
                imgSrc:'images/yagam/announcements/banner.jpg'
            },{
                head: 'Announcement3',
                desc: 'desc jfhskafh kfhksa fh ffsaj fmj',
                imgSrc:'images/yagam/announcements/banner.jpg'
            },{
                head: 'Announcement4',
                desc: 'desc jfhskafh kfhksa fh ffsaj fmj',
                imgSrc:'images/yagam/announcements/banner.jpg'
            }
        ];


    }]);


})(window, window.angular);
