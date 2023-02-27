
function Solution(nums,target){

  let map={}

  for(let i=0; i<nums.length; i++){
    if(map[target-nums[i]]!==undefined){
      return [map[target-nums[i]],i];
    }
    map[nums[i]]=i;
    console.log(map);
  }

  return [];

}



let input=[
  [[2,7,11,15],9],
  [[3,2,4],6],
  [[3,3],6]
];

for(let i=0; i<input.length; i++){
  console.log(`#${i+1}  ${Solution(input[i][0],input[i][1])}` );
}