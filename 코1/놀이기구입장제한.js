function answer(a){


  if(a.height>150){
    return true;
  } else{
    return false;
  }
}


let result=[
  {
    name:"john",age:27,height:181,
  },
  {
    name:"alice",age:12,height:148,
  },
  {
    name:"bob",age:14,height:156,
  }

]

for(let i=0; i<result.length; i++){
  console.log(`${i+1} ${answer(result[i])}`);
}