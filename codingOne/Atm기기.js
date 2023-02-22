

function Solution(a,b){
  let result;


  if(a%5!==0){
    result=b;
  }else if(a+0.5>b){
    result=b;
  }else{
    result=a-0.5;
  }
  return result;
}

console.log(Solution(40,130.00));
console.log(Solution(33,130.00));
console.log(Solution(300,300.00));