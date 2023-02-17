let pivotIndex=function(nums){
 
  let totalSum=0, leftSum=0;


  nums.forEach((el)=>{
    totalSum+=el;
  })

  for(let i=0; i<nums.length; i++){
    if(totalSum-leftSum-nums[i]===leftSum){
      return i;
    }

    leftSum+=nums[i];
  }

  return -1;
}


console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));

