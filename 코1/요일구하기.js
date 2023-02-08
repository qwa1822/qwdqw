function answer(x){


  let day=["일","월","화","수","목","금","토"];

  let b=new Date(x).getDay();

  day=day[b];

  return day;
  
}


let str=[
  ["2021-01-27"],
  ["2021-02-27"],
  ["2021-03-14"],
]

for(let i=0; i<str.length; i++){
  console.log(`#${i+1} ${answer(str[i])}`);
}