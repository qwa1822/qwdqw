function Solution(n1,n2){

  
  let result=[];



  // 0.각 자릿수별 index=> 0
  for(let i=0; i<10; i++){
      result[i]=0;
  }

//1. s<=n<=e
  let sum;


  // 2.n=>% /
  for(let i=n1; i<=n2; i++){
    sum=i;


    while(sum!==0){
      result[sum%10]++;
      sum/=10;
      sum=parseInt(sum)
    }
  }

  return result;



}


let input=[
  [129,137],
  [1412,1918],
  [4159,9182],
]

for(let i=0; i<input.length; i++){
  console.log(Solution(input[i][0],input[i][1]));
}