function answer(x){

  let result;

  if(x%4===0 && x%100!==0){
    result=true;
  }else if(x%400===0){
    result=true;
  }else{
    result=false;
  }

  return result;
}

console.log(answer(4));
console.log(answer(100));
console.log(answer(124));