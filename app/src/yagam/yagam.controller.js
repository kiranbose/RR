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
                head: 'GayathriYagam Announcement ',
                desc: 'Mookambika thanthri Ninthyananda Adiga & His wife Rakshitha adiga have visited Kollam Kadappakkada Vadakkekunnathu Sree Rajarajeswari Devi Temple for the preparation of Yaga Mandam and everything to do the best',
                imgSrc:'images/yagam/announcements/a1.jpg'
            },{
                head: 'Gift of Food',
                desc: 'Food will be served on all 5 days of yagam in temple. Devotees interested in sponsoring Annadaanam can contact temple and book at the earliest. Availability depends.',
                imgSrc:'images/yagam/annadanam.jpg'
            },{
                head: 'MahaGayathriYaga Karyakarthra yogam',
                desc: 'Kerala High Court justice Honorable Mr. K K Utharan inaugurating the ceremony',
                imgSrc:'images/yagam/announcements/a3.jpg'
            }
            //,{
            //    head: 'Annadanam',
            //    desc: 'Annadanam will be held as a part of MahaGayathri Yagam. Devotees wishing to host a days annadanam can contact us',
            //    imgSrc:'images/yagam/annadanam.jpg'
            //}
        ];
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
