$(window).on("load", function () {
    $("body").css("backgroundSize", window.screen.width + "px " + (window.screen.height - 50) + "px");
   loadall();

    $(".submit").click(function () {
        if(!$(".input").val()){
            alert("不能输入空值");
            return false;
        }
         var $ingf = $(location).attr("href");//设置传入用户的信息
        if ($ingf.indexOf("?") >= 0) {
           
            var a1 = $ingf.split("?");
            var a2 = a1[1].split("&");
            var a3 = a2[0].split("=");
             var $liuyan = $(".input").val();
            $(".input").val('');
           var $username='';
             $.ajax({
            url: "userInfo.php",
            type: "POST",
            data: { username: a3[1] },
            success: function (data) {
                 if (data.indexOf("<script") >= 0) {
                                    var data10 = data.split("<script")[0];

                                }
                                else {
                                    var data10 = data;

                                }
                var a4 = data10.split("||");
                  $username=a4[0];
                 
            var $time = new Date();
            var $time1 = '';
            $time1 += $time.getFullYear();
            $time1 += '-';
            $time1 += parseInt($time.getMonth()) + 1;
            $time1 += '-';
            $time1 += $time.getDate();
            $.ajax({
                url: "liuyanadd.php",
                type: "POST",
                data: {username:$username,liuyan:$liuyan,time:$time1 },
                success: function () {
                    
                    loadall();

                },
                error: function () {
                    alert("出现了意料外的错误，请重试!");
                }

            });
            },
            error: function () {
                alert("出现了意料外的错误");
            }
        });
            
        }
        else {
            alert("非用户进入，不可提交");
        }
    });

    $(".input").keypress(function(e){
    var event=event||e;
    if(event.which==13){
         $(".submit").click();
    }
});

 $(document).ajaxStart(function () {//当有ajax触发时加载loading图片

        $("#loading").show();
    });

    $(document).ajaxStop(function () {
        $("#loading").hide();
    });
        $("#backshouye").click(function(){//回到首页事件
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
})
function loadall(){
     $.ajax({
        url: "liuyanshowall.php",
        type: "POST",
        success: function (data) {
             if (data.indexOf("<script") >= 0) {
                                    var data11 = data.split("<script")[0];

                                }
                                else {
                                    var data11 = data;

                                }
             $("#main>ul").html('');
            $("#main>ul").append(data11);

        },
        error: function () {
            alert("出现了意料外的错误，请重试!");
        }
    });
}