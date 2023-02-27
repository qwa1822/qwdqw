
function Solution(arr,target){


  


  let size={};


  for(let i=0; i<arr.length; i++){
    if(size[target-arr[i]]!==undefined){
      return [size[target-arr[i]],i]
    }


    size[arr[i]]=i;
  }
}





let arr=[
  [[2,7,11,15],9],
  [[3,2,4],6],
  [[3,3],6]
]


for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i][0],arr[i][1])}`);
}