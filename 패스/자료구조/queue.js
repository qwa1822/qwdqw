class Queue{
  constructor(){
    this.Queue={};
    this.headIndex=0;
    this.tailIndex=0;
  }

  enqueue(item){
    this.Queue[this.tailIndex]=item;
    this.tailIndex++;
  }

  dequeue(){
    const item=this.Queue[this.headIndex];
    delete this.Queue[this.headIndex];
    this.headIndex++;
    return item;
  }

  pop(){
    return this.Queue[this.tailIndex];
  }
  getLenth(){
    return this.headIndex-this.tailIndex;
  }
}

Queue=new Queue();

Queue.enqueue(5)
Queue.enqueue(4)
Queue.enqueue(3)

while(Queue.getLenth()!==0){
  console.log(Queue.dequeue());
}