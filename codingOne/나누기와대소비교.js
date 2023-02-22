

function Solution(a,b,c,d){

  let sum1=a/b;
  let sum2=c/d;

  if(sum1>sum2){
    return 1;
  }else if(sum1==sum2){
    return 0;
  }else if(sum1<sum2){
    return -1;
  }
  
}


let arr=[
  [14,2,6,6],
  [6,7,8,9],
  [18,2,36,4],
]


for(let i=0; i<arr.length; i++){
console.log(` #${i+1} ${Solution(arr[i][0],arr[i][1],arr[i][2],arr[i][3])}`);
}