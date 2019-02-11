<?php
header('content-type:text/html;charset=utf-8');
$username = $_POST["username"];
//$_POST 变量用于收集来自 method="post" 的表单中的值。
$productAll = $_POST["productAll"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$check="SELECT * from `users` where userName='{$username}'";
$attr=$mysqli->query($check);
$row=$attr->fetch_row();
$zhizhen=1;
for($i=0;$i<count($row);$i++){
    if(!$row[$i]){
$sql = "UPDATE `users` set collect".($i-3)."='{$productAll}' where userName='{$username}'";
$mysqli->query($sql);
$zhizhen=0;
 echo "<p class='addSuccess'>添加成功</p>";
  break;
 
    }
  
};
if($zhizhen){
    echo "<p class='addSuccess'>添加失败，购物车满了</p>";
}


//向数据库中添加写的数据
?>