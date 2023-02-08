function User(name){
  console.log(new.target);
  this.name=name;
}

let result_1=User("john");
let result_2=new User("john");
console.log(result_2);