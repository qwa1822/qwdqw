
// 배열 최대값과 자리ㅏ찾는것 

function Solution(a){

  let b=Math.max(...a);
  
  console.log(b);
  console.log(a.indexOf(b)+1);
}





function Solution2(a){




  let min=Number.MIN_SAFE_INTEGER;
  let count=1;
  for(let i=0; i<a.length; i++){
    if(min<a[i]){
      min=a[i];
      count=i;
    }
  }

  console.log(min);
  console.log(count+1);
}
console.log(Solution([3,29,38,12,57,74,40]));
console.log(Solution2([3,29,38,12,57,74,40]));