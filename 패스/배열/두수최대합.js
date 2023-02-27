

function Solution(arr){


  // 최대값 출력

  // 1. 1번쨰 최대값, 2번쨰 최대값
  
  arr=arr.sort((a,b)=>a-b);

  let sum=[arr[arr.length-1],arr[arr.length-2]]




  return sum


  // 최대값 하나더출력


}
function answer(nums){
  let result=[];

// result[0] <-- 1번쨰최대값, result[1] <--2번쨰최대값
  result=nums[0]>nums[1]?[nums[0],nums[1]]:[nums[1],[nums[0]]]

  for(let i=2; i<nums.length; i++){
    if(nums[i]>result[0]){
      

      result[1]=result[0];
      result[0]=nums[i];
    }else if(result[1]<nums[i]){
      result[1]=nums[i];
    }
  }

  return result;
}



let arr=[
  [-11,5,18,-2,-3,6,4,17,10,9],
  [3,7,-14,2,-6,13,-20,-2,-7,6,-17,-5,14,-9,19],
  [-15,-4,-8,12,12,-8,-8,9,10,15,-2,10,-14,2,13,19,-9,3,-18,14]
]

for(let i=0; i<arr.length; i++){
  console.log(`# ${i+1} ${answer(arr[i])}`);
}