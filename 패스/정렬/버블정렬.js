
function Solution(arr){


  for(let i=arr.length-1; i>0; i--){
    for(let j=0; j<i; j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
   
  }
  return arr;
}


let arr=Array.from({length:30000},()=>Math.floor(Math.random()*1000));

let startTime=new Date().getTime();
Solution(arr);
let endTime=new Date().getTime();

console.log(`버블 정렬 소요시간:`,endTime-startTime,'ms');

arr=Array.from({length:30000},()=>7)


startTime=new Date().getTime();
Solution(arr);
endTime=new Date().getTime();

console.log(`정렬된 배열에 대한 버블 정렬 소요 시간:`,endTime-startTime,'ms');