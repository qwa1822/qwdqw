

const getCombinations=(arr,selectNumber)=>{
  let result=[];
  if(selectNumber===1) return arr.map((value)=>[value]);



  arr.forEach((value,index,origin)=>{
    const rest=origin.slice(index+1);
    const combinations=getCombinations(rest,selectNumber-1);
    const attached=combinations.map((item)=>[value,...item]);


    result.push(...attached);
  })

  return result;
}


const example=[1,2,3,4];
const result=getCombinations(example,3);
console.log(result);