$(document).ready(function() {
    "use strict";

    /*----------------------------------------------
     -----------Sticky Header  --------------------
     -------------------------------------------------*/
    function navBaar() {
        var headerHeight = $('.header');
        var stricky_header_top = $('.nav-wrap');
        if (stricky_header_top.length) {
            var stricky_header_top_Offset = headerHeight.height();
            $(window).on('scroll', function() {
                var top_scroll = $(window).scrollTop();
                if (top_scroll > stricky_header_top_Offset) {
                    stricky_header_top.addClass('stricky');
                } else {
                    stricky_header_top.removeClass('stricky');
                }
            });
        }
    }

    navBaar();
    $(window).on('resize', function() {
        navBaar();
    });
    //===============Mobile nav Function============
    var menu = $('#menu');
    var navigation = $('.navigation');
    menu.on('click', function() {
        if ($(window).width() <= 767) {
            navigation.slideToggle('normal');
        }
        return false;
    });
    var navigationLi = $('.navigation>ul> li');
    var navigationLink = $('.navigation>ul> li >a');
    var navigationUl = $('.navigation>ul> li >ul');
    navigationLink.on('click', function() {
        if ($(window).width() <= 767) {
            navigationLi.removeClass('on');
            navigationUl.slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') == true) {
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
        //return false;
    });
    //===============Index3 Mobile nav Function============
    var menu_toggler = $('#menu_toggler');
    var mobile__nav = $('.mobile__nav');
    menu_toggler.on('click', function() {
        if ($(window).width() <= 991) {
            mobile__nav.slideToggle('normal');
        }
        return false;
    });
    //===============Submenu Function============
    var mobile__navLink = $('.submenu-button');
    var mobile__navUl = $('.dropdown-menu');
    mobile__navLink.on('click', function() {
        if ($(window).width() <= 991) {
            $(this).next().slideToggle('normal');
        }

        //return false;
    });
    /*----------------------------------------------
     -----------Masonry Function  --------------------
     -------------------------------------------------*/
    var container_masonry = $(".container-masonry");
    container_masonry.imagesLoaded(function() {
        container_masonry.isotope({
            itemSelector: '.nf-item',
            transitionDuration: '1s',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    });

    /*----------------------------------------------
     -----------Masonry filter Function  --------------------
     -------------------------------------------------*/
    var container_filter = $(".container-filter");
    container_filter.on("click", ".categories", function() {
        var a = $(this).attr("data-filter");
        container_masonry.isotope({
            filter: a
        });

    });
    /*----------------------------------------------
     -----------Masonry filter Active Function  --------------------
     -------------------------------------------------*/
    container_filter.each(function(e, a) {
        var i = $(a);
        i.on("click", ".categories", function() {
            i.find(".active").removeClass("active"), $(this).addClass("active");
        });
    });

    /*----------------------------------------------
     -----------Masonry Grid view Function  --------------------
     -------------------------------------------------*/
    var container_grid = $(".container-grid");
    container_grid.imagesLoaded(function() {
        container_grid.isotope({
            itemSelector: ".nf-item",
            layoutMode: "fitRows"
        });
    });

    /*----------------------------------------------
     -----------Masonry Grid Filter Function  --------------------
     -------------------------------------------------*/
    container_filter.on("click", ".categories", function() {
        var e = $(this).attr("data-filter");
        container_grid.isotope({
            filter: e
        });
    });

    /*----------------------------------------------
     -----------isotope Function  --------------------
     -------------------------------------------------*/
    var isotop_grid = $('#isotope');
    if (isotop_grid.length) {
        // init Isotope
        var $grid = isotop_grid.isotope({
            itemSelector: 'li	',
            percentPosition: true,
            layoutMode: 'fitRows',
            fitRows: {
                gutter: 0
            }
        });
    }
    /*----------------------------------------------
     -----------Light Function  --------------------
     -------------------------------------------------*/
    var fLight = $(".fancylight");
    if (fLight.length) {
        fLight.fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }

    (function($) {
        "use strict";
        if ($("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0) {
            $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: 'data-rel',
                theme: "dark_square",
                social_tools: false,
                deeplinking: false
            });
        }
    })(jQuery);

    /* --------------------------------------------
     Price Range Slier
     -------------------------------------------- */
    var rangeJs = $(".range");
    if (rangeJs.length != 0) {
        rangeJs.nstSlider({
            "left_grip_selector": ".leftGrip",
            "right_grip_selector": ".rightGrip",
            "value_bar_selector": ".bar",
            "value_changed_callback": function(cause, leftValue, rightValue) {
                var $container = $(this).parent();
                $container.find('.leftLabel').text(leftValue);
                $container.find('.rightLabel').text(rightValue);
            },
            "highlight": {
                "grip_class": "gripHighlighted",
                "panel_selector": ".highlightPanel"
            }
        });
        var highlightRangeButton = $('#highlightRangeButton');
        var nstSlider = $('.nstSlider');
        highlightRangeButton.on('click', function() {
            var highlightMin = Math.random() * 20,
                highlightMax = highlightMin + Math.random() * 80;
            nstSlider.nstSlider('highlight_range', highlightMin, highlightMax);
        });
    }

    /*----------------------------------------------
     -----------Counter Function  --------------------
     -------------------------------------------------*/
    var counter = $('.counter');
    if (counter.length) {
        counter.appear(function() {
            counter.each(function() {
                var e = $(this),
                    a = e.attr("data-count");
                $({
                    countNum: e.text()
                }).animate({
                    countNum: a
                }, {
                    duration: 8e3,
                    easing: "linear",
                    step: function() {
                        e.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        e.text(this.countNum);
                    }
                });
            });
        });
    }

    /*----------------------------------------------
    -----------Slider Function  --------------------
    -------------------------------------------------*/
    //Blog Slider
    var itemCarousel_1 = $(".item1-carousel");
    itemCarousel_1.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 1

            },
            1000: {
                items: 1

            }
        },
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"]

    });

    //	Releted Project slider
    var relatedProject = $("#related-project");
    relatedProject.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        },
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"]

    });

    //index1_testimonial
    var testimonial_carosule_wrap = $('.testimonial_carosule-wrap');
    testimonial_carosule_wrap.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    //	About page Carousel
    var carouselSlider = $('.abt-block__slider');
    carouselSlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        center: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    //services-items
    var historyBlock = $('.history-block');
    historyBlock.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    var carouselSlider = $('.carousel-slider');
    carouselSlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // client_owl
    var carouselSlider = $('.client-slid');
    carouselSlider.owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    // home_client
    var client_carousel = $(".client-carousel");
    client_carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    });
    //home_testimonial_two_show
    var two_Show = $('.testimonial_silder');
    two_Show.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        center: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    //=============Tab Function=============
    $('.tab_funct').on('click', function() {
        $('.tab_funct').removeClass('active');
        $(this).addClass('active');
        var tabShow = $(this).data('tab');
        $('.service-test').css('display', 'none');
        $('.' + tabShow).css('display', 'block');
        $('.service-test').removeClass('active');
        var data_text = $(this).data('tab');
        setTimeout(function() {
            $('.home_one').find('.' + data_text).addClass('active');
        }, 50);
    });


    /*----------------------------------------------
     ----------- Loader Function  --------------------
     -------------------------------------------------*/
    $(window).on('load', function() {
        var preloader = $("#preloader");
        preloader.delay(500).fadeOut();
    });


    /*----------------------------------------------
     ----------- Map Function  --------------------
     -------------------------------------------------*/
    var mapWrap = $('#map');
    if (mapWrap.length) {
        google.maps.event.addDomListener(window, 'load', initialize);

    }
    /*-----------------------------------------------
    -----------  style-switcher  --------------------
    -------------------------------------------------*/
    //$("body").append('<div id="style-switcher"></div>');
    //$("#style-switcher").load("theme-option/swicher.html");
});


/*-----------------------------------------------
 -----------  Map Color Theme Function  ----------
 -------------------------------------------------*/
var mapWrap = $('#map');
if (mapWrap.length) {
    var myCenter = new google.maps.LatLng(51.538308, -0.3817765);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            }, {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            }, {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            }, {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            }, {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            }, {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);

        var marker = new google.maps.Marker({
            position: myCenter,
            icon: {
                url: 'assets/images/map-pin.png',
                size: new google.maps.Size(90, 111), //marker image size
                origin: new google.maps.Point(0, 0), // marker origin
                anchor: new google.maps.Point(35, 86) // X-axis value (35, half of marker width) and 86 is Y-axis value (height of the marker).
            }
        });

        marker.setMap(map);

    }

    function reloadStylesheets() {
        var queryString = 'reload=' + new Date().getTime();
        $('link[rel="stylesheet"]').each(function() {
            if (this.href.indexOf('?') === -1) {
                this.href = this.href + '&' + queryString;
            } else {
                this.href = this.href + '?' + queryString;
            }
        });
    }

}