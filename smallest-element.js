function smallestElement(numbers){
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        element = numbers[i];
        if (element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const ages = [7, 12, 11, 4, 15, 2];
const ages2 = [-7, -12, -11, -4, -15, -2];
const youngest = smallestElement(ages2);
console.log(youngest);