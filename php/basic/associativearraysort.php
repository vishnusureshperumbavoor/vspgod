<?php
$tech = array("asp"=>"cavascript","byshak"=>"bython","cinayak"=>"aolidity");
echo "vsp loves $tech[vsp]\n";
echo "\n";
foreach($tech as $t => $value){
    echo "$t loves $value\n";
}
echo "ascending order according to the value\n";
asort($tech);
foreach($tech as $t => $value){
    echo "$t loves $value\n";
}
echo "ascending order according to the key\n";
ksort($tech);
foreach($tech as $t => $value){
    echo "$t loves $value\n";
}
echo "descending order according to the value\n";
arsort($tech);
foreach($tech as $t => $value){
    echo "$t loves $value\n";
}
echo "descending order according to the key\n";
krsort($tech);
foreach($tech as $t => $value){
    echo "$t loves $value\n";
}