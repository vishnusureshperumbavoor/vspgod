<!DOCTYPE html>
<html>
    <body>
        <form action="<?php echo $SERVER['PHP SELF'];?>">
            Name:<input type="text" name="fname">
            <input type="submit">
        </form>
        <?php 
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            if(empty($name)){
                echo "name is empty";
            }else{
                echo $name;
            }
        }
        ?>
    </body>
    </html>