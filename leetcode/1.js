

let runningnums=function(nums){   

  if(nums.length===0){
    return [];
  }

  let currnet=nums[0];


  let sum=[];
 

  sum.push(currnet);
  for(let i=1; i<nums.length; i++){
    currnet+=nums[i];
    sum.push(currnet)
  }
  return sum;


}



console.log(runningnums([1,2,3,4]));
console.log(runningnums([1,1,1,1,1]));
console.log(runningnums([3,1,2,10,1]));