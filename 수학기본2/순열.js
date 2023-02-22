function permutate(arr){
  const result=[];

  const dfs=(i,arr)=>{

    if(i===arr.length){
      return result.push([...arr])
    }

    for(let j=i; j<arr.length; j++){
      //swap
      [arr[i],arr[j]]=[arr[j],arr[i]];

    
      //dfs
      dfs(i+1,arr);
      //swap
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    
  }
  dfs(0,arr);
  return result;
}

console.log(permutate(["a","b","c"]));