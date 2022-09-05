    <?php
    if(isset($_POST['name']) && isset($_POST['email'])){
        echo "Welcome ". $_POST["name"]."<br>";
        echo "Your email address is ". $_POST["email"];
    }