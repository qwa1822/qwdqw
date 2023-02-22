function Solution(arr){

  let sum="";
  for(let i=0; i<arr; i++){
    sum+="*"
  }

  return sum;
}

console.log(Solution(5));
console.log(Solution(7));
console.log(Solution(12));