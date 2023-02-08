function reverseTwo(a){

  let reverse=[]

  for(let i=a.length-1; i>=0; i--){
    reverse.push(a[i]);
  }

  return reverse;

}



let answer=[
  [4,3,2,1],
  [-15,'hello',6,-1],
  ['mango','banana','apple']
]

for(let i=0; i<answer.length; i++){
  console.log(`# ${i+1} ${reverseTwo(answer[i])}`);
}