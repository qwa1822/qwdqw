function answer(a){
  //b는 문자의 경게선을 의미
  //g는 일치하는 패턴 변경 g를입력하지않으면 하나만변경
  //^는 문자열의 시작 
 let newStr=a.replace(/\b[a-z]/g,char=>char.toUpperCase());
  

 

  

  return newStr;

}

function answer2(a){
  let fix_str="";


  let tmp_list=a.split(' ');

  console.log(tmp_list);

  
  for(let item of tmp_list){
  fix_str+=item[0].toUpperCase()+item.slice(1)+" ";
  }

  return fix_str;
}

let b=[
  "Hello, My name is john","This week is closed due to COVID-19",
  "fifty percent off this week"
]

for(let i=0; i<b.length; i++){
  console.log(`#${i+1} ${answer(b[i])}`);
}

console.log(answer2("Hello, My name is john"));