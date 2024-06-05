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
