

function Solution(arr){

  let result=0;

  let score=0;
// 1점 ,연속한 1인경우 연속한 count 만큼 정수 증가
  for(let i=0; i<arr.length; i++){
    if(arr[i]===1){
      result+=++score;

    }else{
      score=0;
    }
  }

  return result;
  // 1. 1: result(1),score(1)
  // 1->0:result(0),score(0)
// 2. 1result(2)  score(1)
// 3.  1result(4) score(2)
// 4-> 1: result(7),score(3)

}




console.log(Solution([1,0,1,1,1,0,1,1,0,0]));
console.log(Solution([1,1,0,1,1,0,1,1,1,1]));
console.log(Solution([1,1,1,1,1,0,0,1,1,0]));