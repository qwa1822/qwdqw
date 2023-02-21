
function Solution(str){

  let count=0;
  for(let x of str){
    if(x===isGroup(x).join("")) count++;
  }


  function isGroup(str){
    let newarr=[];
    for(let i=0; i<str.length; i++){
      if(!newarr.includes(str[i])) newarr.push(str[i]);
      if(str[i-1]===str[i]) newarr.push(str[i]);
    }

    return newarr;
    
  }
  console.log(count);

}


console.log(Solution(['hello','new','year']));
console.log(Solution(['aba','abab','abcabc','a']));