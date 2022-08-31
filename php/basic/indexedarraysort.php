<?php
$elon = array("tesla","spacex","neuralink","tbc");
foreach($elon as $data){
    echo $data."\t";
}
echo "\n";
sort($elon);
foreach($elon as $data){
    echo $data."\t";
}
echo "\n";
rsort($elon);
foreach($elon as $data){
    echo $data."\t";
}
