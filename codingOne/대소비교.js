


function Solution(a,b){


  if(a>b){
    return ">"
  }else if(b>a){
    return "<"
  }else if(a===b){
    return "="
  }
}

let arr=[
  [3,5],
  [7,4],
  [2,2],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${ i+1} ${Solution(arr[i][0],arr[i][1])}`);
}