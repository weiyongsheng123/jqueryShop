$(window).on("load", function () {

    //设置背景图片的高宽为浏览器分辨率
    $("#zhucebg").css({"width":window.screen.width,"height":window.screen.height});
    //设置覆盖背景图片的高宽也为浏览器的分辨率
    $("#fugai").css({"width":window.screen.width,"height":window.screen.height});

    $("input[type=password]").focus(function () {//在旁边显示五阿哥
        $(".one").css("backgroundImage", "url('img/wu22.png')");
        $(".two").css("backgroundImage", "url('img/wu21.png')");
    }).blur(function () {
        $(".one").css("backgroundImage", "url('img/wu11.png')");
        $(".two").css("backgroundImage", "url('img/wu12.png')");
    });

    $(".touxiang").find("li").click(function () {
        var $newSrc = $(this).find("img").attr("src");
        $(this).find("img").addClass("selected").parent().siblings().find("img").removeClass("selected");
        $("input[type=hidden]").val($newSrc);
    });


    $(".submit").click(function () {//点击时判断密码 src等是否符合条件
        // alert($("input[type=file]").val());
        var $passw1 = $("input[type=password]").eq(1).val();
        var $passw2 = $("input[type=password]").eq(0).val();
        if ($passw1 == $passw2) {
            $("input[type=password]").eq(1).next().html("");
        }
        else {
            $("input[type=password]").eq(1).next().html("两次不一致");
            return false;

        }

        if ($("input[type=file]").val()) {
            $("input[type=hidden]").val("1");
        }
        var $oldSrc = $("input[type=hidden]").val();
        if ($oldSrc == '') {
            $(".fileSelect").css("color", "red");
            $(".touxiang p").find("span").html("!!!!，扑街仔");
            return false;

        }
        else {
            $(".fileSelect").css("color", "black");
            $(".touxiang p").find("span").html("");
        }
    });

    $("#content").find("form").submit(function () {
        var gnl = confirm("魏勇胜真帅，认同点击确定O(∩_∩)O哈哈~");
        if (gnl == true) {
            return true;
        } else {
            return false;
        }

    });

    $(document).keypress(function (e) {
        if (e.which == 13) {
            $(".submit").click();
        }
    });
})