function answer(x,y){


  if(x>y){
    return "<"
  }else if(y>x){
    return ">"
  }else if(x==y){
    return "="
  }
}


let result=[
  [3,5],
  [7,4],
  [2,2],
]

for(let i=0; i<result.length; i++){
  console.log(`#${i+1} ${answer(result[i][0],result[i][1])}`);
}