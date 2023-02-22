

// 두수사이 숫자 **/

function Solution(a,b){ 
  

  let result=[];

  if(a>b){
    [a,b]=[b,a];
  }
  for(let i=a; i<=b; i++){
    result.push(i);
  }

  return  result;


}


let input=[
  [3,7],
  [8,3],
  [12,10],
]

for(let i=0; i<input.length; i++){
  process.stdout.write(`#${i+1}`);
  console.log(Solution(input[i][0],input[i][1]));
}