


let arr=["fineapple","Banana","durian","apple","carrot"];

function compare(a,b){
  let upperA=a.toUpperCase();
  let upperB=b.toUpperCase();

  if(upperA<upperB) return -1;
  else if(upperA>upperB) return 1;
  else return 0;

}

arr.sort(compare)
console.log(arr);
