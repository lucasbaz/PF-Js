//Variables
let productList = ["dulces caseros", "kits de baño natural", "mapas didacticos"];
let productListSingular = ["dulce casero", "kit de baño natural", "mapa didactico"];
let productPrice = [150, 200, 60];
let productStock = [10, 3, 20];
let userCash;
let productMax = [0, 0, 0];

//Funciones
function min(a, b){
    if (a <= b) { return a;}
    return b;
}

function max(a, b){
    if (a >= b) { return a;}
    return b;
}

function arrayMin(array){
    let currentMin = array[0];
    for(let i = 1; i<array.length; i++){
        currentMin = min(currentMin, array[i]);
    }
    return currentMin;
}

function intDiv(a, b){
    return parseInt(String(a/b)); // por ahora es la unica manera que se me ocurre de hacer una division entera
}

function buyOptions(){
    do {
        userCash = prompt("De cuánto dinero dispone para hacer la compra?");
    } while (!parseFloat(userCash));
    userCash = parseFloat(userCash);
    
    if (userCash < arrayMin(productPrice)){
        alert("Con ese dinero no puede comprar nada.");
    }
    for(var i = 0; i < productMax.length; i++){ //productMax ahora no tiene mucho sentido pero lo dejo para proy futuros
        productMax[i] = min(intDiv(userCash, productPrice[i]), productStock[i]);
        switch(productMax[i]){
            case 0:
                break;
            case 1:
                alert(`Puede comprar ${productMax[i]} ${productListSingular[i]}.`);
                break;
            case productStock[i]:
                alert(`Puede comprar ${productMax[i]} ${productListSingular[i]}. (Max Stock)`);
                break;
            default:
                alert(`Puede comprar ${productMax[i]} ${productList[i]}.`);
                break;
        }
    }
}

function calcCost(){
    let currentCost = 0;
    for(var i = 0; i < productList.length; i++){
        let amt = max(0, parseInt(prompt(`Cuántos ${productList[i]} quiere comprar?`)));
        currentCost += amt*productPrice[i];
    }
    alert(`El costo total es $${currentCost}`);
}

//main
switch(true){
    case confirm("Quiere calcular el precio de una compra?"):
        calcCost();
        break;
    case confirm("Quiere ver todo lo que puede comprar con su dinero?"):
        buyOptions();
        break;
    default:
        alert("Siga disfrutando nuestra web.")
        break;
}


