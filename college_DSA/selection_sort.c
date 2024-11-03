#include<stdio.h>
//Function prototype
void SelectionSort(int arr[],int size);
void printArray(int arr[],int size);
int main()
{
    int arr[]={64,25,12,22,11};
    int size=sizeof(arr)/sizeof(arr[0]);
    printf("original array :\n");
    printArray(arr,size);//print the original array
    SelectionSort(arr,size);//sort the array using selection sort
    printf("sorted array:\n");
    printArray(arr,size);//print the sorted array
    return 0;
}
//function to perform selection sort
 void SelectionSort(int arr[],int size)
 {
    for(int i=0;i<size-1;i++)
    {
        int minIndex=i;
        //inner loop to find the maximum element in unsorted position
        for(int j=i+1;j<size;j++)
        {
            if(arr[j]<arr[minIndex])//if a smaller element is found
            {
                minIndex=j;//update the index of minimum element
            }
        }
        //swap the found minimum element to send it to its correct position
        if(minIndex!=i)  //if 4!=0
        {
            int temp=arr[i];       //temp=arr[0]=64
            arr[i]=arr[minIndex]; //arr[0]=arr[4]=11
            arr[minIndex]=temp;  //arr[4]=temp=64
        }
    }
 }
 //function to print the array
 void printArray(int arr[],int size)
 {
    for(int i=0;i<size;i++)
    {
        printf("%d ",arr[i]);//print each element followed by space
    }
    printf("\n");//print new line
 }   

//  time-O(n^2)
//  space-O(1)