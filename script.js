//verificando a distancia da primeira imagem em relação ao topo da pagina
const img = document.querySelector('copy');
const imgTop = img.offsetTop;

console.log(imgTop);

//Retornando a soma da largura das imagens da

function somaImagens() {

    const imagens = document.querySelectorAll('img');

    let soma = 0;

    imagens.forEach((imagem) => {
        soma += imagem.offsetwidth;
    });

    console.log(soma);

}

window.onload = function() {
    somaImagens();
}