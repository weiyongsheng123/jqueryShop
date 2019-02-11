<?php
header('content-type:text/html;charset=utf-8');
$username = $_POST["username"];
//$_POST 变量用于收集来自 method="post" 的表单中的值。
$productname = $_POST["productname"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$check="SELECT * from `users` where userName='{$username}'";
$attr=$mysqli->query($check);
$row=$attr->fetch_row();
for($i=4;$i<count($row);$i++){
    $ensure=strspn($productname,$row[$i]);
  
    if($ensure>=90){
     $sql = "UPDATE `users` set collect".($i-3)."='' where userName='{$username}'";
      $mysqli->query($sql);
    }
}



//向数据库中添加写的数据
?>