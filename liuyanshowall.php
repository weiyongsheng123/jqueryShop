<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$mysqli=mysqli_connect('w.rdc.sae.sina.com.cn','j331jkz22z','l55h5z4khyx00z5hxh4z1zl1kzkk4iy401iz1555','app_myweb123') or die('连接失败');
//写sql语句
$sql = "SELECT * from message";
//执行sql语句返回给r
$r = $mysqli->query($sql);
$arry=array('1','2','3','4');
//将每行读出的数组类型的数据放入一个数组，且数组内标记为0123而不是字段名
if($r)//条件
                            {
                                    while ($attr = $r->fetch_row())
                                      {
                                          $keys = array_rand($arry, 1); 
                                      echo '<li class="li'.$arry[$keys].'">'.$attr[1].'<span>'.$attr[0].'写于'.$attr[2].'</span></li>';
                                            } 
                              } 
?>