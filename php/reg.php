<?php
$username = $_POST[username];
$pass = $_POST[pass];
$email = $_POST[email];


$url = "localhost";
$user = "root";
$password = "root";

$con = mysql_connect($url,$user,$password);

mysql_query("set names 'utf8'");

mysql_select_db("smgy");

$sql = "INSERT into users (username,pass,email) values('$username','$pass','$email')";

if(!mysql_query($sql,$con)){
	die('Error' . mysql_error());
}


mysql_close($con);
?>