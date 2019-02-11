<?php 
header('content-type:text/html;charset=utf-8');
$userName = $_POST["username"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "SELECT * from users where userName='{$userName}' ";
$a=$mysqli->query($sql);
$arry=$a->fetch_row();
for($i=4;$i<count($arry);$i++){
      if($arry[$i]){
          $detail=explode("||",$arry[$i]);
          echo '
           <li><img src="img/close.png" class="close" alt="关闭"/><img src="'.$detail[0].'" class="product" alt="商品图"/>
                <p>'.$detail[1].'</p>
                <p>'.$detail[2].'</p>
                <p>'.$detail[3].'</p>
                <p>'.$detail[4].'</p>
                <p>'.$detail[5].'</p>
                <p>'.$detail[6].'</p>
                <p>'.$detail[7].'</p>
            </li>
          ';
      }
    }
  

?>