// Write a function to replace vowels with numbers
// Get practice with strings
// Get practice with command line
// Get practice with switch

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    string input = argv[1];


    if (argc != 2)
    {
        printf("write a word\n");

        return 1;
    }

    for (int i = 0; i < strlen(input); i++)

        if (input[i] == 'a')
        {
            printf("%c", input[i] - 43);
        }
        else if (input[i] == 'e')
        {
            printf("%c", input[i] - 50);
        }
        else if (input[i] == 'i')
        {
            printf("%c", input[i] - 56);
        }
        else if (input[i] == 'o')
        {
            printf("%c", input[i] - 63);
        }
        else
        {
            printf("%c", input[i]);
        }

    printf("\n");
}

