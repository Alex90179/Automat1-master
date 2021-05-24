let canvas = document.getElementById('canvas'),
 	context = canvas.getContext('2d'),
 	score = 0,
	arr = [],
 	count = 0;

let play = document.getElementById('sub2');
play.addEventListener("click", function (){
	cellSelection();	
	let timer2 = setInterval(() => game(), 2000);
	setTimeout(() => { 
		clearInterval(timer2);
		cellSelection();
	}, 20000);
	let timer3 = setInterval(() => context.clearRect(0, 0, canvas.width, canvas.height), 2100);
	setTimeout(() => {
		clearInterval(timer3);
	}, 22000);
		
})

function cellSelection(){	//Выбор ячейки
	canvas.addEventListener('click', function (event){
		count++;
		if (count < 5) {
			let x = event.offsetX;
			let y = event.offsetY;
			x = Math.trunc(x/40)*40;
			y = Math.trunc(y/40)*40;
			arr.push(x + ' ' + y);
			context.fillRect(x, y, 40, 40);
		}	
	})
	
}

function game() { //Игра. В течение 2 секунд игрок должен успеть выбрать 4 ячейки. Если он угадывает начисляются очки
	for (let i = 0; i < 4; i++ ){
		x = getRandomInt(0, 10) * 40;
		y = getRandomInt(0, 10) * 40;
		context.fillRect(x, y, 40, 40);
		for (let j = 0; j < arr.length; j++) {
			if (x + ' ' + y === arr[j]) {
				score = score + 10;
			}
		}	
	}
	console.log(score);
	document.getElementById('Счёт').innerHTML = score;
	return arr = [],
	 	count = 0;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}