$(window).on("load", function () {
    var $ingf = $(location).attr("href");//设置传入用户的信息
    var a1 = $ingf.split("?");
    var a2 = a1[1].split("&");
    var a3 = a2[0].split("=");
    $.ajax({
        url: "userInfo.php",
        type: "POST",
        data: { username: a3[1] },
        success: function (data) {
             if(data.indexOf("<script")){
                var   data1=data.split("<script")[0];
                }
                else{
                 var   data1=data;
                }
            var a4 = data1.split("||");
            $("#left").find("img").attr("src", a4[1]);
            $(".username p").eq(0).html(a4[0]);
            $(".username p").eq(1).html(a3[1]);
        },
        error: function () {
            alert("出现了意料外的错误");
        }
    });
    $.ajax({
        url: "userShoucang.php",
        type: "POST",
        data: { username: a3[1] },
        success: function (data) {
             if (data.indexOf("<script") >= 0) {
                                    var data13 = data.split("<script")[0];

                                }
                                else {
                                    var data13 = data;

                                }
            $("#right>ul").append(data13);
        },
        error: function () {
            alert("出现了意料外的错误");
        }
    });
    $(document).ajaxStart(function () {//当有ajax触发时加载loading图片

        $("#loading").show();
    });

    $(document).ajaxStop(function () {
        $("#loading").hide();
    });
    var $height = window.screen.height;
    $("body").css("backgroundSize", "100% " + $height + "px");
    var allow = true;
    $("#right>ul").find("li").live("click", function () {//为每个收藏添加点击链接到商品详情页的事件
        if (allow) {
            allow = false;
            $(this).css("backgroundImage", "url('img/liehen.png')");
            var $productName = $(this).find("p").eq(0).text();
            var pdn = $productName.split(":");
            var timer = setTimeout(function () {
                $(location).attr('href', 'detail.html?username=' + a3[1] + '&productname=' + pdn[1]);
                clearTimeout(timer);
            }, 1300);

        }

    });
    $("#liuyan").click(function () {//添加进入留言板的点击事件

        $(location).attr('href', 'liuyanban.html?username=' + a3[1]);
    });

    var shanchu = true;
    $(".close").live("click", function (e) {
       var event = event || e;
        event.stopPropagation();//取消时间冒泡
      var gnl = confirm("真的要删除吗？");
        if (!gnl) {
             shanchu=false;
            return false;
        } 
        if (!shanchu) {
            shanchu=false;
            return false;
           
        }
          shanchu=false;
        var $productname = $(this).parent().find("p").eq(0).text();
        $.ajax({
            url: "shanchu.php",
            type: "POST",
            data: { username: a3[1], productname: $productname },
            success: function () {
                shanchu = true;
                $("#right>ul").html('');
                $.ajax({
                    url: "userShoucang.php",
                    type: "POST",
                    data: { username: a3[1] },
                    success: function (data) {
                         if (data.indexOf("<script") >= 0) {
                                    var data14 = data.split("<script")[0];

                                }
                                else {
                                    var data14 = data;

                                }
                        $("#right>ul").append(data14);
                    },
                    error: function () {
                        alert("出现了意料外的错误");
                    }
                });

            },
            error: function () {
                alert("发生了意料外的错误，请重试");
            }
        })
    });
        var canback=true;
$("#backshouye1").click(function(){//回到首页事件
       if(!canback){
           return false;
       }
        canback=false;
          var $ingf = $(location).attr("href");
          if ($ingf.indexOf("?") >= 0) {
           
            var a1 = $ingf.split("?");
            var a2 = a1[1].split("&");
            var a3 = a2[0].split("=");
            $(location).attr("href","zhuye.html?username="+a3[1]);
          }
          else{
                $(location).attr("href","zhuye.html");
          }
    });
    $("#backshouye2").click(function(){
        $("#backshouye1").click();
    });

})