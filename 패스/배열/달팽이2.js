let input=[3,5,6];


function answer(length){
  let result=[];



  // 2차원 배열을 만듬

  // 1.result=? 2차원 배열

  for(let i=0; i<length; i++){
    result[i]=[];
  }







  // 2. 패턴 기반으로 반복문 구현
  /**
   * 2.반복문 패턴 구현
   * 1)length 길이만큼 시작해서 숫자를 채워주고
   * 2)length-i , 방향, 2회
   * 3)length==0, 프로그램이 멈춘다.
   * 
   */
  let direction=1;
  let x,y,num;
  x=y=num=0;

  x--; // x에 -1을 뺀상태에서 시작 
  while(1){
//오른쪽으로 간다는건 x축의 변화
    
    for(let i=0; i<length; i++){
      x+=direction;    //시작위치는  1이니깐 -1을해줘서 그전부터 시작하게함
      result[y][x]=++num;
    }
   
// 4-> 3 -> 2 -->1
    length--;

    if(length===0){
      break;
    }


    for(let j=0; j<length; j++){
      y+=direction;
      // 1,2,3,4,5 
      //  7
      // 8
      // 9
      result[y][x]=++num;

    }

    direction*=-1; // 1=> -1   -1=>1

  }

  



  return result;
}
const snail=array=>{
  const middle=array.slice(1,array.length-1).map(row=>
    row.slice(1,row.length-1))

  
  return[
    array[0],
    array.slice(1,array.length-1).map(row=>
      row[row.length-1]
      ),

    array.length>1?[array.length-1].reverse():[],
    array.slice(1,array.length-1).reverse().map(row=>
      row[0]
      ),
      middle.length>0?snail(middle):[]
  ]
}

const snail2=function(array){
  let arr=array;
  let snailOutput=[];
  console.log(arr);

  while(arr.length>0){
    //Fake a First row and save it

    const firstRow=arr[0];
    snailOutput=snailOutput.concat(firstRow);
    
    // Remove FirstRow
    arr.shift();


    if(arr[0]){
    arr=arr[0].map((col,i)=>
    arr.map(row=>row[row.length-1-i]));
    console.log(arr);
  }




    // Rptate 90 degree matrix
  }
  return snailOutput
}

/**
 * 
{snail([[1,2,3,4,5,6],
[20,21,22,23,24,7],
[19,32,33,34,25,8],
[18,31,36,35,26,9],
[17,30,29,28,27,10],
[16,15,14,13,12,11],
]));} array 
 */

const snail3=array=>{

  const middle=array.slice(1,array.length-1).map(row=>row.slice(1,row.length-1))

  return[
    array[0],
    // 행
    array.slice(1,array.length-1).map(row=>row[row.length-1]),
    array.length>1?array[array.length-1].reverse():[],
    array.slice(1,array.length-1).reverse().map(row=>row[0]),
    middle.length>0? snail(middle):[]
  ].flat();
}


console.log(answer(3));

console.log(snail([[1,2,3,4,5,6],
[20,21,22,23,24,7],
[19,32,33,34,25,8],
[18,31,36,35,26,9],
[17,30,29,28,27,10],
[16,15,14,13,12,11],
]));