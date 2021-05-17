document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back"
        });

        $(".loading").css("opacity", "0");
        setTimeout(function () {
            $(".loading").hide();
            $("#busuanzi_container_site_uv").removeClass("animate__fadeInUp").addClass("animate__fadeOutDown");
        }, 1500);
        $('body').css('overflow', 'scroll');
    }
};
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > ($(this).height() - 65)) {
            $('#header').css({
                'background-color': 'rgb(68,81,90)',
                'box-shadow': '0px 0px 10px rgba(0,0,0,0.5)'
            });
            $('#topbar').show();
        } else {
            $('#header').css({
                'background-color': 'transparent',
                'box-shadow': '0px 0px 10px rgba(0,0,0,0)'
            });
            $('#topbar').hide();
        }

        brightness = (100 - $(this).scrollTop() / 4);
        opacity = (100 - $(this).scrollTop() / 5) + "%";
        if (brightness > 65) brightness = 65;
        if (brightness < 25) brightness = 25;
        brightness = "brightness(" + brightness + "%)";
        $('.text-contain').css("opacity", opacity);
        $('#video').css("filter", brightness);
    });
    $('.navbar-toggle').click(function () {
        $('.sidebar').show().removeClass("animate__slideOutRight").addClass("animate__slideInRight");
        $('.face').show();
    });
    $('.face').click(function () {
        $('.sidebar').removeClass("animate__slideInRight").addClass("animate__slideOutRight");
        setTimeout(function () {$('.sidebar').hide()},1000);
        $('.face').hide();
    });
    $(".sidebar-ul>a").click(function () {
        if (document.body.clientWidth < 780) {
            console.log(document.body.clientWidth);
            $('.sidebar').css('display', 'none');
            $('.face').css('display', 'none');
        }
    })


});
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800, 'swing');
    return false;
});