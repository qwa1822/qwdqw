function answer(x,y){
  
  let result;
  if(x%5!==0){
    result=y;
  }
  else if(x+0.5>y){
    result=y;
  }else{
    result=y-x-0.5;
  }

  return result;
}


let result=[
  [40,130.00],
  [33,130.00],
  [300,300.00]
]

for(let i=0; i<result.length; i++){
  console.log(`${i+1} ${answer(result[i][0],result[i][1])}`);
}