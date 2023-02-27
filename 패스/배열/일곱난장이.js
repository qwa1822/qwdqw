function Solution(arr){



// 1. 9명(배열 총 합) =7명+2명(faker)
// 9명-7명=2명에대한 합 숫자
let result=[];
let sum=0;
for(let i=0; i<arr.length; i++){
  sum+=arr[i];
}
// 9명값 =7-2
sum-=100; // faker 2명에 대한 배지값


// 2. for 두 요소의 합이 faker 2명에 대한 합 숫자과 같은지 비교=>i,j
let faker=[];
for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(sum==arr[i]+arr[j]){
    faker[0]=i;
    faker[1]=j;
    break;
  }
}

if(faker.length!==0) break;
}
console.log(faker);


// 3. faker 두명을 제외하고 나머지 배지값을 result에 넣어준다.
let count=0;
for(let i=0; i<arr.length; i++){
  if(faker[0]!=i && faker[1]!=i){
    result.push(arr[i]);
  }
}

return result;

// 3.

}

let arr=[
  [1,5,6,7,10,12,19,29,33],
  [25,23,11,2,18,3,28,6,37],
  [3,37,5,36,6,22,19,2,28],

]
for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])}`);
}