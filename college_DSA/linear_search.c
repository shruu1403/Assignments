#include <stdio.h>
//function prototype
int linearSearch(int arr[],int size,int target);
int main()
{
    int arr[]={10,23,4,7,15};
    int size=sizeof(arr)/(sizeof (arr[0]));//cal no of element in arr
    int target=7; // value we are searching for
    int index=linearSearch(arr,size,target);// calling linear search fun

    if (index!=-1)
    {
        printf("element %d found at index %d\n",target,index);
    }
    else
    {
        printf("element %d not found in the array\n",target);
    }
        return 0;
}

//function to perform linear search
int linearSearch(int arr[],int size,int target)
{
    for(int i=0;i<size;i++)
    { //iterate over each element in the array
      if (arr[i]==target)// check if the current element matched the target
      {
        return i; //return index of found element
      }
    }
    return -1; //return -1 if target not found
}