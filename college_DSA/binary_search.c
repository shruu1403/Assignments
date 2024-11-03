#include <stdio.h>
//fun prototype
int binarySearch(int arr[], int size, int target){
        int left=0;
        int right=size-1;
        while(left<=right){
            int mid=left+(right-left)/2;
            if (arr[mid]==target){
                return mid;
            }
            else if (arr[mid]<target){
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
        return -1;
} 

int main(){
    int arr[]={1,4,7,10,15,23,42}; //sorted arr
    int size=sizeof(arr)/sizeof(arr[0]); //calc no of element
    int target=15;
    int index=binarySearch(arr,size,target); //call function
     
     if(index!=-1){
        printf("element %d found at index %d\n",target,index);
     } 
     else{
        printf("element %d not found in array\n",target);
     }
     return 0;
    }