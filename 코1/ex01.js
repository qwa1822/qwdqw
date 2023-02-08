function answer(x){

  let result="";

  for(let i=0; i<x; i++){
    result+="*";
  }

  return result;
}

let input=[5,7,12];


for(let i=0; i<input.length; i++){
  console.log(`# ${i+1} ${answer(input[i])}`);
}


