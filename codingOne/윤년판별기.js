function Solution(a){

  if(a%400===0){
    return true;
  }
  if(a%4===0 && a%100!==0){
    return true;

  }else{
    return false;
  }
  
}

console.log(Solution(4));
console.log(Solution(100));
console.log(Solution(124));
console.log(Solution(247));
console.log(Solution(400));