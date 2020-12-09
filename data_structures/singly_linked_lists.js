//What is a linked list - a data structure that contains a head, tail, and length property

//Linked lists consist of nodes and each node has a value and a pointer
//to another node or null

//They do not us indices like an array. If you want to get to the fifth element, you must
//go through the first, second, third, and forth elements. Except that elements in a linked
//list are known as nodes.

//A node stores data such as a number or a string and also references the next node
//At the end of the list, there is no next node so it will contain null for the next node

//Singly linked list means that each node is only connected one directionally to the next node

//Comparison with arrays
//Lists
//Do not have indeces
//connected via nodes with a next pointer
//random access is not allowed

//Arrays
//Indexed in order
//insertion and deletion can be expensive
//can quickly be accessed at a specific index

//Linked lists are good at insertion and deletion. In arrays, if we insert something at the beginning
//or in the middle then each element will have to be re-indexed