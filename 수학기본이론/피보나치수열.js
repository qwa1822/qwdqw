let result;


function recursive(number){
  //양수일떄 멈출수있도록

  if(number==1 || number==0){
    return number;
  }


  //피보나치항은 전과 전전항을 더한게 피보나치수열
  //f(n)=f(n-1)+f(n-2)
  return recursive(number-1)+recursive(number-2);
}




result=recursive(6);
console.log(result);