

function Solution(arr){

  let b=arr.split(' ');
  
  
  let sum="";
  for(let x of b){
    sum+=x[0].toUpperCase()+x.slice(1)+" ";
  }

  return sum;
}



console.log(Solution("Hello, My name is john"));
console.log(Solution("This Week is Closed Due To COVID-19"));