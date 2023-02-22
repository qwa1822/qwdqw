function Solution(a,b){

  return a>b?b:a;

}

let arr=[
  [16,3],
  [-3,1],
  [1000,525]
]


for(let i=0; i<arr.length; i++){
  console.log(`# ${i+1} ${Solution(arr[i][0],arr[i][1])} `);
}