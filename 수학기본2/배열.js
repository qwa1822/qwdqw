function Solution(arr){

  let min=Number.MIN_SAFE_INTEGER;
  let result=[];

  let count=0;
  for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length;j++){
        if(arr[i]<arr[j]){
          count=j;

          result.push(count);
        }
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