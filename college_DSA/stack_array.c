#include<stdio.h>
#include<stdlib.h>
#define MAX 5

//stack structure definition
struct stack{
    int items[MAX];
    int top;
};
// function to initialize stack
void initStack(struct stack*s)
{
    s->top=-1;
}
//function to check if stack is full
int isFull(struct stack*s)
{
    return s->top==MAX-1;
}
//function to check if stack is empty
int isEmpty(struct stack*s)
{
    return s->top==-1;
}
//function to add element to a stack
void push(struct stack*s ,int value)
{
    if(isFull(s))
    {
        printf("stack overflow! cannot push %d\n",value);
    }
    else{
        s->items[++(s->top)]=value;
        printf("%d pushed to stack \n",value);
    }
}
//function to remove element using pop
int pop(struct stack*s)
{
    if(isEmpty(s))
    {
        printf("stack underflow! cannot pop from emty stack %d \n");
        return -1;
    }
    else{
        return s->items[(s->top)--];
    }
}
//function to peek element without removing it
int peek(struct stack*s)
{
    if(isEmpty(s))
    {
        printf("stack is empty! no top element to peek \n");
        return -1;
    }
    else{
        return s->items[s->top];
    }
}
//function to display contents of stack
void display(struct stack*s)
{
    if(isEmpty(s))
    {
        printf("stack is empty \n");
    }
    else{
        printf("stack elements:");
        for(int i=0;i<=s->top;i++)
        {
            printf("%d", s->items[i]);
        }
        printf("\n");
    }
}
int main()
{
    struct Stack stack;
    initStack(&stack);
    push(&stack,10);
    push(&stack,20);
    push(&stack,30);
    display(&stack);
    printf("top element is %d \n",peek(&stack));
    printf("popped element is %d \n",pop(&stack));
    display(&stack);
    return 0;
}
