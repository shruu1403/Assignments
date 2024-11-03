#include<stdio.h>
//function prototype
void bubblesort(int arr[], int size);
void printarray(int arr[], int size);
int main()
{
    int arr[]={64, 34, 5, 12, 22, 11, 90};
    int size=sizeof(arr)/sizeof(arr[0]);//calculate no. of elements in array
    printf("original array:\n");
    printarray(arr,size);//print the original array
    bubblesort(arr,size);//sort the array using bubble sort
    printf("sorted array:\n");
    printarray(arr,size);
    return 0;
}
//function to perform bubble sort
void bubblesort(int arr[], int size)
{
    for(int i=0; i<size-1; i++){
        for(int j=0; j<size-i-1; j++)   //becoz the largest element is already placed in its correct pos..we should shorten our range
        {
            if(arr[j]>arr[j+1])//if current ele is greater than next... swap arr[j] and arr[j+1]
            {
                int temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
//function to print array
void printarray(int arr[],int size)
{
    for(int i=0; i<size; i++)
    {
        printf("%d ",arr[i]);//print each element followed by space
    }
    printf("\n");
}

// time-O(n)
// space-O(1)