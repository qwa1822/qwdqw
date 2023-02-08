function answer(x,y){
    return x>y?y:x;

}

let result=[
  [16,3],
  [-3,1],
  [10000,525],
]

for(let i=0; i<result.length; i++){
  console.log(`${i+1} ${answer(result[i][0],result[i][1])}`);
}