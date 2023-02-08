function answer(a){

  let sum=1;
  for(let i=0; i<a.length; i++){
    for(let j=0; j<a[i].length; j++){
      sum*=a[i][j];
    }
  }
  return sum;
}


let newArr=[
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
]
]

for(let i=0; i<newArr.length; i++){
  console.log(`#${i+1} ${answer(newArr[i])}`);
}