'use strict';

class AnimalShelter{
  constructor(){
    this.front = null;
    this.rear = null;

  }

  enqueue(type, name=null){
    if (!type || type.toLowerCase()!== 'cat' && type.toLowerCase()!== 'dog') throw new Error('this shelter only accept cats and dogs');

    let newAnimal = new Animal(type, name);
    if (!this.front) this.front=this.rear=newAnimal;
    else {
      this.rear.next = newAnimal;
      this.rear = newAnimal;
    }

  }

  dequeue(pref){
    // if shelter is empty
    if (!this.front) throw new Error('The shelter is empty now');
    // if pref is not cat or dog
    if(pref.toLowerCase()!=='cat' && pref.toLowerCase()!=='dog') return null;
    // if animal type has no preference Or
    // if front is what we're looking for
    if (!pref || this.front.type === pref.toLowerCase()) {

      let output = {type: this.front.type, name: this.front.name};
      this.front = this.front.next;
      return output;
    }

    // now we're ready to move on;
    let current = this.front;

    while(current){
      if (!current.next) return null;
      let next = current.next;
      if (next.type === pref.toLowerCase()) {
        current.next = next.next;
        let output = {type: next.type, name: next.name};
        return output;
      }
      current = current.next;

    }
  }
}

class Animal{
  constructor(type, name=null){
    this.type = type.toLowerCase();
    this.name = name;
    this.next = null;
  }
}


module.exports = AnimalShelter;

