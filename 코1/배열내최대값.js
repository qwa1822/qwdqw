function answer(x){

  let max=Number.MIN_SAFE_INTEGER;
  for(let i=0; i<x.length; i++){
    if(x[i]>max){
      max=x[i];
    }
  }
  return max;
}
let newArr=[
  [1,6,5,2,3],
  [19,41,23,-4,17],
  [-64,-27,-41,-33,-59],

]
for(let i=0; i<newArr.length; i++){
  console.log(`#${i+1} ${answer(newArr[i])}`);
}