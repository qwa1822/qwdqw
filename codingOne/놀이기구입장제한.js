

function Solution(a){

  return a.height>=150?true:false;
}




let arr=[

  {name:"John",age:27,height:181},
  {name:"alice",age:12,height:148},
  {name:"bob",age:14,height:156},
]

for(let i=0; i<arr.length; i++){
  console.log(`${i+1}  ${Solution(arr[i])}`);
}