$(document).ready(function () {
    $('.toggleButton').click(function (event) {
        event.preventDefault(); // 阻止點擊時跳轉到頁面頂部
        $('#content').slideToggle();
    });
});

$(document).ready(function () {
    $('.toggleButton2').click(function (event) {
        event.preventDefault(); // 阻止點擊時跳轉到頁面頂部
        $('#content2').slideToggle();
    });
});

$(document).ready(function () {
    $('.toggleButton3').click(function (event) {
        event.preventDefault(); // 阻止點擊時跳轉到頁面頂部
        $('#content3').slideToggle();
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var triggerHeight = windowHeight * 0; // 網頁高度的一半

        $('.trip').each(function () {
            var tripTop = $(this).offset().top;
            var scrollTop = $(window).scrollTop();

            if (tripTop < scrollTop + triggerHeight) {
                $(this).addClass('triggered');
            }
        });
    });

    // Check the position on page load
    $(window).scroll();
});

// nav 淡入加限制滑動
$(document).ready(function () {
    // 點擊漢堡按鈕時顯示或隱藏導航欄
    $('.burger-menu').click(function () {
        $('.Nav ul').fadeToggle(function () {
            // 淡入完成后执行的回调函数
            if ($('.Nav ul').is(':visible')) {
                $('body').css('overflow', 'hidden'); // 隱藏頁面滾動
                $(window).on('scroll', disableScroll); // 禁止滚动事件
            } else {
                $('body').css('overflow', 'auto'); // 啟用頁面滾動
                $(window).off('scroll', disableScroll); // 啟用滚动事件
            }
        }); // 使用 fadeToggle 方法來實現淡入和淡出效果
    });

    // 禁止滚动事件的函数
    function disableScroll() {
        window.scrollTo(0, 0); // 将页面滚动至顶部
    }
});

$(document).ready(function(){
    $("#footer_back").click(function(){
        $('html, body').animate({scrollTop : 0}, "easeInOutExpo");
    });
});



