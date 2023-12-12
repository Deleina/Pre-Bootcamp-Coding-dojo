var leftValue = 450, topValue = 100;

		function update() {
			document.getElementById("character").style.left = leftValue + "px";
			document.getElementById("character").style.top = topValue + "px";
		}

		document.onkeydown = function (e) {
			console.log(e);
			if (e.keyCode == 37 && leftValue > 0) { // LEFT
				leftValue = leftValue - 10;
			} 
            else if (e.keyCode == 39 && leftValue < 500) { // RIGHT
				leftValue = leftValue + 10;
			}
			else if (e.keyCode == 40 && topValue > 500) { // DOWN
				topValue = topValue + 10;
			}else if (e.keyCode == 38 && topValue > 0) {
                topValue = topValue -10
            }
			// ...
			update();
		}


// const image = document.getElementById('character');
// let posicionX = 10;
// let posicionY = 10;
// let px = 10;

// function moveImage(e) {
//     console.log(e);
//     switch (e.key) {

//         case 'ArrowUp':
//             posicionY -= px
//             break;
//         case 'ArrowDown':
//             posicionY += px
//             break;
//         case 'ArrowRight':
//             posicionX -= px
//             break;
//         case 'ArrowLeft':
//             posicionX += px
//             break;

//         default:
//             break;
//     }
// }

// image.style.top = posicionY + 'px';
// image.style.left = posicionX + 'px';

// document.addEventListener('keydown', (e) => {
//     moveImage(e)
// })

