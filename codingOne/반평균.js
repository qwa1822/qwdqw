
/** 반 평균  */
function Solution(score){


  let average=0;
  

  // 1. 반인원만큼 점수를 더한다.
  for(let i=0; i<score.length; i++){
    average+=score[i];
  }


  // 2. 반인원 수만큼 더한 점수를 나눠 평균을 구한다
  average/=score.length;


 


  // 3. 소수 둘째자리까지 표현되도록 한다(반올림처리.)
  average=average.toFixed(2);

  return average

}

let arr=[
  [80,95,65,70,100],
  [82,77,51,64,73,90,80],
  [100,71,59,88,72,75,91,93],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])}`);
}