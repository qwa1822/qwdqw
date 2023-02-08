function answer(a,b,c,d){

  let sum1=a/b;
  let sum2=c/d;
  if(sum1>sum2){
    return 1;
  }else if(sum2>sum1){
    return -1;
  }else if(sum1==sum2){
    return 0;
  }


}


let result=[
  [14,2,6,6],
  [6,7,8,9],
  [18,2,36,4]
];

for(let i=0; i<result.length; i++){
  console.log(`${i+1} ${answer(result[i][0],result[i][1],result[i][2],result[i][3])}`);

}