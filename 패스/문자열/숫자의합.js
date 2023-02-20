

function Solution(a){

  

  let answer=0;

  for(let x of a){
    answer+=Number(x);
  }

  return answer;
}

console.log(Solution([5,4,3,2,1]));
console.log(Solution([3,4,7]));