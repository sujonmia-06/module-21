function smallestNumber(num1, num2, num3){
    if (num1 < num2 && num1 < num3){
        console.log('the smallest number is', num1);
    }
    else if (num2 < num3 && num2 < num1){
        console.log('the smallest number is', num2);
    }
    else if (num3 < num1 && num3 < num2){
        console.log('the smallest number is', num3);
    }
}

smallestNumber(3445,64534,34526);