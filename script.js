function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    }
}

window.addEventListener('keydown', handleKeyboard);