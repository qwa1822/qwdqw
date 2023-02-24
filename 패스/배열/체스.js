function Solution(arr){


  let sum=[];
  let sum2=[];
  let two=[
    1,1,2,2,2,8
  ]


  // two에새 arr을 뺴주면됨
   

  for(let i=0; i<arr.length; i++){
    sum2.push(two[i]-arr[i]);
  }

  return sum2;




}

let arr=[
  [0,1,2,2,2,7],
  [2,1,2,1,2,1],
  [0,1,1,5,3,6],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${ i+1}  ${Solution(arr[i])}`);
}