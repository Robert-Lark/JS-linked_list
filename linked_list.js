//To run this file in the terminal write node linked_list.js

const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const linked_list = (input) => {
    let head = {};
    let current = head;
    for (let i = 0; i < input.length; i++) {
      current.value = input[i];
      current.next = {};
      current = current.next;
    }
    current.next = null;
    console.log(head)
    return head
  };
  
  linked_list(input);