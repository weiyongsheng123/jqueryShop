$(window).on("load",function(){
                     //为添加的product列表添加点击查看产品详情的事件
   
            $.ajax({
                url: "productDetail.php",
                type: "POST",
                data: { productName: $a4[1] },
                success: function (data) {
                    var $productDetail1 = '<div id="jnProitem"><div id="backBefore"><img src="img/backBefore1.png" alt="上一级"/></div> </div>';
                    var $productDetail2 = '    <div id="jnDetails">     </div>'
                    $("#jnMoreshow").remove();
                    $(".janeshop").append($productDetail1);
                    $(".janeshop").append($productDetail2);
                    if (data.indexOf("<script") >= 0) {
                                    var data9 = data.split("<script")[0];

                                }
                                else {
                                    var data9 = data;

                                }
                    var $backData = data9.split("||");
                    var $jnProitem = $backData[0];
                    $("#jnProitem").append($jnProitem);
                    var $jnDetails = $backData[1];
                    $("#jnDetails").append($jnDetails);
                    productStatus = true;
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
});
