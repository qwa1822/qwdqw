

const getCombinations=function(arr,selectNumber){
    let results=[];
    if(selectNumber===1) return arr.map((value)=>[value]);


    arr.forEach((fixed,index,item)=>{
      let rest=item.slice(index+1);
      let combinations=getCombinations(rest,selectNumber-1);
      let attached=combinations.map((combination)=>[fixed,...combination]);

      results.push(...attached);
    })

    return results;
}




const example=[1,2,3,4];
const result=getCombinations(example,3);

console.log(result);