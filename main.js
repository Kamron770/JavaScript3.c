var num1 = +prompt('ВВедите первое число');
var num2 = +prompt('ВВедите второе число');
var num3 = +prompt('ВВедите третье число');
if(num1 > num2 && num1 < num3){
    alert(num1 + '  Среднее число');
}
else if(num2 > num1 && num2 < num3){
    alert(num2 + ' Среднее число');
}
else if(num3 > num1 && num3 < num2){
    alert(num3 + '  Среднее число');
}
else{
    alert('Error');
}
