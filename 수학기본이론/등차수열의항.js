function recursive(a,d,n){


  let index=-1;

  if((n-a)%d==0){
    index=(n-a)/d+1;
    
  }else{
    index=-1;
  }

  return index;
}

let input=[
  [1,2,7],
  [2,3,10],
  [3,5,23],
]


function recursive2(a,d,n){ 


  let index=-1;
  let num;
  for(let i=1; ; i++){
    num=a+d*(i-1);
    console.log(num);

    if(num>n){
      index=-1;
      break;
    }
    if(num===n){
      index=i;
      break;                                                                                                                      
    }
    
  }

}

console.log(recursive2(1,3,5));

for(let i=0; i<input.length; i++){
  console.log(`# ${i+1} ${recursive(input[i][0],input[i][1],input[i][2])}`);
}