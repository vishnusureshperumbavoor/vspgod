<?php declare(strict_types=1);
// pass by value
function write($name){
    return "the name is $name\n";
}
$name = "vsp god";
echo write($name);
// type casting return type
function sum(float $a,float $b){
    return (int)($a + $b);
}
echo sum(5.2,10.4)."\n";
//pass by reference
function ref(&$data){
    $data+=5;
}
$num=5;
ref($num);
echo $num;


// declare(strict_types=1); now formal & actual should be same datatype 
