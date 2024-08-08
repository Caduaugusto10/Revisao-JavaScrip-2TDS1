let idadeMinima = 7;
let idadeAluno = 16;

if (idadeAluno >= idadeMinima) {
    console.log("Matrícula realizada com sucesso")
} else {
    console.log("Idade mínima não permitida! CRESÇA!")
}

let Categoria;
 if (idadeAluno >= 7 && idadeAluno <= 9){
    Categoria = "infantil"
 }else if (idadeAluno >= 10 && idadeAluno <= 12){
    Categoria = "fundamental I"
 }else if (idadeAluno >= 13 && idadeAluno <= 15){
    Categoria = "fundamental II"
 }else if (idadeAluno >= 16 && idadeAluno <= 18){
    Categoria = "Ensino médio"
 }else {
    Categoria = "Categoria não definida";
 }

 console.log("Categoria aluno : " + Categoria);