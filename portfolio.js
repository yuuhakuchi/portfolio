// nav 淡入加限制滑動
$(document).ready(function () {
    // 點擊漢堡按鈕時顯示或隱藏導航欄
    $('.burger-menu').click(function () {
        $('.Nav ul').fadeToggle(function() {
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


// 側欄功能

$(document).ready(function() {
    $(".more-btn").click(function(e) {
        e.preventDefault(); // 阻止默认行为，即不跳转到 href 中的链接地址
        var panelId = $(this).data('id'); // 获取 data-id 属性的值
        $(".slidework").removeClass("open").hide(); // 隐藏所有滑动面板
        $("#slidePanel-" + panelId).addClass("open").show(); // 显示对应的滑动面板
    });

    $(".close-btn").click(function(e) {
        e.stopPropagation(); // 防止事件冒泡，避免点击关闭按钮时触发 body 的 click 事件
        $(this).closest(".slidework").removeClass("open").hide(); // 关闭滑动面板
    });

    // 点击 body 时，如果滑动面板已经显示，则不关闭面板
    $("body").click(function() {
        if ($(".slidework").hasClass("open")) {
            return false;
        }
    });
});

$(document).ready(function(){
    $("#footer_back").click(function(){
        $('html, body').animate({scrollTop : 0}, "easeInOutExpo");
    });
});





