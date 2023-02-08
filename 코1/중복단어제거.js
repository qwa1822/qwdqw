function answer(x){


  let new_arr=[];
  new_arr=Array.from(new Set(x));

  return new_arr;
  
}

let str=[
  ["john","alice","alice"],
  ["Hello","hello","Hello","hello"],
  ["kiwi","banana","mango","kiwi","banana"],
]

for(let i=0; i<str.length; i++){
  console.log(`#${i+1}    ${answer(str[i])}`);
}