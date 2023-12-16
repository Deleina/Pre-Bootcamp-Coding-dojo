//(Básico) Lleva el puntaje de cuántas piezas de sushi come NinjaMan

const world = [
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
];

console.log(world);

const worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi'
};

let score = 0;

//score in HTML

function updateScore() {
    document.getElementById('score').innerText = 'Puntaje: ' + score;

}

updateScore()




//world in HTML
function drawWorld() {
    let output = "";

    for (let row = 0; row < world.length; row++) {
        output += "<div class='row'>";
        for (let x = 0; x < world[row].length; x++) {
            output += `<div class='${worldDict[world[row][x]]}'></div>`;
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}

drawWorld();


const ninjaMan = {
    x: 1,
    y: 6
}


function drawNinjaMan() {
    document.getElementById('ninjaMan').style.top = ninjaMan.y * 40 + 'px';
    document.getElementById('ninjaMan').style.left = ninjaMan.x * 40 + 'px';
    console.log(document.getElementById('ninjaMan').style.left = ninjaMan.x * 40 + 'px');
}

drawNinjaMan()

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (world[ninjaMan.y][ninjaMan.x - 1] !== 1) {
                ninjaMan.x--;


            }
            break;
        case 'ArrowRight':
            if (world[ninjaMan.y][ninjaMan.x + 1] !== 1) {
                ninjaMan.x++;
            }
            break;
        case 'ArrowDown':
            if (world[ninjaMan.y + 1][ninjaMan.x] !== 1) {
                ninjaMan.y++;
            }
            break;
    }

    world[ninjaMan.y][ninjaMan.x] = 0;

    drawNinjaMan()
    drawWorld()
}





