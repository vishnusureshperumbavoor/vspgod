<?php 
$company = array("tesla","spacex","neuralink","openai");
foreach($company as $data){
    echo "$data\t";
}
echo "\n";
$tech = array("vsp"=>"js","vyshak"=>"python","vinayak"=>"solidity");
foreach($tech as $key => $data){
    echo "$key = $data\t";
}

// foreach works only in arrays