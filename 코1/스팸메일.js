function answer(x){
  
  let spam_flag;

  x=x.toLowerCase();

  spam_flag=x.includes("advert");
  return spam_flag;

}

let newArr=[
  "RE:Request documents",
  "[Advertisement] free mobile!",
  "50% off this week(advertising)",
  
]

for(let i=0; i<newArr.length; i++){
  console.log(`#${i+1} ${answer(newArr[i])}`);
}