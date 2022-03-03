let random = Math.random() *1000;
let randomrounded = Math.round(random);
console.log(randomrounded);


if (randomrounded>800){
        console.log("größer als 800" )
}

else if (randomrounded>500){
    console.log("Zwischen 500 und 800")
}

else if (randomrounded>200){
    console.log("Zwischen 200 und 500")
}

else {
    console.log("Kleiner als 200")
}