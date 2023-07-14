#include <cs50.h>
#include <stdio.h>

bool prime(int number);

int main(void)
{
    int min;
    do
    {
        min = get_int("Minimum: ");
    }
    while (min < 1);

    int max;
    do
    {
        max = get_int("Maximum: ");
    }
    while (min >= max);

    for (int i = min; i <= max; i++)
    {
        if (prime(i))
        {
            printf("%i\n", i);
        }
    }
}

bool prime(int number)
{
    int n = number;

    int i = 2;

    int j = 3;

    int m = 5;

    if (n == 0 || n == 1)
    {
        return false;
    }
    if (n == 2 || n == 3 || n == 5)
    {
        return true;
    }
    if (n % i == 0)
    {
        return false;
    }
    if (n % j == 0)
    {
        return false;
    }
    if (n % m == 0)
    {
        return false;
    }
    return n;
}
