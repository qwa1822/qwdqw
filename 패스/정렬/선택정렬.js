
// 선택 정렬 함수
function Solution(arr){


  for(let i=0; i<arr.length; i++){
   let minindex=i;    //가장 작은 원소의 인덱스

   for(let j=i+1; j<arr.length; j++){
    if(arr[minindex]>arr[j]){
      minindex=j;  
    }
   }

  //  스와프(swap)
   let temp=arr[i];
   arr[i]=arr[minindex];
   arr[minindex]=temp;
  }
  return arr;
}

console.log(Solution([3,41,21,23,334,221]));



