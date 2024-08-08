let quantidadePalmas = 10;

let aplausos = "";
for (let i = 1; i < quantidadePalmas; i++){
    aplausos += "👏";
    if ((i + 1) % 5 === 1 ){
        aplausos += "🎉"
    }
}

console.log(aplausos);