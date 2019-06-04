<?php /** file:reg.inc.php 用户注册*/  
  
            date_default_timezone_set('prc');/*设置时区*/  
            @$username = htmlspecialchars($_POST['username']);    
            @$password = $_POST['pass'];  
            $password = MD5($password);  
            $email = $_POST['email'];
            //$pic_dir="default.png";  
            $url="login.inc.php";  
        if(isset($_POST['reg'])){  
            /*添加数据需要先连接并选数据库，包含conn.inc.php文件连接数据库*/  
            include"conn.inc.php";  
  
            $sql_2="SELECT * FROM userdata WHERE username = '$username'";  
            /*执行INSERT语句*/  
              
            $result_2=mysql_query($sql_2,$link);  
            $rows=mysql_fetch_array($result_2);  
            mysql_free_result($result_2);  
  
              
            if($rows>0){  
                echo "<script type='text/javascript'>alert('用户名已存在');location='javascript:history.back()';</script>";   
  
            }else{  
                /*根据用户通过POST提交的数据组合插入数据库的SQL语句*/  
                if(strlen($username)>=5&&strlen($pass)>=6){  
                $sql = "INSERT INTO userdata(username,pass,regdate,pic) VALUES('".$username."','".$password."','".$email."')";               
                $result=mysql_query($sql,$link);  
                echo "<script> alert('用户注册成功！'); </script>";  
                echo "<meta http-equiv='Refresh' content='0;URL=$url'>";  
                }  
            }  
              
        }     
?>  