function answer(arr){
 return Math.max(...arr);
}


let input=[
  [1,6,5,2,3],
  [19,41,23,-4,17],
  [-64,-27,-41,-33,-59],
]

for(let i=0; i<input.length; i++){
  console.log(`${i+1} ${answer(input[i])}`);
}