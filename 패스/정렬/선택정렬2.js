
// 선택 정렬의 수행 시간 측정*/
// 0부터 999까지의 정수 30000개를 담은 배열 생성


function selectionSort(arr){
  

  for(let i=0; i<arr.length; i++){
    let start=i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[start]>arr[j]){
        start=j;
      }
    }
    let temp=arr[i];
    arr[i]=arr[start];
    arr[start]=temp;
  }
}


let arr=Array.from({length:30000},()=>Math.floor(Math.random()*1000));
// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime=new Date().getTime();
selectionSort(arr);
let endTIme=new Date().getTime();


console.log(`선택 정렬 소요시간`,endTIme-startTime,'ms');

// 이미 정렬된 배열에 대한 선택 정렬의 수행시간 측정
// 0부터 999까지의 정수 3000개를 담은 배열생성
arr=Array.from({length:30000},()=>7);


startTime=new Date().getTime();
selectionSort(arr);
endTIme=new Date().getTime();


console.log(`정렬된 배열에 대한 선택 정렬 소요시간:`,endTIme-startTime,"ms");


