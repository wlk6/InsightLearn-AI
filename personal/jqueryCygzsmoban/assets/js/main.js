(function ($) {
    "use strict";

    //--------------------------------------------------
    // Preloader页面预加载
    //--------------------------------------------------
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
        RevealLoad();
        startAnim();
        $('.preloader').removeClass()
    })


    //--------------------------------------------------
    // Animation Start动画效果
    //--------------------------------------------------
    function startAnim() {
        TweenMax.from('.logo', 1, {
            y: '100',
            autoAlpha: 0,
            delay: '.3',
            ease: Power4.easeInOut,
        })
        TweenMax.from('.toggle-btn', 1, {
            y: '100',
            delay: '.3',
            autoAlpha: 0,
            ease: Power4.easeInOut,
        })
        TweenMax.from('.bg-right', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })
        TweenMax.from('.bg-about', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })

        TweenMax.from('.scr', 1, {
            y: '100',
            ease: Power4.easeInOut,
            autoAlpha: 0,
        })

        TweenMax.from('.scrolls', 1, {
            y: '100',
            delay: 1,
            ease: Power4.easeInOut,
            autoAlpha: 0,
        })


        TweenMax.to('.menu', 0, {
            autoAlpha: 0,
        })


    }


    //--------------------------------------------------
    // Parralax
    //--------------------------------------------------
    var headermove = $('#headmove').get(0);
    var parallaxInstance = new Parallax(headermove, {
        relativeInput: true,
        scalarX: 14,
        hoverOnly: false,
    });


    //--------------------------------------------------
    // Web Load
    //--------------------------------------------------
    function RevealLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '0',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '0',
            })
            .to(logo, 0, {
                autoAlpha: 0,
                delay: '-0.4',
            })

        loadTL.play();
    }

    function HideLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '100%',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '100%',
            })
            .to(logo, 0, {
                autoAlpha: 1,
                delay: '-0.5'
            })

        loadTL.play();
    }

    $('.load-spiral').on('click', function (e) {
        e.preventDefault();
        setTimeout(function (url) {
            window.location = url
        }, 1000, this.href);
        HideLoad();
    });


    //--------------------------------------------------
    // Animation on navbar scrolling background
    //--------------------------------------------------
    var wind = $(window);

    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop();

        if (bodyScroll > 300) {

            TweenMax.to('.scr', .5, {
                autoAlpha: 0,
                y: '100',

            })

            TweenMax.to('.scrolls', .5, {
                autoAlpha: 0,
                y: '100',

            })


        } else {
            TweenMax.to('.scr', 1, {
                autoAlpha: 1,
                y: '00',

            })

            TweenMax.to('.scrolls', .5, {
                autoAlpha: 1,
                y: '0',

            })

        }
    });


    $('.img-folio').on('mouseenter', function () {
        TweenMax.to(this, 0.4, {
            y: '-30',
        })
    });

    $('.img-folio').on('mouseleave', function () {
        TweenMax.to(this, 0.4, {
            y: '1',
        })
    });


    luxy.init({
        wrapper: '#spiral',
        wrapperSpeed: '0.07',
    });

    //--------------------------------------------------
    // Cursor
    //--------------------------------------------------

    var isMobile = false;
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    } else {
        $('html').addClass('no-touch');
        isMobile = false;
    }
    //--------------------------------------------------
    // Toggle Menu
    //--------------------------------------------------
    var t1 = new TimelineMax({
        paused: true
    });
    t1.to(".one", 0.8, {
        y: 9,
        autoAlpha: 0,
        ease: Expo.easeInOut
    });
    t1.to(".two", 0.8, {
        ease: Expo.easeInOut,
        delay: -1
    });
    t1.to(".tre", 0.8, {
        y: -9,
        autoAlpha: 0,
        ease: Expo.easeInOut,
        delay: -1
    });
    t1.to(".over-all", 1, {
        autoAlpha: 1,
        ease: Expo.easeOut,
    })
    t1.to(".bg-nav", 1, {
        autoAlpha: 1,
        ease: Power4.easeOut,
        delay: -1
    })


    t1.to(".menu", 1, {
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: -1
    })

    t1.staggerFrom(".menu ul li", 3, {
        y: 50,
        opacity: 0,
        ease: Power4.easeInOut,
    }, '0.1', '-0.01');


    t1.reverse();

    $('.toggle-btn').on("click", function () {
        t1.reversed(!t1.reversed()); //toggles the orientation
    })
  

    //--------------------------------------------------
    // Magnetic
    //--------------------------------------------------

    $(document).on('mousemove', function (e) {
        $('.magnetic').each(function () {
            if (!isMobile) {
                magnetic(this, e); //Init effect magnetic 
            }
        });
    });

    function magnetic(el, e) {
        var mX = e.pageX,
            mY = e.pageY;
        const obj = $(el);

        const customDist = 20 * obj.data('dist') || 80,
            centerX = obj.offset().left + obj.width() / 2,
            centerY = obj.offset().top + obj.height() / 2;

        var deltaX = Math.floor((centerX - mX)) * -.4,
            deltaY = Math.floor((centerY - mY)) * -.4;

        var distance = calcDistance(obj, mX, mY);

        if (distance < customDist) {
            TweenMax.to(obj, .4, {
                y: deltaY,
                x: deltaX
            });
        } else {
            TweenMax.to(obj, .4, {
                y: 0,
                x: 0
            });
        }
    }

    function calcDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }

    //--------------------------------------------------
    // Zoom Image菜单
    //--------------------------------------------------

    mediumZoom(document.querySelectorAll('.cover'), {
        background: '#000',
    })

    var workSlide = new Swiper('.swiper-container', {

        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        loop: false,
        centeredSlides: false,
        speed: 900,
        spaceBetween: 0,
        mousewheel: true,

    });

    workSlide.on('slideChange', function () {
        TweenMax.to('.text-1', 0.3, {
            y: '80',
         
        })
        TweenMax.to('.text-2', 0.3, {
            y: '80',
         
        })

      
        
    });

    workSlide.on('slideChangeTransitionEnd', function () {
        TweenMax.to('.text-1', 0.3, {
            y: '0',
         
        })
        TweenMax.to('.text-2', 0.3, {
            y: '0',
         
        })
   
    });



    var toggler = $('.menu__toggler');
    var menu = $('.menus');
    toggler.on("click", function () {
        toggler.toggleClass('activez');
        menu.toggleClass('activez');
    });

})(jQuery);