function Sort(arr){


  let reverse=[];


  let tmp;
  for(let i=0; i<arr.length/2; i++){
    tmp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=tmp;
  }
  reverse=arr;
  return reverse;


  
}
let answer=[
  [1,2,3,4],
  [-1,6,"hello",-15],
  ["apple","banana",'mango'],
]

for(let i=0; i<answer.length; i++){
  console.log(`${i+1} ${Sort(answer[i])}`);
}