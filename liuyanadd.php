<?php
header('content-type:text/html;charset=utf-8');

$username = $_POST["username"];
$liuyan = $_POST["liuyan"];
$time = $_POST["time"];
//$_POST 变量用于收集来自 method="post" 的表单中的值。
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "INSERT into message VALUES ('{$username}','{$liuyan}','{$time}')";
$mysqli->query($sql);



//向数据库中添加写的数据
?>
