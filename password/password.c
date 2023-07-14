// Check that a password has at least one lowercase letter, uppercase letter, number and symbol
// Practice iterating through a string
// Practice using the ctype library

#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

bool valid(string password);

int main(void)
{
    string password = get_string("Enter your password: ");
    if (valid(password))
    {
        printf("Your password is valid!\n");
    }
    else
    {
        printf("Your password needs at least one uppercase letter, lowercase letter, number and symbol\n");
    }
}

// TODO: Complete the Boolean function below
bool valid(string password)
{
    int i;

    int letters = 0;

    int digits = 0;

    int caracter = 0;

    int capital = 0;

    int n = strlen(password);

    for( i = 0; i < n; i++)
    {
        if ( islower(password[i]))
        {
            letters++;
        }
        else if (isupper(password[i]))
        {
            capital++;
        }
        else if (isdigit(password[i]))
        {
            digits++;
        }
        else if (password[i] >= 33 && password[i] <= 47)
        {
            caracter++;
        }
    }
    if (letters != 0 && capital != 0 && digits != 0 && caracter !=0)
    {
        return true;
    }
    else
    {
        return false;
    }
    return 1;
}
