//Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const menu = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

//Selecione o primeiro dt da dl de faq

const faq = document.querySelector('.faq');
const primeiroDt = faq.faq.querySelector('dt');

//Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD.remove);

//substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;