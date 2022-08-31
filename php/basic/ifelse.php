<?php
$t = date("H");
echo $t."\n";
if($t > 6){
    echo "good morning";
}else if($t > 12){
    echo "good afternoon";
}else if($t > 16){
    echo "good evening";
}else{
    echo "good night";
}