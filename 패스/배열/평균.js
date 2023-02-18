function Solution(arr){

  

  let max=arr.reduce((a,b)=>Math.max(a,b));
  let sum=[];


  for(let i=0; i<arr.length; i++){
    sum.push(arr[i]/max*100);
  }


  return (sum.reduce((a,b)=>a+b)/arr.length)

}


console.log(Solution([40,80,60]));
console.log(Solution([10,20,30]));
console.log(Solution([1,100,100,100]));