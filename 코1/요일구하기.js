function answer(x){
  let answer=["일요일","월","화","수","목","금","토"];


  let today=new Date(x).getDay();

  let answerLABLE=answer[today];

  return answerLABLE;
}

let string=[
  ["2021-01-27"],
  ["2021-02-27"],
  ["2021-03-14"],
];


for(let i=0; i<string.length; i++){
  console.log(`${i+1} ${answer(string[i])}`);
}