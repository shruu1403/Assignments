#include<stdio.h>
#include<stdlib.h>
struct Node{
    int data;
    struct Node*next;
};
void insertAtPosition(struct Node**head ,int newData,int position)
{
    struct Node*newNode=(struct Node*)malloc(sizeof(struct Node));
    newNode->data=newData;
    if(position==0)
    {
        newNode->next=*head;
        *head=newNode;
        return;
    }
    struct Node*temp=*head;
    for(int i=0;temp!=NULL && i<position-1;i++)
    {
        temp=temp->next;
    }
    if(temp==NULL)
    {
        printf("position out of bounds \n");
        return;
    }
    newNode->next=temp->next;
    temp->next=newNode;
}