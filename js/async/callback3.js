function display(temp){
    console.log(temp);
}
function myfirst(){
    display("hello")
}
myfirst() 
function calculator(num1,num2){
    return num1+num2;
}
display(calculator(10,5)) // calculator function passed as an arguement to display function