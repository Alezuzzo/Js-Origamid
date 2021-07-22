const linkExterno = document.querySelector('a[href^="http"]');
function handleLinkExterno(event) {
    event.preventDefault();
}

linkExterno.addEventListener('click', handleLinkExterno);