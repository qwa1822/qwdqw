

function answer(length){
  let result=[];


  // 1.result-> 2차원 배열  
  for(let i=0; i<length; i++){
    result[i]=[];
  }

  /**
   * 반복문 패턴 구현
   * 1) length 길이만큼 시작해서 숫자를 채워준다.
   * 2)length-i,방향, 2회
   * 3)length==0 , 프로그램이 멈춘다.(값)
   * 
   */

  let direction=1;
  let x,y,num;
  x=y=num=0;
  

  x--;
  while(1){
    for(let i=0; i<length; i++){
      // x가 1씩증가하면서 오른쪽으로 보냄
      x+=direction
      result[y][x]=++num;
    }

    length--;
    if(length==0) break;

    for(let j=0; j<length; j++){
      // 내려가면서 y축의 증감
      y+=direction;
      result[y][x]=++num;
    }

    direction*=-1;  // 1 -> -1 ; -1=> 1 양수로 증가 음수로 증가  방향지시자

  }



  // 2. 패턴 기반으로 반복문 구현
  return result;
}


let input=[
  3,
  5,
  6,
]

for(let i=0; i<input.length; i++){
  console.log(answer(input[i]));
}