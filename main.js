var num1 = +prompt('ВВедите первое число');
var num2 = +prompt('ВВедите второе число');
var num3 = +prompt('ВВедите третье число');
if(num1 > num2 && num1 < num3){
    alert(num1 + ' Наибольшее число');
}
else if(num2 > num1 && num2 < num3){
    alert(num2 + ' Наибольшее число');
}
else if(num3 > num1 && num3 < num2){
    alert(num3 + ' Наибольшее число');
}
else{
    alert('Error');
}