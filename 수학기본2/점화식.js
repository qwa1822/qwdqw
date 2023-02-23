let result;


function recursive(s,t,number){

  // 멈출 조건
  if(number===1){
    return s;
  }

  let sum=s;
  return recursive(s,t,number-1)+t;


  // 반복할 코드조건
}


result=recursive(3,2,5);
console.log(result);