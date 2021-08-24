const listaDePecas = ["Motor","Ar condicionado", "Suspensão"]
// Constante é um variável que não vai ser modificar, "listadepecas é o nome nome da lista"
// Nome de peças no colchete 

console.log(listaDePecas)

// no console log está pedindo para mostrar o nome da lista

if(listaDePecas.length < 10) {
    console.log("é possível cadastrar mais pecas")
} else {
    console.log("Não há mais espaço na lista")   
}

// se na nossa lista estiver numero de peças menor que 10 
// significar que é possível cadastrar e se for maior que 10 não é possível

var peso = 101

if (peso > 100) {
    console.log("Peso da peca está adequado")   
} else {
    console.log("Peso insuficiente")
}

// Se o peso foi maior que 100 é possível cadastrar e se for igual ou menor que 
// 100 não é possível

let nomePeca = "volante"

if (nomePeca.length > 3) {
    console.log("Nome está adequado")  
} else if (nomedapeca.length == 0) {
    console.log("O Nome não pode ser vazio")
} else {
    console.log("O nome da peça deve ter mais de 3 caracteres")
}
// Se o nome da peça tiver mais que 3 caracteres é possível cadastrar
// se estiver vazio vai aparecer a mensagem de que não pode ser vazio
// se tiver menos que 3 vai dizer que precisa de mais de 3 caracteres
