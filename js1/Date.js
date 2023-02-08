function dateSub(old_date,new_date){
  return new_date-old_date;
}

function getTimeSub(old_date,new_date){
  return new_date.getTime()-old_date.getTime();
}

function benchmark(callback_func){
  let data_1=new Date("2020-01-01");
  let data_2=new Date();

  let start=Date.now();

  for(let i=0; i<100000; i++){
    callback_func(data_1,data_2);
  }
  return Date.now()-start;
}

console.log("dateSub:"+benchmark(dateSub)+'ms');
console.log("dateSub:"+benchmark(getTimeSub)+'ms');