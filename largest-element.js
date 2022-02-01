function largestElement(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        element = numbers[i];
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = [23,76,40,98,45,15,43]
const ages2 = [-9,-5,-2,-7,-3,-6]

const oldest = largestElement(ages2);
console.log('the oldest is', oldest);