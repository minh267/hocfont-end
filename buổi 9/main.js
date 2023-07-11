// const list = [
//     {
//         name: 'Nguyễn Văn A',
//         gender: 'girl',
//     },
//     {
//         name: 'Trần Thị B',
//         gender: 'girl',
//         skills: ['C++','Python'],
//     },
// ];
// console.log(list[1].skills[1]);

// const student ={
//             name: 'Trần Thị B',
//             gender: 'girl',
//             skills: ['C++','Python'],
//         };
// console.log(student.skills[1]);

// const arr1 = [1,2,3];
// const arr2 = [];
// for(let element of arr1){
//     arr2.push(element)
// }
// arr1[2] = 33;
// console.log(arr1);
// console.log(arr2);


// let arr1 = 10;
// let arr2 = arr1;

// arr1 = 33;
// console.log(arr1);
// console.log(arr2);

// function tinhtong(a,n){
//     let sum = 0;
//     for(let i =a; i <= n; i++){
//         sum = sum +i;
//     }
//     console.log(sum);
// };

// tinhtong(1,10);
// tinhtong(5,20);
// tinhtong(6,30);
// tinhtong(2,10);

// function bai1(name){
//     console.log('Hello world ' + name);
// }

// bai1('Minh');

function bai2(a,b){
    return (a+b)*2;
}

let text = bai2(1,3);
console.log(text);

// function bai3(){

//     let a;
//     do{
//         a = Number(prompt('Nhập a'));
//     }while(a<= 0);
//    console.log(a);
// };

// bai3();


// setTimeout(hàm, gọi hàm trong (2s = 2000))
// setInterval(hàm, cứ mỗi (1s = 1000) gọi lại hàm )