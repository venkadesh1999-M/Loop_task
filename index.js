// question 7

// for(let i = 1 ;i <=5;i++){
//  if(i != 1){
//    let isprime = true
//    for(let j = 2;j<i;j++){
//      if(i%j == 0){
//        isprime = false;
//      }
//    }
//    if(isprime == true){
//      console.log("Its a prime number " + i)
//    }else{
//      console.log("its not a prime number " + i)
//    }
//  }
 
// }

// question 9


let value =5
let star = "\n"
for(let i = 1;i<=value;i++){
  for(j = 1;j<=i;j++){
    star = star + "*"
  }
star = star + "\n"
}
console.log(star)





// question 8

// let text = "Javascript is fun"

// let c1 = 0;
// for(let check of text){
//   if(check == "a" || check == "e" || check == "i" || check == "o" || check == "u"){
//     c1 = c1 + check

//   }
// }
// console.log("the vowel is " + (c1.length - 1))


// question 5



// for(i = 1;i< 100;i++){
//   if(i %3 == 0 && i %5 ==0){
//     console.log("FizzBuzz")
//   }else if(i % 3 == 0){
//     console.log("Fizz")
//   }
//   else if( i % 5 == 0){
//     console.log("Buzz")
//   }
//   else{
//     console.log(i)
//   }
// }


// question 6
// let input = "venkadesh"

// console.log(input.split("").reverse().join(""))

// another Method
// let str =""
// for(let i = input.length-1;i>=0;i--){
//  str = str + input[i] 
// }
// console.log(str)

// question 1

// for(i = 1;i<=10;i++){
//   console.log(i)
// }


// question 2

// for(i = 1;i<=20;i++){
//   if(i % 2 ==0){
//     console.log("Its Even Number " + i)
//   }else{
//     console.log("Its odd Number " + i)
//   }
// }

// question 3

// let x = prompt("enter your number 1 to 10 ")


// for(let i =0;i<=10;i++){
//  console.log(x + " * " + i + " = " + x *i)
// }




// question 4


// let sum = 0
// for(let i = 0;i<=50;i++){
//   sum = sum + i
// }
// console.log(sum)



// question 10


// let numbers = [1,2,2,3,4,5,6,7,7]


// for(let x of numbers){
//   let count = 0;
//   for(let y of numbers){
//     if(x == y){
//     count = count + 1;
//     }
//   }
//   if(count > 1){
//   console.log("its duplicate " + x)
// }
// }

