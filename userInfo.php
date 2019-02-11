<?php
header('content-type:text/html;charset=utf-8');
$username = $_POST["username"];
//$_POST 变量用于收集来自 method="post" 的表单中的值。
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$check="SELECT * from `users` where userName='{$username}'";
$a=$mysqli->query($check);
$row=mysqli_fetch_assoc($a);
echo $row['userNickname'];
echo "||";
echo $row['imgsrc'];


//向数据库中添加写的数据
?>