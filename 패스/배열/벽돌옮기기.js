

function Solution(arr){

  let result=0;


  for(let i=0; i<arr.length; i++){
    result+=arr[i];
  }
  result/=arr.length;
  let count=0;
  
  let sum=0;


  for(let i=0; i<arr.length; i++){
    if(arr[i]>result){
      sum+=arr[i]-result;
    }
  }
  return sum
}

let arr=[
  [5,2,4,1,7,5],
  [12,8,10,11,9,5,8],
  [27,14,19,11,26,25,23,15],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])}`);
}