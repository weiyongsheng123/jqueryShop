<?php 
header('content-type:text/html;charset=utf-8');
$productName = $_POST["productName"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "SELECT * from product where productName='{$productName}' ";
$a=$mysqli->query($sql);

$row= mysqli_fetch_assoc($a);
//print_r($row);
//echo $row[1];
echo '
                        <li>
                        <img src="'.$row["productSrc1"].'"/>
                        <p>￥'.$row["productMoney1"].'  <span>包邮</span></p>
                        <a href="#">'.$row["productName"].'</a>
                        </li>   

     ';

?>