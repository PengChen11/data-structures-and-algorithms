package challenges.linkedList;

import org.junit.Test;
import static org.junit.Assert.*;

public class LinkedListTest {

    @Test public void testLinkedList_insert(){
        LinkedList linky = new LinkedList();
        assertNull("the head of a new LL should be null", linky.head);
        linky.insert(5);
        assertEquals("the head node''s value should be 5", 5, linky.head.value);
        linky.insert(7);
        assertEquals("the head node''s value should be 7", 7, linky.head.value);
        assertEquals(
                "the head.next should hold a value of 5",
                5,
                linky.head.next.value
        );
        linky.insert(9);
        assertEquals("the head node''s value should be 9", 9, linky.head.value);
        assertEquals(
                "the head.next should hold a value of 7",
                7,
                linky.head.next.value
        );
        assertEquals(
                "the node after 7 should hold a value of 5",
                5,
                linky.head.next.next.value
        );
    }

    @Test public void testLinkedList_includes(){
        LinkedList linky = new LinkedList();
        linky.insert(1);
        linky.insert(2);
        linky.insert(3);
        assertTrue(linky.includes(3));
        assertFalse(linky.includes(4));
    }

    @Test public void testLinkedList_toString(){
        LinkedList linky = new LinkedList();
        linky.insert(1);
        linky.insert(2);
        linky.insert(3);
        String expected = "{ 3 } -> { 2 } -> { 1 } -> NULL";
        String actual = linky.toString();
        assertEquals("linked list should return string in proper format", expected, actual);
    }

    @Test public void testLinkedList_append() {
        LinkedList linky = new LinkedList();
        linky.insert(1);
        linky.append(2);
        linky.append(3);
        assertEquals("linked list tail value should return the correct one",3, linky.tail.value);
        String expected = "{ 1 } -> { 2 } -> { 3 } -> NULL";
        assertEquals("linked list to string should return the correct string", expected, linky.toString());
    }

    @Test public void testLinkedList_insertBefore() throws Exception{

        LinkedList linky = new LinkedList();
        Throwable exception1 = assertThrows(Exception.class, () -> linky.insertBefore(1,2));
        assertEquals("Can NOT insert before an empty linked list", exception1.getMessage());

        linky.insert(1);
        linky.insertBefore(1,2);
        assertEquals(2, linky.head.value);

        linky.append(2);
        linky.append(3);
        linky.insertBefore(2, 4);
        String expected = "{ 4 } -> { 2 } -> { 1 } -> { 2 } -> { 3 } -> NULL";
        assertEquals("Should be able to insert before the given value", expected, linky.toString());

        Throwable exception2 = assertThrows(Exception.class, () -> linky.insertAfter(5,2));
        assertEquals("Can NOT find the given value", exception2.getMessage());
    }

    @Test public void testLinkedList_insertAfter() throws Exception{

        LinkedList linky = new LinkedList();
        Throwable exception1 = assertThrows(Exception.class, () -> linky.insertAfter(1,2));
        assertEquals("Can NOT insert after an empty linked list", exception1.getMessage());

        linky.insert(1);
        linky.append(2);
        linky.append(3);
        linky.insertAfter(2, 4);
        String expected = "{ 1 } -> { 2 } -> { 4 } -> { 3 } -> NULL";
        assertEquals("Should be able to insert after the given value", expected, linky.toString());

        Throwable exception2 = assertThrows(Exception.class, () -> linky.insertAfter(5,2));
        assertEquals("Can NOT find the given value", exception2.getMessage());
    }

    @Test public void testLinkedList_delete() throws Exception{

        LinkedList linky = new LinkedList();
        Throwable exception1 = assertThrows(Exception.class, () -> linky.delete(1));
        assertEquals("Can NOT delete node from an empty linked list", exception1.getMessage());

        linky.insert(1);
        linky.append(2);
        linky.append(3);
        linky.delete(2);
        String expected = "{ 1 } -> { 3 } -> NULL";
        assertEquals("Should be able to delete the node with given value", expected, linky.toString());

        Throwable exception2 = assertThrows(Exception.class, () -> linky.delete(5));
        assertEquals("Can NOT find the given value", exception2.getMessage());
    }
}
