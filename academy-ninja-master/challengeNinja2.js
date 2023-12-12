//1.¿Cómo agregarías la instrucción “arriba”?
//2. Nuestro Ninja se está moviendo, pero no parece que esté caminando. 
//¿Qué cambiarías para que pareciera que el ninja camina?


var leftValue = 150;
var topValue = 150;
var walkValue = 1;



document.onkeydown = function (e) {
    console.log(e);
    if (walkValue == 1) {
        walkValue = 2;
    }
    else if (walkValue == 2) {
        walkValue = 1;
    }

    if (e.keyCode == 37) {
        // Left
        leftValue = leftValue - 25;
        document.getElementById("character").style.left = leftValue + "px";
        document.getElementById("character").style.backgroundImage = "url('img/left" + walkValue + ".png')";
    }
    else if (e.keyCode == 39) {
        // Right
        leftValue = leftValue + 25;
        document.getElementById("character").style.left = leftValue + "px";
        document.getElementById("character").style.backgroundImage = "url('img/right" + walkValue + ".png')";
    }
    else if (e.keyCode == 38) {
        // Top
        topValue = topValue - 25;
        document.getElementById("character").style.top = topValue + "px";
        document.getElementById("character").style.backgroundImage = "url('img/top" + walkValue + ".png')";
    }
    else if (e.keyCode == 40) {
        // Bottom
        topValue = topValue + 25;
        document.getElementById("character").style.top = topValue + "px";
        document.getElementById("character").style.backgroundImage = "url('img/down" + walkValue + ".png')"
    }
}