<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .error{
        color:red;
    }
</style>
<body>
    <?php
    $name=$email=$website=$comment=$gender=null;
    $nameErr=$emailErr=$websiteErr=$genderErr=$commentErr=null;
    
    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
    <h1>PHP FORM VALIDATION EXAMPLE</h1>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
    name : <input type="text" name="name">
    <span class="error">*<?php echo $nameErr;?></span><br><br>
    email : <input type="text" name="email">
    <span class="error">*<?php echo $emailErr;?></span><br><br>
    website : <input type="text" name="website">
    <span class="error">*<?php echo $websiteErr;?></span><br><br>
    comment : <textarea name="comment" rows="5" cols="40"></textarea>
    <span class="error">*<?php echo $commentErr;?></span><br><br>
    gender :
    <input type="radio" name="gender" value="female">Female 
    <input type="radio" name="gender" value="male">Male 
    <input type="radio" name="gender" value="other">Other
    <span class="error">*<?php echo $genderErr;?></span><br><br>
    <input type="submit">
    </form>

    <?php
    echo "<h1>My Inputs</h2>";
    echo "$name<br>";
    echo "$email<br>";
    echo "$website<br>";
    echo "$comment<br>";
    echo "$gender<br>";
    ?>
</body>
</html>