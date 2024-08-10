const responseText = document.querySelector('.container-output__response');
const titleResponse = document.querySelector('.container-output__title');
const btnCripto = document.querySelector('.container-input__btn__cripto')
const btnCopy = document.getElementById('copy');

// function criptografar(texto) {
//     const chaves = {
//         'a': 'ai',
//         'e': 'enter',
//         'i': 'imes',
//         'o': 'ober',
//         'u': 'ufat'
//     }
//     return chaves[texto]
// }

btnCripto.addEventListener('click', () => {
    const contentText = document.querySelector('.container-input__text').value;
    responseText.textContent = contentText;
    responseText.style.fontSize = '2rem';
    titleResponse.style.display = 'none';
    btnCopy.style.display = 'block';
})

btnCopy.addEventListener('click', function(){
    const responseText = document.querySelector('.container-output__response');
    navigator.clipboard.writeText(responseText.textContent);
})