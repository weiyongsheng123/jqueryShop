<?php 
header('content-type:text/html;charset=utf-8');
$productName = $_POST["productName"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "SELECT * from product where productName='{$productName}' ";
$a=$mysqli->query($sql);
$row= mysqli_fetch_assoc($a);
$sizeDetail=explode(",",$row["productSize"]);
$size=' <li><button><span>'.$sizeDetail[0].'</span></button></li>
       <li><button><span>'.$sizeDetail[1].'</span></button></li>
         <li> <button><span>'.$sizeDetail[2].'</span></button></li>
        <li><button><span>'.$sizeDetail[3].'</span></button></li>
        <li><button><span>'.$sizeDetail[4].'</span></button></li>';

echo '
                <div class="jqzoomWrap">
                    <a href="'.$row["productSrc1"].'" class="jqzoom"  title="产品图1">
                    <img src="'.$row["productSrc1"].'" title="产品图1" alt="产品图1"></a>

                </div>
                <div class="showBig">
                   <a href="'.$row["productSrc1"].'"> <span><img src="img/fangdajing.jpg" alt="查看详图">观看清晰图片</span></a>
                </div>
                <ul class="imgList">
                    <li><img src="'.$row["productSrc1"].'" alt="产品图1"></li>
                    <li><img src="'.$row["productSrc2"].'" alt="产品图2"></li>
                    <li><img src="'.$row["productSrc3"].'" alt="产品图3"></li>
                    <li><img src="'.$row["productSrc4"].'" alt="产品图4"></li>
                </ul>
              <div style="width: 100%;height: 10px;float: left;">
              </div>
            ';
            echo '||';
echo '
                <h2>'.$row["productName"].'</h2>
                <div class="descript">'.$row["productDescript"].'</div>
                <p class="saleMoney">价格：<span>'.$row["productMoney"].'</span>元</p>
                <p class="cheapMoney">促销：<span>'.$row["productMoney1"].'</span>元</p>
                <p>颜色：<span>未选择</span></p>
                <div class="chooseColor">
                    <ul>
                        <li class="color1" title="草绿"><img src="img/yifubuliao/caolv.jpg"  alt="草绿色"/></li>
                        <li class="color2" title="纯白"><img src="img/yifubuliao/chunbai.jpg"  alt="纯白色"/></li>
                        <li class="color3" title="麻黄"><img src="img/yifubuliao/mahuang.jpg"  alt="麻黄色"/></li>
                        <li class="color4" title="天蓝"><img src="img/yifubuliao/tianlan.jpg"  alt="天蓝色"/></li>
                        </ul>
                </div>
                <div class="chooseSize">
                    <p>尺寸：<span>未选择</span></p>
                    <ul>
                    '.$size.'
                    </ul>
                </div>
                <p class="number">数量:<select name="数量" id="number">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   </select>
                </p>
                <p class="number total">合计：<span>?未选择数量?</span>元</p>
                <p class="number">给商户评分：</p>
                <div class="score">
                    <ul>
                        <li><img src="img/dark.png" alt="一星"></li>
                        <li><img src="img/dark.png" alt="两星"></li>
                        <li><img src="img/dark.png" alt="三星"></li>
                        <li><img src="img/dark.png" alt="四星"></li>
                        <li><img src="img/dark.png" alt="五星"></li>
                    </ul>
                </div>
                        
                <button id="addShopCar">加入购物车</button>
                 <div class="tab">
                    <div class="tab_menu">
                        <ul>
                            <li class="selected">产品属性</li>
                            <li>产品尺码</li>
                            <li>产品介绍</li>
                        </ul>
                    </div>
                    <div class="tab_box">
                        <div>'.$row["productProperty"].'</div>
                        <div class="hide">'.$row["productSize"].'</div>
                        <div class="hide">'.$row["productFell"].'</div>
                    </div>
                </div>
     ';
?>