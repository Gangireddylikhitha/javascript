/////////////find the length of the string without using method/////
// let s="likhitha"
// sum=0
// for(i in s){
//     if(s[i]!==undefined)
//         sum++
   
// }
// console.log(sum)

////////////decoding of pop////////////////
//////remove the last elemrnt////////////

// let num="102383"
// let lastnum=""
// for(i=0;i<num.length-1;i++){
//     lastnum=lastnum+num[i]
// }
// console.log(lastnum)


// console.log(1+"0")
// console.log(10+"2")
// console.log(102+"3")

// ///////////////DECODE OF UNSHIFT pending///////////

// let num="902383"
// let lastnum=""
// sum=0
// for(i=0;i<num.length;i++){
    
//     lastnum=lastnum+num[i]
//     if(num[i]!==undefined)
//         sum=sum+num[i]
    
// }
// console.log(sum)

////////////////decode of unshift pending//////////////

// let arr=["apple","banana","grapes"]
// let lastnum=[]
// for(i=0;i<arr.length+1;i++){

// if(arr[i]==undefined){
// arr[i]+="likhitha";
// break;
    
// }
// console.log(arr)

//}

////////////////push//////////////////////

// let a=['apple','banana']
// let last=[]
//
// for(i=0;i<a.length+1;i++){

//     if(a[i]==undefined){
        
//        a[i]="mango"
//        console.log(a[i]);
//        break;

//     }


// }
// // console.log(a(a.length+1))
// console.log(a)

////////////////shift//////////////////

let a=['apple','banana']
let first=[]
// a[i]='mango';
for(i=a.length-1;i>=0;i--){

    if(a[-i]==undefined){
        
       a[i]="mango"
       console.log(a[i]);
       break;

    }


}
console.log(a)


