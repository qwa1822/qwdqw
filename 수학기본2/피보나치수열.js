let result;

function recursive(number){
  if(number==1 | number==0){  //d양수일떄 멈출수있도록
    return number;
  }


  //f(n)=f(n-1)+f(n-2)
  return recursive(number-1)+recursive(number-2);

}

result=recursive(7);
console.log(result);