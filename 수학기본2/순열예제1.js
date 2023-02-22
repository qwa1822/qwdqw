let input=['a','b','c'];
let count=0;


function permutation(arr){
  // for i => 첫번째 위치시킬요소 [i,0,0]
for(let i=0; i<input.length; i++){

  // for j=> 두번쨰 index 위치시킬요소 [i,j,0]
  for(let j=0; j<input.length; j++){
    if(i===j) continue;
    // for k-> 세번째 index 위치시킬요소[i,j,k]
    for(let k=0; k<input.length; k++){
      if(k===i) continue;
      if(k===j) continue;

      console.log(arr[i],arr[j],arr[k]);
    }
  }
}
}

permutation(input)