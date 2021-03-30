package challenges.linkedList;


public class LinkedList {

    Node head;


    public void insert(int value){
        this.head = new Node(value, this.head);
    }

    public boolean includes(int val){

        Node current = this.head;
        while(current != null) {
            if(current.value == val) return true;
            current = current.next;
        }
        return false;
    }


    public String toString (){
        if (this.head == null){
            return "NULL";
        }
        int val = this.head.value;
        String output = "";
        Node current = this.head;
        while(current != null) {
            output += String.format("{ %d } -> ", current.value);
            current = current.next;
        }
        output += "NULL";
        return output;
    }


}

class Node {
    Node next;
    int value;

    public Node(int valuePotato){
        this.value = valuePotato;
    }

    public Node(int valuePotato, Node next){
        this.value = valuePotato;
        this.next = next;
    }
}