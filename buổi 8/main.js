const arr = [1, 3, 5, 7, 8, 10];
// console.log(arr[0]);
// console.log(arr[3]);

// console.log(arr[1]+arr[2]);
// let a = arr[1];
// arr[1] = arr[3]
// arr[3]= a
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//     
// }
//console.log(sum);

// let min = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(min);


// const n = Number(prompt('Nhập n'));
// for(let i = 0; i< arr.length; i++ ){
//     if(n == arr[i]){
//         alert('n là phần tử trong mảng');
//     }
//     do{
//         alert('');
//     }while (!arr.includes(n)) {
//         n = parseInt(prompt("Nhập lại số n"));
//       }
// }

// const n = Number(prompt("Nhập n"));
// for(let i = 0; i< arr.length; i++ ){
//     while (!arr.includes(n)) {
//     const n = Number(prompt("Nhập lại n"));
//     }
//     alert("n là phần tử trong mảng");
// }

let n;
do{
    n = Number(prompt('Nhập n'))
}while(arr.includes(n));

alert("n là phần tử trong mảng");














