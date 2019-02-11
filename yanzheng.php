<?php
$username='';
$password='';
$username = $_POST["username"];
$password = $_POST["password"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "SELECT * from users WHERE userName='{$username}'";
$a=$mysqli->query($sql);
$row=  mysqli_fetch_assoc($a);
if(!$row){
    echo "账号不存在";
    exit();
}
if( $password ==$row['userPassword']){
    echo $row['imgsrc'];
}
else{
    echo "账号或密码错误";
}
 


//看一下是不是传递过来的Id值；
/*if($mysqli->query($sql))//判断执行sql语句是否成功
{
  header("location:QUERY.php");
}
else{
  echo "修改失败";
}*/
 
 
 
?>
