


function Solution(a,b,c){

  b=b+c;
  if(b>60){
    b=b/60;
    a+=b;
    if(a<0){
      a=23;
    }
  }
  return b
}

console.log(Solution(14,30,20));
console.log(Solution(17, 40
,  80));