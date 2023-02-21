
function Solution(i,arr){

  let sum="";
  for(let a=0; a<i;  a++){
    sum+=arr.charAt(a).repeat(i)
  }
  return sum
}

let sum="abc";

console.log(Solution(3,sum));