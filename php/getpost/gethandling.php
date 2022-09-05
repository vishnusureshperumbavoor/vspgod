    <?php
    if(isset($_GET['name']) && isset($_GET['email'])){
        echo "Welcome ". $_GET["name"] ."<br>";
        echo "Your email address is ". $_GET["email"];
    }

#information send is visible to everyone