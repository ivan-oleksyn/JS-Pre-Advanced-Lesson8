const getElem = (selector) => document.querySelector(selector);
let form = document.querySelector('.get-words') as HTMLFormElement;
let badWordField = getElem('.bad-word') as HTMLAnchorElement;
let badWord:string;
let badWordsArray:string[] = ['java', 'tottenham'];
let textareaArray:string[];
let textareaValue:string;

let addBTN = getElem('.add-btn') as HTMLInputElement;
let resetBTN = getElem('.reset-btn') as HTMLInputElement;
let cenzorBTN = getElem('.cenzor-btn') as HTMLInputElement;

resetBTN.addEventListener('click', function (): void{
    form.reset();
    badWordsArray = [];
    console.log(badWordsArray);
    badWordField.textContent = "";
    getElem('.input').classList.remove('error-border');
     getElem('.input').placeholder = 'word here...';
});
addBTN.addEventListener('click', function (): void{
    addBadWords();
    form.reset();
});
 
cenzorBTN.addEventListener('click', function (): void{
    checkBadWords();
})

function addBadWords(): void{
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

function checkBadWords(): void{
    if (!textareaValue) {
        getElem('.textarea').classList.add('error-border');
        getElem('.textarea').placeholder = 'Please, write a text!'
    }
    textareaValue = getElem('.textarea').value;
    textareaArray = textareaValue.split(' ');
    for (let i:number= 0; i < textareaArray.length; i++){
        for (let j:number = 0; j < badWordsArray.length; j++){
            if (textareaArray[i] === badWordsArray[j]) {
                let changeWord:string[] = textareaArray[i].split('');
                let changeResult:string = changeWord.fill('*').join('');
                textareaArray[i] = changeResult;
                getElem('.textarea').value = textareaArray.join(' ');
            }
        }
    }
    getElem('.textarea').classList.remove('error-border');
    getElem('.textarea').classList.add('valid-border');
}
