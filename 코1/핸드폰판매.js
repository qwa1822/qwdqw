function answer(x){
  let sum=0;
  let temp=1;
  let max=Number.MIN_SAFE_INTEGER;
  for(let i=0; i<x.length; i++){
      if(x[i]>sum){
        sum=x[i];
        temp=i+1;
      }
      

  }
  return temp;
}


let input=[
  [3,7,9,6,1],
  [2,7,1,4,3,0,5],
  [7,5,0,1,2,12,6]
]

for(let i=0; i<input.length; i++){
  console.log(`#${i+1} ${answer(input[i])}`);
}