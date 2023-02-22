// 삽입 정렬 함수
function insertionSort(arr){
  for(let i=1; i<arr.length; i++){
    for(let j=i; j>0; j--){
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if(arr[j]<arr[j-1]){
        // 한칸씩 왼쪽으로 이동
        // 스와프(swap)
        let temp=arr[j];
        arr[j]=arr[j-1];
        arr[j-1]=temp;
      }else{
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}

let arr=Array.from({length:30000},()=>Math.floor(Math.random()*1000));


startTime=new Date().getTime();
insertionSort(arr);
endTime=new Date().getTime();


console.log('삽입 정렬 소요시간:',endTime-startTime);

arr=Array.from({length:30000},()=>7);

startTime=new Date().getTime();
insertionSort(arr);
endTime=new Date().getTime();


// 시간차 출력

console.log('정렬된 배열에 대한 삽입 정렬 소요시간',endTime-startTime,'Ms');
