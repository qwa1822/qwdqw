let count=0;
function parmutable(arr,s,r){



  if(s==r){
    count++;
    console.log(arr.join(''));
    return;
  }

  for(let i=s; i<arr.length; i++){
    [arr[s],arr[i]]=[arr[i],arr[s]];
    parmutable(arr,s+1,r);
    [arr[s],arr[i]]=[arr[i],arr[s]];
  }
}


let arr=['a','b','c'];

parmutable(arr,0,2)