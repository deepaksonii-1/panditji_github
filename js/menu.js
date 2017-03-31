            $(document).ready(function() {

                $('.burger_menu img').on('click', function() {
                    $('.burger').slideToggle(500);
                });


                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        $('.burger_menu').css("opacity", "0.5");
                    } else {
                        $('.burger_menu').css("opacity", "1");
                    }
                });

                $(window).scroll(function() {
                    var scrollTop = $(this).scrollTop();
                    $('.parallax').css('top', -(scrollTop * .4) + 'px');
                });

            });