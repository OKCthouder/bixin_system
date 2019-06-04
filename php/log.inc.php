<?php  
    /** file:login.inc.php 登录系统的主控制文件和主入口文件*/   
  
            /*声明一个删除Cookie的函数，调用时消除在客户端设置的所以Cookie*/  
            function clearCookies(){  
                //只指定Cookie识别名称一个参数，即删除客户端中这个指定名称的Cookie资料  
                //生存空间默认为空，则生存期限与浏览器一样，浏览器关闭时Cookie就会被删除  
                setcookie('username');  
                setcookie('isLogin');  
            }  
              
            include "conn.inc.php";           
            @$username = htmlspecialchars($_POST['username']);    
            @$password = $_POST['pass'];  
            $password = MD5($password);  
              
            /*如果用户的操作是提交表单,则条件成立*/  
        if(isset($_POST['submit'])){  
            clearCookies();  
  
            $sql = "SELECT * FROM userdata WHERE username = '$username' and pass='$password'";  
            $res = mysql_query($sql,$link);  
            /*mysql_num_rows只能用于select语句*/  
            $rows=mysql_num_rows($res);  
            if($rows>0){  
  
               /*向Cookie中设置标识符为username，值是表单中提交的，期限为一周*/  
               setcookie('username',$username,time()+60*60*24*7);  
               /*向Cookie中设置标识符为isLogin，用来在其它页面检查用户是否登录*/  
               setcookie('isLogin','1',time()+60*60*24*7);  
               /*如果Cookie设置成功则转向网站首页*/  
               header("Location:index.php");//跳转页面，注意路径  
            }else{  
                echo '<font color="red">用户名或密码错误!</font>';  
            }  
        }else if(@$_GET["action"]=="logout"){  
            //退出时消除在客户端设置的所有Cookie  
            clearCookies();  
        }  
?>  