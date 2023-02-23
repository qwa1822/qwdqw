function Soluton(a,t,s){


  let result=[a,t,s];


  // sort
  result.sort((a,b)=>a-b);

  // 1.get d->등차값 찾기
  let d=0;

  for(let i=1; i<result.length; i++){
    d+=result[i]-result[i-1];
    
  }

  d/=result.length;
  // 2.빈 index찾기
  let location=result[2]-result[1]>result[1]-result[0]?2:1;


  // 3.이전값 +d;
  result=result[0]+d*location;

  return result;
}

let arr=[
  [1,7,10],
  [3,8,18],
  [11,2,5],

]

for(let i=0; i<arr.length; i++){
  console.log(`${i+1} ${Soluton(arr[i][0],arr[i][1],arr[i][2])}`);
}