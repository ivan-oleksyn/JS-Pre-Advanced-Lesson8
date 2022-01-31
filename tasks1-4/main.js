let city;
city = "Kyiv";
city = "Lviv";
let address = city;
console.log(address);
let number = +prompt('Please, enter your number');
number === 0 ? console.log('Число 0') :
    number % 2 === 0 ? console.log("Число парне") :
        (console.log('Число непарне'));
function maxArg(firstNum, secondNum, ...restOfNum) {
    let res = 0;
    for (let i = 0; i < restOfNum.length; i++) {
        if (res < firstNum) {
            res = firstNum;
        }
        if (res < secondNum) {
            res = secondNum;
        }
        if (res < restOfNum[i]) {
            res = restOfNum[i];
        }
    }
    return res;
}
let result = maxArg(5, -2, 30, 6);
console.log(result);
let userNum = +prompt('Enter your number');
const getSqrt = (num) => {
    if (!isFinite(userNum)) {
        console.log('Будь ласка, введіть число!');
    }
    else if (isFinite(userNum) && userNum < 0) {
        console.log('Введіть додатнє число');
    }
    else {
        let resultSqrt = +(Math.sqrt(userNum).toFixed(1));
        console.log(`Квадратний корінь ${userNum} дорівнює ${resultSqrt}`);
    }
};
getSqrt(userNum);
