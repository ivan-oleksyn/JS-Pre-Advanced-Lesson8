let city: string;
city = "Kyiv";
city = "Lviv";
let address: string = city;
console.log(address);

let number: number = +prompt('Please, enter your number');
number === 0 ? console.log('Число 0') :
    number % 2 === 0 ? console.log("Число парне") :
        (console.log('Число непарне'));


function maxArg(firstNum:number, secondNum:number, ...restOfNum:number[]) :number {
    let res:number = 0;
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
let result:number = maxArg(5, -2, 30, 6);
console.log(result);

let userNum = +prompt('Enter your number');
const getSqrt = (num?:unknown) :void=> {
    if (!isFinite(userNum)) {
        console.log('Будь ласка, введіть число!')
    }
    else if (isFinite(userNum) && userNum < 0) {
        console.log('Введіть додатнє число')
    }
    else {
        let resultSqrt: number =+( Math.sqrt(userNum).toFixed(1));
        console.log(`Квадратний корінь ${userNum} дорівнює ${resultSqrt}`);
    }
}

getSqrt(userNum);