const inputElement = document.getElementById('key');
const buttonElement = document.getElementById('enter');

buttonElement.addEventListener('click', () => {

    const inputValue = inputElement.value;

    window.location.href = `https://inside-web-puzzle.netlify.app/${inputValue}.html`;
});

/* みかか暗号 */