<?php 
define("name","vsp",true);
$name="crypto";
echo name."\n";
echo $name."\n";

// cannot initialize another define("name","vsp");
// true is added to make it case sensitive. now echo name & echo NAME both works.