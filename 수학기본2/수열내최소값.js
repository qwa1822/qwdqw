function Solution(arr){



  let result=[];
  // 최소값의 위치
  let min=Number.MAX_SAFE_INTEGER;
  for(let i=0; i<arr.length; i++){
    if(min>arr[i]){
      min=arr[i];
    }


  
  }

  console.log(min);




  // index위치
  let count=0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]===min){
      result[count++]=i;
    }
  }

  return result;

}


let input=[
  [5,2,10,2],
  [4,5,7,4,8],
  [11,15,12,16,11,12],
]

for(let i=0; i<input.length; i++){
  console.log(Solution(input[i]));
}