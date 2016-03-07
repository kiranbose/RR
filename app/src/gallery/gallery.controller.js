/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var rrFestivalsControllers = angular.module('rr.gallery.controllers', []);

    rrFestivalsControllers.controller('galleryController', ['$scope','$window',function ($scope,$window) {
        $('html, body').animate({scrollTop: 0}, "slow");
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

        $scope.galleryImages = [{imgsrc:'images/gallery/1.jpg',heading:'fsdfd'},
            {imgsrc:'images/gallery/2.jpg',heading:'fffsafsd'},
            {imgsrc:'images/gallery/3.jpg',heading:'fdsf'},
            {imgsrc:'images/gallery/4.jpg',heading:'fdsf'},
            {imgsrc:'images/gallery/20.jpg',heading:'fsfas'}];


        $scope.download= function(file){
            //window.location.href = $scope.downloadLink;
            //window.open($scope.downloadLink);
            var link = document.createElement("a");
            link.download = file;
            link.href = file;
            link.click();
        };
    }]);

})(window, window.angular);
