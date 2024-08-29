const count = document.querySelector(".count");
const countNumber = document.querySelector(".count-number");
const countBtn = document.querySelector(".count-btn");
const desk = document.getElementsByTagName("p");
console.log(desk);

let sum = 0;




countBtn.addEventListener("click", () => {
 for (let i = 0; i < desk.length; i++) {
    if (desk[i].textContent.trim ().charAt("M") ) {
      desk[i].style.color = "red";
    }
  }
});



// function inc(){
//     sum++; 
//     countNumber.innerHTML = sum;
//     console.log(sum);
    
// }

// function ins(){
//     sum--; 
//     countNumber.innerHTML = sum;
//     console.log(sum);
    
// }
// function inc(){


//   if ( sum < 10){
// sum++;
// }
//  else if(sum +=10){
//      sum+=10;
// }
// else if ( sum < 100){
//    sum +=100;
// }
// else{
//     sum += 1000;
// }
// }

// function ins(){


//     if ( sum < 10){
//   sum--;
//   }
//    else if(sum -=10){
//        sum-=10;
//   }
//   else if ( sum < 100){
//      sum -=100;
//   }
//   else{
//       sum -= 1000;
//   }
//   }
  

// for (let i = 0; i < desk.length; i++) {
//     if (i % 2 == 1) {
//       desk[i].style.color = "red";
//     }
//   }