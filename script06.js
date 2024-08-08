let armas = ['Lança chamas', 'Arma de gelo', 'Katana', 'Pistola a lazer', 'Arma de plasma'];
let ataques = [];

ataques.push("Meliodas");
ataques.push(armas[3]);
ataques.push(armas[1]);
ataques.push(armas[4]);
ataques.push(armas[2]);


for (let i = 0; i < ataques.length; i++) {
    if ( i == 0) {
        console.log(`Nome do Robô : ${ataques[i]}`);
    } else {
        console.log(`ataques ${i}: ${ataques[i]}`);
    }
}
