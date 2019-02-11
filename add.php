<?php
header('content-type:text/html;charset=utf-8');
$username = $_POST["username"];
$userNickname = $_POST["userNickname"];
//$_POST 变量用于收集来自 method="post" 的表单中的值。
$password = $_POST["password"];
$src = $_POST["src"];
if($src=="1"){
  $src="img/touxiang/".$_FILES['file']['name'];
move_uploaded_file($_FILES['file']['tmp_name'],'./img/touxiang/'.$_FILES['file']['name']);
}
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "INSERT into `users` VALUES ('{$username}','{$userNickname}','{$password}','{$src}','','','','','','','','','','')";
//向数据库中添加写的数据
  if($mysqli->query($sql))
{
 header("location:index.html");
  //header() 函数向客户端发送原始的 HTTP 报头。
}
else {
     echo "<p style='color:red;font-size:1.2em;'>用户名已存在</p>";
     echo "3秒后返回注册页面";
    
    header("Refresh:3;url=zhuce.html");
   
}
 
 
?>