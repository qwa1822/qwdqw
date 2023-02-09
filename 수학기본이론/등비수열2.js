let result;



function forloop(s,t,number){

  if(number==1){
    return s;
  }


  return forloop(s,t,number-1)*t;
}



result=forloop(3,2,5);
console.log(result);