function Solution(a){
 
  let spam_flag;
  a=a.toLowerCase();

  spam_flag=a.includes('advert');
  

  




  return spam_flag;
  

}

let arr=[
  "Re:Request documents",
  "[Advertisement]free mobile",
  "50% off this week(advertising)",
]

for(let i=0; i<arr.length; i++){
  console.log(`#${i+1} ${Solution(arr[i])} `);
}