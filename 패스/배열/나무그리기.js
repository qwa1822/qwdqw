


function Solution(height){

    let str="";



    for(let i=0; i<height; i++){
      // 한줄돌떄 공백문자 처리
      // 처음에 2번
      // 그다음 1번
      
      for(let j=0; j<height-i-1; j++){
        str+=" "
      }

      for(let k=0; k<i*2+1; k++){
        str+='*';
      }

      str+='\n';
    }

    return str;
  }

let arr=[
  3,5,7
]

for(let i=0; i<arr.length; i++){
  console.log(Solution(arr[i]));
}
