// function myBirthYearFunc(BirthYearEntry){
//     console.log("Nací en " + EntryYearBirth);
//     }

// myBirthYearFunc()

// function add(num1, num2) {
//     console.log("¡Sumando números!");
//     console.log("num1 is: " + num1);
//     console.log("num2 is: " + num2);
//     var sum = num1 + num2;
//     console.log(sum);
// }


// add(1,5)

//output

// ¡Sumando números! 
// num1 is: 1
// num2 is: 5

//  6

//diagram t

//varible :auntContactInfo
//valor :"Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345

function sampleContactInformation() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

sampleContactInformation()

//output
//['Paula', 'Smith', 'Calle Principal 1234', 'St. Louis', 'MO', 12345]

//varible :produce                       variable: frozen
//valor :"manzanas", "naranjas"          frozen:  "brócoli", "helado"

function showShoppingList() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

showShoppingList()

//output
//["brócoli", "helado", "croqueta de papa"];



function porcentajePropina(totalCuenta, porcentajePropina) {
    var propina = (totalCuenta * porcentajePropina);
    console.log("Si ves esto, esto solo ocurre después de que se calculó propina");
    return console.log(propina);
}


porcentajePropina(140, .20);


