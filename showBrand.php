<?php 
header('content-type:text/html;charset=utf-8');
$brandName = $_POST["brandName"];
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
$sql = "SELECT * from brand where brandName='{$brandName}' ";
$a=$mysqli->query($sql);
$row=$a->fetch_row();
//print_r($row);
//echo $row[1];
if($row){
echo json_encode($row,JSON_UNESCAPED_UNICODE);
}
else{
    $arry=array();
    $arry[0]='none';
    $arry[1]='<h1 style="font-size:3.0em;font-weight:bold;margin-left:100px;">┗|｀O′|┛ 嗷~~ 查无匹配项</h1>';
    echo json_encode($arry,JSON_UNESCAPED_UNICODE);
}

?>