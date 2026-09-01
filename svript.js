const inputElement = document.getElementById('key');
const buttonElement = document.getElementById('enter');

buttonElement.addEventListener('click', () => {

    const inputValue = inputElement.value;

    window.location.href = `file:///C:/Users/yo/Documents/GitHub/insideWebPuzzle/${inputValue}.html`;
});

/* みかか暗号 */