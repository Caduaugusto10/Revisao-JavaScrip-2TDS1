let metaLivros = 5;

let livrosLidos = ["O pequeno príncipe" , "Mente milionária" , "Pai rico pai pobre"];

let LivrosRestantes = metaLivros - livrosLidos.length;

for (let i = 0; i < livrosLidos.length; i++) {
    console.log(livrosLidos[i]);
}

if (livrosLidos.length <= metaLivros) {
    console.log("Você está progredindo! Faltam", LivrosRestantes ,"livros para atingir sua meta.");
} else {
    console.log("Parabéns! Você atingiu sua meta de leitura!");
}