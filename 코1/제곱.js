function answer(x,y){

  let result=1;
for(let i=0; i<y; i++){
  result*=x;
}
 return result;
}

console.log(answer(2,3));
console.log(answer(4,6));
console.log(answer(1,100));