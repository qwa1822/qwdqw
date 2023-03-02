function getCount(array){

  

  // 1.출연빈도 구하기

  let counts=array.reduce((acc,cur)=>{
    acc[cur]=(acc[cur]||0)+1;

    return acc;
  },{})


  // 2. 출연빈도를 배열로?
  let result=[];
  for(let key  in counts){
    result.push([key,counts[key]]);
  }

// 3. 역순으로 정렬
  
  result.sort((first,second)=>{
    return second[1]-first[1];
  })

  return result;
}
const strings = ['a', 'b', 'b', 'c','c','c', 'd', 'd', 'd', 'd'];
console.log(getCount(strings));