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

            .state('yagam', {
                url: "/yagam",
                templateUrl: "src/yagam/views/yagam.html",
                controller: 'yagamController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('rr-margin-left-60');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('rr-margin-left-60');
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
    $('html, body').animate({scrollTop: 0}, "slow");
    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "EVENTS";

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
        $('html, body').animate({scrollTop: 0}, "slow");

        $('.carousel').carousel({
            interval: 3000
        });
        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "HOME";
        $scope.pageData = "Hello HOME";
        console.log("Howdy.. geek. \n Drop a mail to kiranbose@gmail.com for any queries. \n May the Force be with you !");

        $scope.upaDevatas = [{Name:'Muthappan',imageSrc:'images/round/r1.gif',text:''},
            {Name:'Yogeeswaran',imageSrc:'images/round/r2.jpg',text:''},
            {Name:'NagaRaja',imageSrc:'images/round/r3.jpg',text:''},
            {Name:'Naga YakshiAmma',imageSrc:'images/round/r4.jpg',text:''},
            {Name:'Naga Kanyaka',imageSrc:'images/round/r5.jpg',text:''},
            {Name:'Bhrahmarakshass',imageSrc:'images/round/r5.jpg',text:''},
           ];

        //    enable this during ulsavam time to display and update popup
        //    $(".ulsavamBtn").trigger('click');
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
        $('html, body').animate({scrollTop: 0}, "slow");
        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "YAGaM";
        $scope.pageData = "Hello YAGaM";
        console.log("hello");
        $scope.yagamDates = [18,19,20,21,22];


        $scope.announcements = [
            {
                head: 'Website Inauguration',
                desc: 'Temple Website was inaugurated by Yagam General convener Mr. Akkavila sathik at Vadakkekunnathu Sreerajarajeswari Devi Temple.',
                imgSrc:'http://i.imgur.com/NBdC18eh.jpg'
            },
            {
                head: 'Vilambara Sthoopam',
                desc: 'The Sthoopam erected at kadappakada Junction, Kollam for Maha Gayathri Yagam.',
                imgSrc:'http://i.imgur.com/ggaG3uD.jpg'
            }
            ,{
                head: 'Kappukettu',
                desc: 'Kappukettu in connection with Sree MahaGayathri Yagam at Vadakkekunnathu Sreerajarajeswari Devi Temple',
                imgSrc:'http://i.imgur.com/myFkssPh.jpg'
            },
            {
                head: 'GayathriYagam Announcement ',
                desc: 'Mookambika thanthri Ninthyananda Adiga & His wife Rakshitha adiga have visited Kollam Kadappakkada Vadakkekunnathu Sree Rajarajeswari Devi Temple for the preparation of Yaga Mandam and everything to do the best',
                imgSrc:'images/yagam/announcements/a1.jpg'
            },{
                head: 'Gift of Food',
                desc: 'Food was served on all 5 days of yagam in temple. ',
                imgSrc:'images/yagam/annadanam.jpg'
            },{
                head: 'MahaGayathriYaga Karyakarthra yogam',
                desc: 'Kerala High Court justice Honorable Mr. K K Utharan inaugurating the ceremony',
                imgSrc:'images/yagam/announcements/a3.jpg'
            }

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

        $('.carousel').carousel({
            interval: 3000
        });
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