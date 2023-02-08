function answer(a){
  
 let newStr=a.replace(/\b[a-z]/g,char=>char.toUpperCase());
  

 

  

  return newStr;

}

let b=[
  "Hello, My name is john","This week is closed due to COVID-19",
  "fifty percent off this week"
]

for(let i=0; i<b.length; i++){
  console.log(`#${i+1} ${answer(b[i])}`);
}