// Practice writing a function to find a max value

#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

int max(int array[], int n);

int main(void)
{
    int n;
    do
    {
        n = get_int("Number of elements: ");
    }
    while (n < 1);

    int arr[n];

    for (int i = 0; i < n; i++)
    {
        arr[i] = get_int("Element %i: ", i);
    }

    printf("The max value is %i.\n", max(arr,n));
}

// TODO: return the max value
int max(int arr[], int n)
{
 int lengh = n;

    for (int i = 0; i < lengh; i++)
    {

            int key = arr[i];

            int j = i - 1;

            while ( j >= 0 && arr[j] > key)
            {
                arr [j + 1 ] = arr[j];

                j = j - 1;
            }
            arr [j + 1] = key;
    }
    return arr[n -1];

}
