
function Solution(a,b){


  let sequnce=[];
  sequnce.push(a)
  sequnce.push(b)


  let sum;


  //true일떄까지 반복
  while(true){
    sum=a-b;
    a=b;
    b=sum;

    if(b<0) break;


    sequnce.push(b);
  }
  /**
   * [13,7,6]
   * 13 7 6   1   5   -4
   * a  b sum
   *    a  b  sum
   *        a   b sum
   *            a  b
   * 
   */


  
  return sequnce;
}

let arr=[
  [9,3],
  [6,3],
  [13,7]
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} #${Solution(arr[i][0],arr[i][1])}`);
}