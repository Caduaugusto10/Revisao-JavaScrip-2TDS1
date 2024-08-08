let ingressos = 8;
let batata = 0; 

for (let i = 1; i <= ingressos; i++) {
    if (i % 3 === 0){
        batata++;
    }
}
console.log("Quantidade de batatas grátis da promoção é : " + batata);