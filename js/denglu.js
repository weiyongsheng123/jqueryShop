$(window).on("load", function () {
    $("#sumbit").click(function () {

        var $username = $("input[type=text]").val();
        var $password = $("input[type=password]").val();

        if ($username == "" || $password == "") {
            var $showresult0 = "<p class='showResult0'>不能有空值</p>";
            $("input[type=password]").after($showresult0);
            return;
        }
        $.ajax({
            url: "yanzheng.php",
            type: "POST",
            data: { username: $username, password: $password },
            success: function (data) {
                 if (data.indexOf("<script") >= 0) {
                                    var data8 = data.split("<script")[0];

                                }
                                else {
                                    var data8 = data;

                                }
                if (data8.indexOf("账号") == -1) {
                    $(location).attr('href', 'zhuye.html?username=' + $username);
                }
                else {
                    $(".showResult0").remove();
                    $(".showResult").remove();
                    var $showresult = "<p class='showResult'></p>";
                    $("input[type=password]").after($showresult);
                    $(".showResult").html(data8);
                }

            },
            error: function (data) {
                alert("提交出现意料外的错误");
            }
        });
    });

$(document).keypress(function(e){
    var event=event||e;
    if(event.which==13){
         $("#sumbit").click();
    }
});
});