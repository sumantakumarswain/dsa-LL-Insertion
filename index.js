class Node {
  constructor(data){
    this.data = data
    this.reference = null 
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.insert = function(val){
      var node = new Node(val)
      if(this.head == null){
        this.head = node
       return this.head
      }
   
      var currentNode = this.head
      while(currentNode.reference != null){
        currentNode = currentNode.reference
      }
      currentNode.reference = node;
      return this.head  
    }
  }
}

 var linkedList = new LinkedList();
 linkedList.insert(5);
 linkedList.insert(4);
 linkedList.insert(3);
 linkedList.insert(2);
 console.log(linkedList.insert(1))