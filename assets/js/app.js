const contentText = document.querySelector('.container-input__text');
const responseText = document.querySelector('.container-output__response');
const titleResponse = document.querySelector('.container-output__title');
const btnCripto = document.querySelector('.container-input__btn__cripto');
const btnDescripto = document.querySelector('.container-input__btn__descripto');
const btnCopy = document.getElementById('copy');

function criptografar(texto) {
    let chaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    texto = texto.toLowerCase();

    for(let chave in chaves) {
        if(texto.includes(chave)) {
            texto = texto.replaceAll(chave, chaves[chave])
        }
    }
    return texto;
}

btnCripto.addEventListener('click', () => {
    const textoCripto = criptografar(contentText.value);
    responseText.textContent = textoCripto;
    responseText.style.fontSize = '2rem';
    titleResponse.style.display = 'none';
    btnCopy.style.display = 'block';
    contentText.value = '';
})

function descriptografar(textoCripto) {
    let chaves = {
        'enter' : 'e',
        'imes' : 'i',
        'ai' : 'a',
        'ober' : 'o',
        'ufat' : 'u' 
    };
    textoCripto = textoCripto.toLowerCase();

    for(let chave in chaves) {
        if(textoCripto.includes(chave)) {
            textoCripto = textoCripto.replaceAll(chave, chaves[chave])
        }
    }
    return textoCripto;
}

btnDescripto.addEventListener('click', () => {
    const textoDescripto = descriptografar(contentText.value);
    responseText.textContent = textoDescripto;
    responseText.style.fontSize = '2rem';
    titleResponse.style.display = 'none';
    btnCopy.style.display = 'block';
    btnCopy.textContent = 'Copiar'
    contentText.value = '';
})

btnCopy.addEventListener('click', function () {
    const responseText = document.querySelector('.container-output__response');
    navigator.clipboard.writeText(responseText.textContent);
    btnCopy.textContent = 'Copiado!'
})