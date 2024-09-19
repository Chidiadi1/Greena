$ (document).ready (function() {

    //HEADER NAVIGATIONS
    $('.menu-btn').click(function() {
        $('nav').slideToggle(500).toggleClass('nav-visible');
    });

    $('.menu-toggle').click(function() {
        $('.menu-btn').toggleClass('open')
        $('.menu-btn').toggleClass('close')
    })

    $('.subBtn').click(function(e) {
        e.preventDefault();
        $('.subMenu').not($(this).next());
        $(this).next('.subMenu').slideToggle();
    })


    //PROGRESS BAR ANIMATION AND FADE EFFECTS    
    function loaderBarsAnimation() {
        const loaderBars = $('.loader-fill');

        loaderBars.each(function() {
            var $bar = $(this);
            var percentage = $bar.attr('data-percentage');
            var barTop = $bar[0].getBoundingClientRect().top;
            var windowHeight = $(window).height();

            if (barTop < windowHeight) {
                $bar.css('width', percentage + '%');
                $('.loader-percentage').fadeIn(7000);
                $('.fade').fadeIn(4000);
            }
        });
    }
    $(window).on('scroll', loaderBarsAnimation);
    $(window).on('load', loaderBarsAnimation);


    //ACCORDION DISPLAY PROPERTIES
    $('.faq-panels').accordion({collapsible: true, animate: 500, heightStyle: 'content', icons: {header: 'ui-icon-caret-1-s', activeHeader: 'ui-icon-caret-1-n'} });


    //FORM SELECT MENU
    $('#cottage').selectmenu()


    //FORM DATE PICKER
    $('.dateInput').datepicker({minDate: new Date(2024, 8, 1), maxDate: new Date(2099, 8, 1), changeMonth: true, changeYear: true, showOtherMonths: true});

})