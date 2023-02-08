let array=[
  [101,102,103],
  [201,202,203],
  [301,302,303],
]



for(let i=0; i<array.length; i++){
  for(let j=0; j<array[i].length; j++){
    console.log(array[i][j]);
  }
  console.log('\n');
}

let fruits=[
  ["straberry",50],
  ["quite",40],
  ["ice",150],
]

for(let i=0; i<array.length; i++){
  console.log(`fruit: ${fruits[i][0]}, amount:${fruits[i][1]}`);
}