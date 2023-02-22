function answer(x_arr,y_arr){
  let result=[];

  if(x_arr[0]==x_arr[1]) result[0]=x_arr[2];
  else if(x_arr[0]==x_arr[2]) result[0]=x_arr[1];
  else if(x_arr[1]==x_arr[2]) result[0]=x_arr[0];

  if(y_arr[0]==y_arr[1]) result[0]=y_arr[2];
  else if(y_arr[0]==y_arr[2]) result[0]=y_arr[1];
  else if(y_arr[1]==y_arr[2]) result[0]=y_arr[0];

}