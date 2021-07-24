const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent li');
tabContent[0].classList.add('ativo');

function activeTab (index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    })  
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index)=> {
    itemMenu.addEventListener('click', ()=> {
        activeTab(index);
    })
})