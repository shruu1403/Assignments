#include<stdio.h>
#include<stdlib.h>
struct Node {
    int data;
    struct Node* next;
};
void insertionAtBeginning(struct Node**head,int newData)
{
    struct Node*newNode=(struct Node *)malloc(sizeof(struct Node));
    newNode->data=newData;
    newNode->next=*head;
    *head=newNode;  
}