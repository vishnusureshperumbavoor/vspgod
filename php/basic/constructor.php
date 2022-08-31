<?php
class Car{
    public $color;
    public $model;
    public function __construct($color,$model){
        $this->color = $color;
        $this->model = $model;
    }
    public function message(){
        return "My car is a " .$this->color. " " .$this->model. "\n";
    }
}
$mycar = new Car("black","volvo");
echo $mycar->message();
$mycar = new Car("red","tesla");
echo $mycar->message();