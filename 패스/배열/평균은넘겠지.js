function Solution(a,arr){

  let sum=0;
  let average=0;
  

 

  for(let i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  average=sum/arr.length;
  let count=0;
  

  for(let i=0; i<arr.length; i++){
    if(arr[i]>average)
    count++;
  }

  console.log(`${(count/a*100).toFixed(3)}`);
}


console.log(Solution(5,[50,50,70,80,100]));
console.log(Solution([100,95,90,80,70,60,50]));