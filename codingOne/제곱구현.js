function Solution(a,b){
  let result=1;
  for(let i=0; i<b; i++){
      result*=a;
  }

  return result;
}

let arr=[
  [2,3],
  [4,6],
  [1,100],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i][0],arr[i][1])}`);
}