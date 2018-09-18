//Задача 1.

let obj = {
	
	units: 0,
	tens: 0,
	hundreds: 0

}
let number = +prompt ('Введите число от 0 до 999');

function algoritm( number ) {
	if ( number > 999 ) {
		console.log ('Число больше 999');
		console.log ( obj );
	} else if ( number <= 9 ) {
		return obj.units = number;
	} else {
		obj.units = Math.floor ( number % 10 );
		obj.tens = Math.floor ( number / 10 % 10 );
		obj.hundreds =  Math.floor( number / 100 % 10 );
	}
}

algoritm( number );

console.log( 'единицы: ' + obj.units );
console.log( 'десятки: ' + obj.tens );
console.log( 'сотни: ' + obj.hundreds );


// Задача 2.

let basket = [ {
	name: 'Холодильник',
	price: 200,
	count: 2
}, { 
	name: 'Стиральная машина',
	price: 400,
	count: 3
}, {
	name: 'Плита',
	price: 150,
	count: 4
}
];

let allSum = 0, i = 0;


while (i < basket.length) {
    allSum += basket[i].price * basket[i].count;
    i++;
}

console.log ( 'итого сумма: - ' + allSum );

