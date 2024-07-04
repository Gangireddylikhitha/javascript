
// 1.Write a function that takes an array of objects as an argument and returns an array of the keys of each object using for...in iteration.


// Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// Output: [["a", "b"], ["c", "d"], ["e", "f"]]

// arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }];

// function demo(arr) {
//     let keys= [];
//     for (let i = 0; i < arr.length; i++) {
//         let objKeys = [];
//         for (let key in arr[i]) {
//             objKeys.push(key);
//         }
//         keys.push(objKeys);
//     }2Zvfcvf
//     return keys;
// }
// console.log(demo(arr)); // Output: [["a", "b"], ["c", "d"], ["e", "f"]]


// 2.Write a function that takes an array of objects as an argument and returns an array of the values of each object using for...in iteration.


// Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// Output: [[1, 2], [3, 4], [5, 6]]




// let arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }];

// function demo(arr) {
//     let ans=[];
//     for(i in arr){
//         ans.push(Object.keys(arr[i]));
//     }
//     return ans;
// }

// console.log(demo([{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }])); 




// 3.Write a function that takes an array of objects as an argument and returns a new array with only the objects that have a specific property using for...in iteration.


// Input: [{ a: 1 }, { b: 2 }, { a: 3, b: 4}], "a"
// Output: [{ a: 1 }, { a: 3, b: 4 }]
// let arr=[{ a: 1 }, { b: 2 }, { a: 3, b: 4}]
//     let arr1=[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i].hasOwnProperty('a')){
            
//             arr1.push(arr[i])
        
//         }
// }
// console.log(arr1)


// 4.Write a function that takes an array of objects as an argument and returns a new array with the objects sorted by a specific property using for...in iteration.


// Input:arr= [{ a: 2 }, { a: 1 }, { a: 3 }], "a"
// // Output: [{ a: 1 }, { a: 2 }, { a: 3 }]
// function sortByProperty(keys, values) {
//      let sortedArray = keys.slice(); 

    
//     for (let i in sortedArray) {
//         // console.log(arr[i])
//         for (let j in sortedArray) {
                
//             if (sortedArray[j][values] > sortedArray[i][values]) {
            
//                 let temp = sortedArray[i];
//                 sortedArray[i] = sortedArray[j];
//                 sortedArray[j] = temp;
//             }
//         }
//     }

//     return sortedArray;
// }

// // Example usage:
// const inputArray = [{ a: 2 }, { a: 1 }, { a: 3 }];
// const sortedArray = sortByProperty(inputArray, 'a');
// console.log(sortedArray); // Output: [{ a: 1 }, { a: 2 }, { a: 3 }]

// 5.Write a function that takes an array of objects as an argument and returns a new object with the properties from all the objects in the array using for...in iteration.


//          arr= [{ a: 1 }, { b: 2 }, { c: 3 }]
// Output: { a: 1, b: 2, c: 3 }


let arr=[{ a: 1 }, { b: 2 }, { c: 3 }]
let result={}
for (let obj of arr) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key];

            }
            // console.log(obj[key])
            // console.log(result[key])
        }
    }
    
    console.log(result); // { a: 1, b: 2, c: 3 }