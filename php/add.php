<?php
require 'config.php';
$query = "INSERT INTO users (username, pass, email)VALUES ('{$_POST['username']}', sha1('{$_POST['pass']}'), '{$_POST['email']}')";
mysql_query($query) or die('新增失败！'.mysql_error());
echo mysql_affected_rows();
mysql_close();
?>