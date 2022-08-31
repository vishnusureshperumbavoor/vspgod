<?php
$tech = array("vsp"=>"js","vyshak"=>"python","vinayak"=>"solidity");
echo "vsp loves $tech[vsp]\n";
foreach($tech as $t => $value){
    echo "key = $t \t value = $value\n";
}