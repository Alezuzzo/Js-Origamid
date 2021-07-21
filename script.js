const imgBg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgBg); // apenas as imagens que começam com img/imagem

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno); //apenas links internos com href = #

const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');

console.log(animais);
console.log(h2Animais); //Selecione o primeiro h2 dentro de .animais-descricao

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]); //ultimo p do site


