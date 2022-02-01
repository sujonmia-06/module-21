/* const fiboArray = [0, 1];
for (i = 2; i <= 98; i++){
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
}
console.log(fiboArray); */



function fibonacciSeries(nth){
    let fibonacci = [0, 1]
    if (typeof nth != 'number'){
        return 'input is not valid'
    }
    if (nth < 2){
        return 'input a positive number greater than 1'
    }
    for (i = 2; i < nth; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
    
}
let fiboNthSeries = fibonacciSeries(10);
console.log(fiboNthSeries);