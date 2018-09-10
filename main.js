// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2 т.к. сначала идет отперация увеличения на 1, а потом присваивания
// d = b++; alert(d); // 1  сначала идет операция вывода с = b, потом b увеличивается на 1
// c = (2+ ++a); alert(c); // 5 2+3 а сначала увеличилось на 1, а потом прибавили к 2
// d = (2+ b++); alert(d); // 4 2+2, сначала прибавили, после этого b увеличился на 1
// alert(a); // 3
// alert(b); // 3

// var a = 2;
// var x = 1 + (a *= 2); //а сначала умножаем на 2 и присваиваем в а. итого а=4. после прибавляем 1 и получаем х = 5
// alert (x);


// var a = -8, b = -10;
// var result;

// if ( a >= 0 && b >= 0) {
// 	result = a - b;
// 	alert (result);
// } else if ( a < 0 && b < 0) {
// 	result = a * b;
// 	alert (result);
// } else {
// 	result = a + b;
// 	alert (result);
// }


// var a;
// a = +prompt ('Введите число от 0 до 15');

// switch (a) {
// 	case 0:
// 		alert(0);
// 	case 1:
// 		alert(1);
// 	case 2:
// 		alert(2);
// 	case 3:
// 		alert(3);
// 	case 4:
// 		alert(4);
// 	case 5:
// 		alert(5);
// 	case 6:
// 		alert(6);
// 	case 7:
// 		alert(7);
// 	case 8:
// 		alert(8);
// 	case 9:
// 		alert(9);
// 	case 10:
// 		alert(10);
// 	case 11:
// 		alert(11);
// 	case 12:
// 		alert(12);
// 	case 13:
// 		alert(13);
// 	case 14:
// 		alert(14);
// 	case 15:
// 		alert(15);
// }


function summa(n,m) {
	res = n + m;
	return (res);
}
summa (5, 2);
alert ('Сумма чисел: ' + res);

function razn(n,m) {
	res = n - m;
	return (res);
}
razn (5, 2);
alert ('Разница чисел: ' + res);


function mnog(n,m) {
	res = n * m;
	return (res);
}
mnog (5, 2);
alert ('Умножение чисел: ' + res);


function del(n,m) {
	res = n / m;
	return (res);
}
del (5, 2);
alert ('Деление чисел: ' + res);




function mathOperation( k, l, operation) {
	switch (operation) {
		case summa:
			res = k + l;
			break;
		case razn:
			res = k - l;
			break;
		case mnog:
			res = k * l;
			break;
		case del:
			res = k / l;
			break;
	}
	alert (res);
}

mathOperation (3, 5, summa);



function power(val, pow) {
	if (pow != 1) {
		return val * power( val, pow - 1);
	} else {
		return val;
	}
}

alert ( power (2, 3) );