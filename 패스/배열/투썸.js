

function Solution(arr,num){

 let sum=[];
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(num===arr[i]+arr[j]){
        sum[0]=i;
        sum[1]=j;
      }
    }
  }
  sum=sum.sort((a,b)=>a-b);
  return sum;
}


function Solution2(arr,num){
  let map={}; //key,value;


  //num===arr[i]-arr[j];
  for(let i=0; i<arr.length; i++){
    if(map[num-arr[i]]!=undefined){
      return [map[num-arr[i]],i];
    }


    map[arr[i]]=i;
  }
  return [];
}


console.log(Solution([2,7,11,15],9));
console.log(Solution([3,2,4],6));
console.log(Solution([3,3],6)); 



console.log(Solution2([2,7,11,15],9));
console.log(Solution2([3,2,4],6));
console.log(Solution2([3,3],6)); 