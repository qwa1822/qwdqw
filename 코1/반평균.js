
function answer(x){

  let result=[];
  let sum=0;

  

  for(let i=0; i<x.length; i++){
    sum+=x[i];
  }

  sum/=x.length;
  sum=sum.toFixed(2);
  return sum;
}


let x=[80,95,65,70,100];
let x1=[82,77,51,64,73,90,80];
let x2=[100,71,59,88,72,75,91,93];

console.log(answer(x));
console.log(answer(x1));
console.log(answer(x2));