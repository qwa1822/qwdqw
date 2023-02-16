let input=['a','b','c'];
let count=0;



function parmutation(arr,s,r){


    //1.재귀함수를 멈춰야할 조건
  if(s==r){
    count++;
    console.log(arr);
    return
  }




  //2. 재귀를 돌면서 변경되어야 될 부분/메인로직
  for(let i=s; i<arr.length; i++){
    [arr[s],arr[i]]=[arr[i],arr[s]]  //swap
    parmutation(arr,s+1,r);
    [arr[s],arr[i]]=[arr[i],arr[s]]  //원상복귀
  }

  /*
  i=0  s=0 ,r=2
  [a]
  s+1=   s=1
  [a,b]
  s=2 r=2 
  [a,b,c]


  s=1 r=2 i=2 [a,b,c]

  */

}

parmutation(input,0,2);
console.log(count);