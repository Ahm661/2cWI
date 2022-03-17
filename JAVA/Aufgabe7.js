// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"



let random=Math.random () *100;
let random2=Math.random () *100;
let randomasinteger=Math.round(random)
let random2asinteger=Math.round(random2)
console.log(randomasinteger)
console.log(random2asinteger)

if ((randomasinteger<random2asinteger) && randomasinteger>50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
};




if (randomasinteger<30){
    console.log("Eine der beiden ist kleiner als 30")
}
else if (random2asinteger<30){
    console.log("Eine der beiden ist kleiner als 30")
};


if ((randomasinteger < 50) && random2asinteger != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}
