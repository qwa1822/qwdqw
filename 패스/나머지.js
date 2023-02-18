function Solution(arr){



  let c=new Set();

  for(let i=0; i<arr.length; i++){
    let FourT=arr[i]%42;

    c.add(FourT);
  }

  return c.size
}



console.log(Solution([1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10]));

  console.log(Solution([42,
    84,
    252,
    420,
    840,
    126,
    42,
    84,
    420,
    126]));
    

  