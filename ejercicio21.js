const autos = ['BMW', 'Mercedez Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i +" : " +  autos [i]);
}

autos[1] = "Mercedez Benz";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);