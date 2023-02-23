function check(data){
  let setdate=new Set(data[0]);

  for(let i=0; i<data.length-1; i++){
    if(data[i]!=data[i+1]){
      if(setdate.has(data[i+1])){
        return false;
      }
      else{
        setdate.add(data[i+1]);
      }
    }
  }
  return true;
}