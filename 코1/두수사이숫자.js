


function answer(x,y){

  let sum=[];
  if(x>y){
    for(let i=y; i<=x; i++){
      sum.push(i);
    }
  

  }
  else if(y>x){
    for(let i=x; i<=y; i++){
      sum.push(i);
    }
  }
  return sum;
 

}

function answer1(x,y){
  let result=[];


  if(x>y){
   let t=x;
   x=y;
   y=t;
  }

  for(let i=x; i<=y; i++){
    result.push(i)
  }

  return result;
}


let input=[
  [3,7],
  [8,3],
  [12,10],
]

for(let i=0; i<input.length; i++){
  process.stdout.write(`${i+1}`);
  console.log(answer1(input[i][0],input[i][1]));
}