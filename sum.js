const numbers = [32, 54, 54, 98, 26, 23, 61, 48, 93];

// shift + alt + a = multiline comment
/* 
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum += element;
}

console.log(sum); */

let sum = 0;
function arrayTotal(numbers){
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum += element; 
    }
return sum;
}

arrayTotal(numbers);
console.log(sum);