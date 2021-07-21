//adicionando a classe ativo a todos os itens do menu

const itemMenu = document.querySelectorAll('.menu a');
itemMenu.forEach((item) => {
    item.classList.add('ativo');
});

//removendo classes ativo de todos itens do menu e mantendo apenas a primeira

const itemMenu = document.querySelectorAll('.menu a');
itemMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itemMenu[0].classList.add('ativo');

//verificando se imagens possuem atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
});

//Modificando o href do link externo no menu

document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');