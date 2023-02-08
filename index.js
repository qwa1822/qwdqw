let nums=[1,2,3,4,5];
let call_count=0;

console.log('result\tvalue\tindex');

let sum=nums.reduce(function(accumulator,item,index,array){
  console.log(accumulator,'\t\t',item,'\t\t',index);
  call_count++;
  return accumulator+item;
})

console.log(call_count);
console.log(sum);