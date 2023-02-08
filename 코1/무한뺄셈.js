


function answer(x,y){
  
  let answer=[];
  answer.push(x)
  answer.push(y);
  let sum=0;

  while(1){
    sum=x-y;
    x=y;
    y=sum;

    if(y<0) break;


    answer.push(y);



  }

  return answer;
}

let input=[
  [9,3],
  [6,3],
  [13,7]
]

console.log(answer(9,3));
console.log(answer(6,3));
console.log(answer(13,7));