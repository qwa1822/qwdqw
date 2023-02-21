function Solution(arr){ 
 let count=0;

 for(let x of arr){
  if(x===isGroup(x).join('')) count++;

 }


 function isGroup(str){
  let newArray=[];
  for(let i=0; i<str.length; i++){
    if(!newArray.includes(str[i])) newArray.push(str[i]);
    if(str[i-1]===str[i]) newArray.push(str[i]);
  }
  return newArray;
 
 }

 console.log(count);

}

Solution(['aba','abab','abcabc','a'])