
$(window).on("load", function () {
    $("#nav").find("a").click(function () {//实现导航栏显现
        $(this).parent().siblings().find(".jnNav").hide();
        $(this).next().toggle();
    });
    /********************************************************/
    $("#skin li").click(function () {//利用cookie实现切换皮肤
        var id = this.id;
        $("#cssfile").attr("href", "css/" + id + ".css");
        setCookie("Mycss", id, 100);
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    var cookies_skin = getCookie("Mycss");
    if (cookies_skin) {
        $("#cssfile").attr("href", "css/" + cookies_skin + ".css");
        setCookie("Mycss", cookies_skin, 100);
        $("#" + cookies_skin).addClass("selected").siblings().removeClass("selected");
    };

    /********************************************************/
    var index = 0;
    var timer = setInterval(function () {
        showImage(index);
        index++;
        var liLength = $("#JS_imgWrap").find("img").length;
        if (index >= liLength) {
            index = 0;
        }
    }, 3000);
    $("#jnImageroll div a").mouseover(function () {//将大屏显示栏的的显示图片更换
        index = $("#jnImageroll div a").index(this);//找到当前操作的对象在所有中排第几，索引
        showImage(index);
        clearInterval(timer);

    }).mouseout(function () {
        timer = setInterval(function () {
            showImage(index);
            index++;
            var liLength = $("#JS_imgWrap").find("img").length;
            if (index >= liLength) {
                index = 0;
            }
        }, 3000);
    });
    /********************************************************/

    $("#jnBrandTab li a").click(function () {//对下列展示栏标签显示，及点击后下列内容移动
        var $leftSet = $(this).parent().width();
        $("#jnBrandTab li img").css("left", $leftSet / 2 - 5);

        $(this).parent().addClass("chos")
            .siblings().removeClass("chos");
        var idx = $("#jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
    /********************************************************/
    $("#jnBrandList li").each(function (index) {  //对下列产品展示增加移动显示放大镜
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height() - 34;
        var spanHtml = '<span style=" position:absolute;top:0;left:0;width:' + img_w + 'px;height:' + img_h + 'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    });
    $("#jnBrandList li").on("mouseover", function () {
        $(this).siblings().find(".imageMask").removeClass("imageOver");
        $(this).find(".imageMask").toggleClass("imageOver");

    });
    /********************************************************/

    $(".imgList li").live("click", function () {//选择展示衣服
        $(this).addClass("selected").siblings().removeClass("selected");
        var $src = $(this).find("img").attr("src");
        var $alt = $(this).find("img").attr("alt");
        $(".showBig").find("a").attr({ "href": $src, "title": $alt });
        $(".jqzoomWrap").find("a").attr({ "href": $src, "title": $alt });
        $(".jqzoomWrap").find("img").attr({ "src": $src, "title": $alt, "alt": $alt });
    });
    /********************************************************/
    $(".chooseColor li").live("click", function () {//选择衣服颜色
        $(this).addClass("selected").siblings().removeClass("selected");
        var $colorTitle = $(this).attr("title");
        $(this).parent().parent().prev().find("span").html($colorTitle);
    });
    /********************************************************/
    $(".chooseSize li").live("click", function () {//选择衣服尺寸
        $(this).find("button").addClass("selected").parent().siblings().find("button").removeClass("selected");
        var $clothSize = $(this).find("span").html();
        $(this).parent().prev().find("span").html($clothSize);
    });
    /********************************************************/
    $(".score").find("li").live("mouseover", function () {//选择星级
        var $starIndex = $(this).index();
        for (var i = 0; i <= $starIndex; i++) {
            $(".score").find("li").eq(i).find("img").attr("src", "img/light.png").addClass("lightNumber");
        }
        var $starLength = $(".score").find("li").length;
        for (var i = $starLength; i > $starIndex; i--) {
            $(".score").find("li").eq(i).find("img").attr("src", "img/dark.png").removeClass("lightNumber");
        }
    });
    /********************************************************/
    $("#number").live("click", function () {//计算总价
        var $number = $("#number").find("option:selected").attr("value");
        var $oneMoney = $(".cheapMoney").find("span").html();
        var $total = $oneMoney * $number;
        $(".total").find("span").html($total);
    });
    /********************************************************/
    $(".tab_menu").find("li").live("click", function () {//产品详细条
        var tab_menu_index = $(this).index();
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tab_box").find("div").eq(tab_menu_index).removeClass("hide").siblings().addClass("hide");
    });
    /********************************************************/
    var brandStatus = true;
    var $lastBrandName = '';//加载brand的内容

    $(".jnCatainfo").find("li").click(function () {//加载左侧菜单栏brand的内容
        $(".jnCatainfo").find("li").removeClass("selectColor");
        $(this).addClass("selectColor");
        if (brandStatus) {
            brandStatus = false;
            var $brandName = $(this).find("a").html();
            showDetail($brandName);
        }
        $(document).ajaxStop(function () { brandStatus = true; });

    });
    $("#jnBrandList").find("li").click(function () {//加载下侧菜单栏brand的内容
        if (brandStatus) {
            brandStatus = false;
            var $brandName = $(this).find("img").attr("alt");
            showDetail($brandName);
        };
        $(document).ajaxStop(function () { brandStatus = true; });
    });
    $(".jnNav").find("dd").click(function () {//添加导航栏点击事件
        $(".jnNav").find("dd").removeClass("selectColor");
        $(this).addClass("selectColor");
        var $ycs = $(this).text();
        $(".jnCatainfo").find("li:contains(" + $ycs + ")").click();
    });
    $("#jnImageroll>a").find("img").click(function () {
        if (brandStatus) {
            brandStatus = false;
            var $brandName = $(this).attr("alt");//添加大广告图栏事件
            showDetail($brandName);
        }
        $(document).ajaxStop(function () { brandStatus = true; });
        return false;
    });
    $("#jnImageroll>div").find("a").click(function () {
        if (brandStatus) {
            brandStatus = false;
            var $brandName = $(this).attr("title");//添加大广告图栏下列图标事件
            showDetail($brandName);
        }
        $(document).ajaxStop(function () { brandStatus = true; });
        return false;
    });
    /********************************************************/
    var $ingf = $(location).attr("href");//设置传入用户的信息
    if ($ingf.indexOf("?") >= 0) {
        var a1 = $ingf.split("?");
        var a2 = a1[1].split("&");
        var a3 = a2[0].split("=");
        $.ajax({
            url: "userInfo.php",
            type: "POST",
            data: { username: a3[1] },
            success: function (data) {

                if (data.indexOf("<script")) {
                    var data1 = data.split("<script")[0];
                }
                else {
                    var data1 = data;
                }
                var a4 = data1.split("||");
                $(".information a").find("span").html(a4[0]);
                $(".information a").find("img").attr("src", a4[1]);
                $(".information a").attr("href", "myown.html?username=" + a3[1]);
            },
            error: function () {
                alert("出现了意料外的错误");
            }
        });
        if (a2[1]) {//设置传入product信息
            var a5 = a2[1].split("=");
            var prn = decodeURI(a5[1]);//对url中中文汉字乱码进行解码
            $.ajax({
                url: "productDetail.php",
                type: "POST",
                data: { productName: prn },
                success: function (data) {
                    var $productDetail1 = '<div id="jnProitem"></div>';
                    var $productDetail2 = '    <div id="jnDetails">     </div>'
                    $("#jnMoreshow").remove();
                    $(".janeshop").append($productDetail1);
                    $(".janeshop").append($productDetail2);
                     if (data.indexOf("<script") >= 0) {
                                    var data7 = data.split("<script")[0];

                                }
                                else {
                                    var data7 = data;

                                }
                    var $backData = data7.split("||");
                    var $jnProitem = $backData[0];
                    $("#jnProitem").append($jnProitem);
                    var $jnDetails = $backData[1];
                    $("#jnDetails").append($jnDetails);

                    /********************************************************/
                    $('.jqzoom').jqzoom({//插件必须在被绑定元素生成后绑定才可生效，因此跟在元素创建代码后

                        zoomType: 'standard',//默认值：’standard’，另一个值是’reverse’，是否将原图用半透明图层遮盖。
                        lens: true,//默认值：true，若为false，则不在原图上显示镜头。
                        preloadImages: false,//布尔值，表示是否重新加载大图像。
                        alwaysOn: false,
                        zoomWidth: 300,//默认值：200，放大窗口的宽度。
                        zoomHeight: 300,//默认值：200，放大窗口的高度。
                        xOffset: 10,//默认值：10，放大窗口相对于原图的x轴偏移值，可以为负。
                        yOffset: 0,//默认值：0，放大窗口相对于原图的y轴偏移值，可以为负。
                        position: 'right'//默认值：’right’，放大窗口的位置，值还可以是:’right’ ,’left’ ,’top’ ,’bottom’。
                        //showEffect: 大图像加载时的特效，可选值:"show"表示直接显示，"fadein"由透明度渐变载入效果。
                        //hideEffect：大图像隐藏特效，可选值："hide"表示直接隐藏，"fadeout"透明度渐变隐藏。　
                        //imageOpacity:　当zoomType的值为"reverse"时，用来设置非选中区域透明度的值。取值范围在(0.0-1.0)间。
                        //fadeinSpeed:当大图像的载入特效设为"fadein"时，此属性可设置特效的时间，可选值为'fast','slow',number分别代表，快慢，毫秒数。
                        //fadtoutSpeed:　 当大图像的隐藏特效设为"fadeout"时，此属性可设置特效载的时间，可选值为'fast','slow',number分别代表，快慢，毫秒数。　
                    });
                },
                error: function () {
                    alert("出现了意料外的错误，请重试");
                }
            });
        }


    }
    /********************************************************/
    //$(".showEach ul").on("click","li",function(){alert("aa")});//1.7以后版本
    var productStatus = true;
    $(".showEach").find("li").live("click", function () {//为添加的product列表添加点击查看产品详情的事件
        if (productStatus) {
            productStatus = false;
            var $productName = $(this).find("a").text();

            $(location).attr('href', 'detail.html?username=' + a3[1] + '&productname=' + $productName);
        }

    });

    /********************************************************/
    $("#backBefore").live("mouseover", function () {//返回上一级
        $(this).animate({ width: "55px", height: "45px" }, 300);
        $(this).find("img").attr("src", "img/backBefore2.png");
    }).live("mouseout", function () {
        $(this).animate({ width: "50px", height: "40px" }, 300);
        $(this).find("img").attr("src", "img/backBefore1.png");
    }).live("click", function () {
        var navv = document.getElementById("backmain");
        navv.click();

    });


    /********************************************************/
    $("#addShopCar").live("click", function () {//为加入购物车添加确认弹窗
        $("#ensureShopcar").show();
        $("#opciaty").show();
        var $selectProductname = $("#jnDetails>h2").text();
        var $selectPrice = $(".cheapMoney").find("span").text();
        var $selectColor = $(".chooseColor").prev().find("span").text();
        var $selectSize = $(".chooseSize>p").find("span").text();
        var $selectNumber = $("#number").find("option:selected").attr("value");
        var $selectTotal = $(".total").find("span").text();
        var $selectStar = $(".score>ul").find(".lightNumber").length;
        $("#ensureShopcar p").eq(0).find("span").text($selectProductname);
        $("#ensureShopcar p").eq(1).find("span").text($selectPrice + "元");
        $("#ensureShopcar p").eq(2).find("span").text($selectColor);
        $("#ensureShopcar p").eq(3).find("span").text($selectSize);
        $("#ensureShopcar p").eq(4).find("span").text($selectNumber);
        $("#ensureShopcar p").eq(5).find("span").text($selectTotal + "元");
        $("#ensureShopcar p").eq(6).find("span").text($selectStar);
        $("#ensureShopcar img").live("click", function () {
            $("#ensureShopcar").hide();
            $("#opciaty").hide();
        });
    });
    /********************************************************/
    $("#ensureShopcar>button").live("click", function () {//提交收藏购物车数据

        var $productAll = $(".jqzoomWrap>a").attr("href");
        for (var i = 0; i < $("#ensureShopcar p").length; i++) {
            $productAll += "||";
            $productAll += $("#ensureShopcar p").eq(i).text();

        }
        $.ajax({
            url: "shoucang.php",
            type: "POST",
            data: { username: a3[1], productAll: $productAll },
            success: function (data) {
                 if (data.indexOf("<script") >= 0) {
                                    var data12 = data.split("<script")[0];

                                }
                                else {
                                    var data12 = data;

                                }
                $("#ensureShopcar").html(data12);
                var timer = setTimeout(function () {
                    $("#ensureShopcar").hide();
                    $("#opciaty").hide();
                    clearTimeout(timer);
                }, 1000);
            },
            error: function () {
                alert("出现了意料之外的错误！");
            }
        });

    });
    /********************************************************/
    $(document).ajaxStart(function () {//当有ajax触发时加载loading图片

        $("#loading").show();
    });

    $(document).ajaxStop(function () {
        $("#loading").hide();
    });
    /********************************************************/
    $("#inputSearch").keydown(function (e) {//为搜素框添加回车提交事件
        var event = event || e;
        if (event.keyCode == 13) {
            if (brandStatus) {
                brandStatus = false;
                var $brandName = $(this).val();
                showDetail($brandName);
                $(this).val("");
            }
            $(document).ajaxStop(function () { brandStatus = true; });
        }
    });
       $(".search>img").click(function(){//为搜索框添加点击提交
         if (brandStatus) {
                brandStatus = false;
                var $brandName = $("#inputSearch").val();
                showDetail($brandName);
                $("#inputSearch").val("");
            }
            $(document).ajaxStop(function () { brandStatus = true; });
    });
    /********************************************************/
    $("#liuyan").click(function () {//添加进入留言板的点击事件
        if (a3[1]) {
            $(location).attr('href', 'liuyanban.html?username=' + a3[1]);
        }
    });

});






/*endendendendendendendendendendendendendendendendendendendend*/
function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + "=" + value + ";expires=" + oDate;
}

function getCookie(name) {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split("=");
        if (arr1[0] == name) {
            return arr1[1];
        }
    }
    return null;
}

function showImage(index) {
    var $newHref = $("#jnImageroll").find("div a").eq(index).attr("href");
    $("#JS_imgWrap").attr("href", $newHref).find("img").eq(index).fadeIn()
        .siblings().fadeOut();
    $("#jnImageroll").find("div a").removeClass("chos").css("opacity", "0.7")
        .eq(index).addClass("chos").css("opacity", "1");
}

function showBrandList(index) {
    var rollWidth = $("#jnBrandContent").width();
    $("#jnBrandList").stop(true, false).animate({ left: -rollWidth * index + "px" }, 1000);
}


function showDetail($brandName) {
    $("#jnMoreshow").remove();
    var $jnMoreShow = '<div id="jnMoreshow"><div id="backBefore"><img src="img/backBefore1.png" alt="上一级"/></div><div class="showEach"> <ul> </ul> </div> </div>';
    $(".janeshop").append($jnMoreShow);
    $("#jnProitem").remove();
    $("#jnDetails").remove();
    $lastBrandName = $brandName;
    $.ajax({
        url: "showBrand.php",
        type: "POST",
        data: { brandName: $brandName },
        success: function (data) {
            $("#jnImageroll").remove();
            $("#jnNotice").remove();
            $("#jnBrand").remove();

            if (data.indexOf("<script") >= 0) {
                var data2 = data.split("<script")[0];

            }
            else {
                var data2 = data;

            }
            var $productList = JSON.parse(data2);
            if ($productList[0] == 'none') {
                $("#jnMoreshow").append($productList[1]);
            }
            else {

                for (var i = 1; i < $productList.length; i++) {
                    if ($productList[i]) {
                        $.ajax({
                            url: "showProduct.php",
                            type: "POST",
                            data: { productName: $productList[i] },
                            success: function (data) {
                                if (data.indexOf("<script") >= 0) {
                                    var data6 = data.split("<script")[0];

                                }
                                else {
                                    var data6 = data;

                                }
                                $(".showEach").find("ul").append(data6);
                                brandStatus = true;
                            }
                        })
                    }
                }
            }

        }
    });
}