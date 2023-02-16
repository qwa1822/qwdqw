function answer(a,b,c){


  
  //sort
  let sorted=[a,b,c];
  sorted.sort((x,z)=>x-z);

  let sum=0;
  for(let i=1; i<sorted.length; i++){
    sum+=sorted[i]-sorted[i-1];
  }

  sum/=sorted.length;
  let index=sorted[2]-sorted[1]>sorted[1]-sorted[0]?2:1;


  sum=sorted[0]+sum*index;


  return sum;


}

let result=[
  [1,7,10],
  [3,8,18],
  [11,2,5]
]

for(let i=0; i<result.length; i++){
  console.log(`#${i+1} ${answer(result[i][0],result[i][1],result[i][2])}`);
}