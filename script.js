//mostrando no console cada paragrafo do sitem
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item);
});

//mostrando o texto dos paragrafos no console

paragrafos.forEach((item) => {
    console.log(item.innerText);
});

//corrigindo erros abaixo

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
} );

let i = 0;

imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);