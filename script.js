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

// Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas para
//com o dedo (indicado pelo google 48px/48px)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}