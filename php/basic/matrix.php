<?php
$tech = array(array("vsp","js"),array("vyshak","python"),array("vinayak","solidity"));
for($i=0;$i<3;$i++){
    for($j=0;$j<2;$j++){
        echo $tech[$i][$j]."\t";
    }
    echo "\n";
}