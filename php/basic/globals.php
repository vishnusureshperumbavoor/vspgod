<?php 
$x = 75;
$y = 25;
function add(){
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
add();
echo $z;