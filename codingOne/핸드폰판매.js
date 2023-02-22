function Solution(arr){


  let count;
  let max=Number.MIN_SAFE_INTEGER;
  for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
      max=arr[i];
      count=i+1;
    }
  }
  return count;
}

let arr=[
  [3,7,9,6,1],
  [2,7,1,4,3,0,5],
  [7,5,0,1,2,12,6],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])}`);
}