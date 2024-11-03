#include<stdio.h>
#include<stdlib.h>
struct Node {
    int data;
    struct Node* next;
};
void insertionAtEnd(struct Node**head ,int newData)
{
    struct Node*newNode=(struct Node*)malloc(sizeof(struct Node));
    newNode->data=newData;
    newNode->next=NULL;
    if(*head==NULL)
    {
        *head=newNode;
        return;
    }
    struct Node*temp=*head;
    while(temp->next!=NULL)
    {
        temp=temp->next;
    }
    temp->next=newNode;
}
