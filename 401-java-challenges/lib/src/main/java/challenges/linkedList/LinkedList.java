package challenges.linkedList;


public class LinkedList {

    Node head;
    Node tail;


    public void insert(int value){
        if (this.head == null) {
            this.head = new Node(value, this.head);
            this.tail = this.head;
            return;
        }
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

    public void append(int val){
        if (this.head == null) {
            this.head = new Node(val, this.head);
            this.tail = this.head;
            return;
        }
        Node newTail = new Node(val);
        this.tail.next = newTail;
        this.tail = newTail;
    }


    public void insertBefore (int val, int newVal) throws Exception {
        if (this.head ==null) {
            throw new Exception("Can NOT insert before an empty linked list");
        }

        if (this.head.value == val) {
            this.insert(newVal);
            return;
        }
        Node current = this.head;
        while(current.next != null) {
            if (current.next.value == val) {
                Node newNode = new Node(newVal, current.next);
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        throw new Exception("Can NOT find the given value");
    }



    public void insertAfter (int val, int newVal) throws Exception {
        if (this.head ==null) {
            throw new Exception("Can NOT insert after an empty linked list");
        }
        Node current = this.head;
        while(current != null) {
            if (current.value == val) {
                Node newNode = new Node(newVal, current.next);
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        throw new Exception("Can NOT find the given value");
    }

    public void delete (int val) throws Exception {
        if (this.head ==null) {
            throw new Exception("Can NOT delete node from an empty linked list");
        }

        if (this.head.value == val) {
            this.head = this.head.next;
            return;
        }

        Node current = this.head;
        while(current.next != null) {
            if (current.next.value == val) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        throw new Exception("Can NOT find the given value");
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