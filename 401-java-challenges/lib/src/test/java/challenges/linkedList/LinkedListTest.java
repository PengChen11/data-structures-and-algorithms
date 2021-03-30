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
}
