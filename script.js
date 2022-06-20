
//1 - crie uma função que exiba uma mensagem no console

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console


//1:
function msg() {
    return console.log("Desafio de função:");
}

msg();

//2:
function meuNome(meuNome) {
    return meuNome = "Luan Vitor";
}

console.log(meuNome());

//3:
function dados(eu, idade, musica) {
    return dados = `Meu nome é ${eu}, tenho ${idade} e gosto de ouvir ${musica}.`;
}
let dadosR = dados("Luan", "22 anos", "variádos estilos musicais, mas tenho um certo apego por forró e rock");
console.log(dadosR);

//4:
function gosto(musica, filme) {
    return gosto = `Gosto de ouvir ${musica} para relaxar e amo assistir 3 filmes: ${filme}.`;
}

let escolha = gosto('"É osso" - Jovem Dionísio', 'Interestelar, Gigantes de aço e Ratatouille');

console.log(gosto);
console.log(".............................................")
////Bônus:
console.log("Bônus:")
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(triplo) {
    return triplo *= 3;
}

console.log(triplo(50));