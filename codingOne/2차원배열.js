function Solution(arr){
    
  let sum=1;
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        sum*=arr[i][j];
    }
  }

  return sum;
}

let arr=[
  [[1],[2],[3]],
  [
    [1,2],
    [3,4],
    [5,6,7],
  ],
  [
    [5,1],
    [0.2,4,0.5],
    [3,9],
  ],
];

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])}`);
}