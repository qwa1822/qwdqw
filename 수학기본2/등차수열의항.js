





//1,3,5,7
//(7-1)=>6%2===0 등차수열의 항

function Solution(a,d,n){


  
   let index=-1;

  if((n-a)%d==0){  //등차수열의 값이구나
    index=(n-a)/d+1;  //찾으려는값 -a를통해서 나온데이터를d 를 나누면
    //몇번쨰만큼 떨어져있는지를 알수있다.
    //그항에 index를 찾을수있다 for문없이도.


  }else index=-1;


  return index;
}



let arr=[
  [1,2,7],
  [2,3,10],
  [3,5,23],
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1}  ${Solution(arr[i][0],arr[i][1],arr[i][2])}`);
}