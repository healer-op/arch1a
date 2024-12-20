(function ($) {
    "use strict";
    $(document).ready(function () {
        if ($.fn.niceSelect) {
            $('select').niceSelect();
        }

        $('select').niceSelect();
        $('#wp-calendar td a').parent('td').addClass('has-calendar-link');
        $('.aximo-header-area.sticky-header').wrap('<div class="sticky-wrapper"></div>');
        var headerHeight = $('.sticky-wrapper').height(),
            stickyWrapper = $('.sticky-wrapper');
        stickyWrapper.css('height', headerHeight + "px")
        window.onscroll = function () {
            scrollFunction()
        };


        // scrollToTop button click animation js Start
        function scrollToTop() {
            $('html, body').animate({
                scrollTop: 0
            }, 2000); // You can adjust the speed here (in milliseconds)
        }
        $('.scrollToTop').click(function() {
            scrollToTop();
            return false;
        });
        $('.scrollToTop').hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn(200); // Fade in over 200 milliseconds
            } else {
                $('.scrollToTop').fadeOut(200); // Fade out over 200 milliseconds
            }
        });
        // scrollToTop button click animation js End
        



        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                stickyWrapper.addClass("is-sticky");
            } else {
                stickyWrapper.removeClass("is-sticky");
            }
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                $(".is-sticky .sticky-header").addClass("reveal-header");
            } else {
                $(".is-sticky .sticky-header").removeClass("reveal-header");
            }
        }
        // comment load more button click event
        $('.aximo-comment-loadmore-btn').on('click', function () {
            var button = $(this);
            // decrease the current comment page value
            aximo_comment_loadmore.cpage--;
            $.ajax({
                url: aximo_comment_loadmore.ajaxurl, // AJAX handler, declared before
                data: {
                    'action': 'cloadmore', // wp_ajax_cloadmore
                    'post_id': aximo_comment_loadmore.parent_post_id, // the current post
                    'cpage': aximo_comment_loadmore.cpage, // current comment page
                },
                type: 'POST',
                beforeSend: function (xhr) {
                    button.text('Loading...'); // preloader here
                },
                success: function (data) {
                    if (data) {
                        $('ol.comment-list').append(data);
                        button.text('More comments');
                        // if the last page, remove the button
                        if (aximo_comment_loadmore.cpage == 1)
                            button.remove();
                    } else {
                        button.remove();
                    }
                }
            });
            return false;
        });

        var $temp = $("<input>");
        var $url = $(location).attr('href');
        $('#copy-btn').on('click', function () {

            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            alert('URL copied!');
            $temp.remove();
            $("p").text("URL copied!");

        });
    })
    $(window).load(function () {
        if ($.fn.masonry) {
            $('.blog-content-row .posts-row').masonry({
                // options
                itemSelector: '.posts-row>div',
            });
        }
        setTimeout(function () {
            jQuery(".aximo-preloader-wrap").fadeOut(500);
        }, 500);
        setTimeout(function () {
            jQuery(".aximo-preloader-wrap").remove();
        }, 2000);

        if ('object' != typeof (elementorFrontend)) {


            $('.main-navigation ul.navbar-nav>li').each(function (i, v) {
                $(v).find('a').contents().wrap('<span class="menu-item-text"/>')
            });
            $(".menu-item-has-children > a").append('<span class="dropdownToggle"><i class="fas fa-angle-down"></i></span>');
            if (jQuery('.aximo-main-menu-wrap').hasClass('menu-style-inline')) {
                if (jQuery(window).width() < 1100) {
                    jQuery('.aximo-main-menu-wrap').addClass('menu-style-flyout');
                } else {
                    jQuery('.aximo-main-menu-wrap').removeClass('menu-style-flyout');
                }

                $(window).resize(function () {
                    if (jQuery(window).width() < 1100) {
                        jQuery('.aximo-main-menu-wrap').addClass('menu-style-flyout');
                    } else {
                        jQuery('.aximo-main-menu-wrap').removeClass('menu-style-flyout');
                    }
                })
            }
            function navMenu() {
                // main menu toggleer icon (Mobile site only)
                $('[data-toggle="navbarToggler"]').on("click", function (e) {
                    $('.navbar').toggleClass('active');
                    $('.navbar-toggler-icon').toggleClass('active');
                    $('body').toggleClass('offcanvas--open');
                    e.stopPropagation();
                    e.preventDefault();

                });
                $('.navbar-inner').on("click", function (e) {
                    e.stopPropagation();
                });

                // Remove class when click on body
                $('body').on("click", function () {
                    $('.navbar').removeClass('active');
                    $('.navbar-toggler-icon').removeClass('active');
                    $('body').removeClass('offcanvas--open');
                });
                $('.main-navigation ul.navbar-nav li.menu-item-has-children>a').on("click", function (e) {
                    e.preventDefault();
                    $(this).siblings('.sub-menu').toggle();
                    $(this).parent('li').toggleClass('dropdown-active');
                })
                $(".aximo-mega-menu> ul.sub-menu > li > a").unbind('click'); // Navbar moved up
            }
            navMenu();

        }
    });
})(jQuery);