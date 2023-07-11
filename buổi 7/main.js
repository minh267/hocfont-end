// const w = Number(prompt('Nhập cân nặng'));
// const h = Number(prompt('Nhập chiều cao'));

// const BMI = w / h;


// // if(BMI < 18.5){
// //     alert('Nhẹ cân');
// // }

// // if(BMI >= 18.5 && BMI < 23){
// //     alert('Bình thường');
// // }
// // if(BMI >= 23 && BMI < 25){
// //     alert('Thừa cân');
// // }

// // if(BMI > 25){
// //     alert('Béo phì');
// // }

// if(BMI < 18.5){
//     alert('Nhẹ cân');
// }else if(BMI >= 18.5 && BMI < 23){
//     alert('Bình thường');
// }else if(BMI >= 23 && BMI < 25){
//     alert('Thừa cân');
// }else {
//     alert('Béo phì ');
// }


//  const n = Number(prompt('Nhập n'));

// for(let i = 100; i  >= n; i--){
//     console.log(i);
// }

// for(let i = 100 ; i >= n; i--){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// let a = 10;
// while(a >= 5){
//     a = Math.floor(Math.random() * 10);
//     console.log(a);
// }

// let i = 0;
// while (i <= 200) {
//   console.log(i);
//   i++;
// }

// let x = "Học đi đôi với tỏi";
// let y = 10;
// let text = "";
// while (y <= 200) {
//   console.log(y);
//   y++;
// }

// let x = 101;
// let y = -10;

// while (x < 0 || x > 100 || y < 0 || y > 100 || x > y ){
//     x = Number(prompt('Nhập x'));
//     y = Number(prompt('Nhập y'));
// }

// while ( x < y ){
//     x++;
//     y--;
// }

// // b1
// let i = 0;
// while (i <= 500) {
//  console.log(i);
// i++;
// }

// // b2
// for(let i = 1; i <= 300; i++){
//     if(i % 2 == 0 && i % 3 == 0){
//         console.log(i);
//     }
// }

//b3
// let cout = 0;
// for(let i = -30; i < 50; i = i + 2){
//     cout = cout + i;
//     console.log(cout);
// }


// b4
// let cout = 1;
// const a = Number(prompt('Nhập a'));
// for(let i = 1; i <= a; i ++){
//     cout = cout * i;
//     console.log(cout);
// }


// b6
// const n = Number(prompt('Nhập n '));
// let s = 0;
// if(n>2){
//     for(let i = 2; i<=n; i ++){
//         s = s +1/i*(i+1);
//     }
// }
// console.log(s);

// b7
// const n = Number(prompt('Nhập n '));
// for(let i = 1; i<=n; i++){
//     if(n % i == 0  ){
//         console.log(i);
//     }
// }

//b8
// const n = Number(prompt('Nhập n '));
// if(n<2){
//     console.log('n không phải là số nguyên tố');
// }

// for(let i = 2; i<=(n-1); i++){
//     if(n%i != 0 ){
//         console.log('n là số nguyên tố');
//     }else{
//         console.log('n không phải là số nguyên tố');
//     }
// }


// b10
// const n = Number(prompt('Nhập n '));
// const m = Number(prompt('Nhập m '));
// let ucln = 1;


//     for(let i = 1; i <= m && i <= n; i++){
//         if(m % i == 0 && n % i == 0 ){
//             ucln = i;
//             console.log(ucln);
//          }
// }

//b11
const n = Number(prompt('Nhập n '));
const m = Number(prompt('Nhập m '));
let ucln = 1;


    for(let i = 1; i <= m && i <= n; i++){
        if(m % i == 0 && n % i == 0 ){
            ucln = i;
            break;
         }
        
}
console.log(ucln);
