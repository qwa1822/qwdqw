function answer(x,y){

  let result=[];


  if(x[0]==x[1]) result[0]=x[2];
  else if(x[0]==x[2]) result[0]=x[1];
  else if(x[1]==x[2]) result[0]=x[0];


  if(y[0]==y[1]) result[1]=y[2];
  else if(y[0]==y[2]) result[1]=y[1];
  else if(y[1]==y[2]) result[1]=y[0];


  return result;

}


let result=[
  [[5,5,8],[5,8,5]],
  [[3,1,1],[2,1,2]],
  [[7,7,3],[4,1,1]],
]

for(let i=0; i<result.length; i++){
  process.stdout.write(`#${i+1}`);
  console.log(answer(result[i][0],result[i][1]));
}