const getElem = (selector) => document.querySelector(selector);
let form = document.querySelector('.get-words');
let badWordField = getElem('.bad-word');
let badWord;
let badWordsArray = ['java', 'tottenham'];
let textareaArray;
let textareaValue;
let addBTN = getElem('.add-btn');
let resetBTN = getElem('.reset-btn');
let cenzorBTN = getElem('.cenzor-btn');
resetBTN.addEventListener('click', function () {
    form.reset();
    badWordsArray = [];
    console.log(badWordsArray);
    badWordField.textContent = "";
    getElem('.input').classList.remove('error-border');
    getElem('.input').placeholder = 'word here...';
});
addBTN.addEventListener('click', function () {
    addBadWords();
    form.reset();
});
cenzorBTN.addEventListener('click', function () {
    checkBadWords();
});
function addBadWords() {
    badWord = getElem('.input').value;
    if (!badWord) {
        getElem('.input').classList.add('error-border');
        getElem('.input').placeholder = 'Please, write a word!';
    }
    else if (getElem('.bad-word').textContent == '') {
        badWordField.textContent += badWord;
    }
    else {
        badWordField.textContent += ',' + badWord;
        badWordsArray.push(badWord);
    }
}
function checkBadWords() {
    if (!textareaValue) {
        getElem('.textarea').classList.add('error-border');
        getElem('.textarea').placeholder = 'Please, write a text!';
    }
    textareaValue = getElem('.textarea').value;
    textareaArray = textareaValue.split(' ');
    for (let i = 0; i < textareaArray.length; i++) {
        for (let j = 0; j < badWordsArray.length; j++) {
            if (textareaArray[i] === badWordsArray[j]) {
                let changeWord = textareaArray[i].split('');
                let changeResult = changeWord.fill('*').join('');
                textareaArray[i] = changeResult;
                getElem('.textarea').value = textareaArray.join(' ');
            }
        }
    }
    getElem('.textarea').classList.remove('error-border');
    getElem('.textarea').classList.add('valid-border');
}
