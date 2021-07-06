//find the intersection between two arrays

function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }
    }
    return result;
}

console.log(intersection([2,3,5,4,1],[6,5,3,4,8,7]))

