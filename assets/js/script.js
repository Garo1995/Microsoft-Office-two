$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        let $this = $(this);
        let $next = $this.next();
        let $parentBox = $this.closest('.questions-box');

        $next.slideToggle();

        if (!e.data.multiple) {
            $el.find('.submenu-faq').not($next).slideUp();
            $el.find('.link').not($this).removeClass('open');
            $el.find('.questions-box').not($parentBox).removeClass('active-box');
        }

        if (!$this.hasClass('open')) {
            $this.addClass('open');
            $parentBox.addClass('active-box');
        } else {
            $this.removeClass('open');
            $parentBox.removeClass('active-box');
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-60;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});




let featuresSwiper = new Swiper(".features-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".features-pagination",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },

        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        620: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});









