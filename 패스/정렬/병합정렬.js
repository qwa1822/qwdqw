function merge(arr,left,mid,right){
  let i=left;
  let j=mid+1;
  let k=left;

  while(i<=mid && j<=right){
    if(arr[i]<=arr[j]) sorted[k++]=arr[i++];
    else sorted[k++]=arr[j++];
  }
  // 왼쪽 배열에 대한 처리가 다 끝난경우
  if(i>mid){
    for(; j<=right; j++) sorted[k++]=arr[j];
  }
  else{
    for(; i<=mid; i++) sorted[k++]=arr[i];
  }

  for(let x=left; x<=right; x++){
    arr[x]=sorted[x];
  }
}

function mergeSort(arr,left,right){
  if(left<right){
    let mid=parseInt((left+right)/2); //2개의 부분 배열로 분할(divide)
    mergeSort(arr,left,mid); //왼쪽 부분 배열 정렬 수행
    mergeSort(arr,mid+1,right)//오른쪽 부분 배열 정렬 수행
    merge(arr,left,mid,right)//정렬된 2개의 배열을 하나로 병합.
  }
}