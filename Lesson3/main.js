// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


/*
var i = 1;

while ( i < 100 ) {
	
	i++;
	if ( i % 2 == 0 ) {
		continue;
	} else {
		for ( var j = 3; j < i; j++ ) {
			if ( i % j == 0 ) {
				continue;
			} else {
				console.log (i);
			}
		}
	}	
}
*/


// С помощью цикла do…while написать функцию для вывода чисел от 0 до 10.

var i = 0;

do {
	console.log ( i + ' - это ноль')
} while ( i == 1 );

i++;
while ( i <= 10 ) {
	if ( i % 2 == 0 ) {
		console.log ( i + ' - это четное число');
		i++;
	} else {
		console.log ( i + ' - это нечетное число');
		i++;
	}
}


//Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.

for ( var m = 0; m < 10; m++ ) 
	console.log( m );


//Нарисовать пирамиду с помощью console.log, у вашей пирамиды должно быть 20 рядов.

var k = 0;
var arr = [];

for ( k = 0; k < 20; k++ ) {
	arr.push ('x');
	console.log ( arr );
}
