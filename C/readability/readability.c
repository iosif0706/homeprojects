#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

int main()
{
    string text = get_string("Text:");

    int letters = 0;
    int word = 1;
    int sentece = 0;

    for (int i = 0; i < strlen(text);  i++)

    {
        if (isalpha(text[i]))
        {
            letters++;
        }
        else if (text[i] == ' ')
        {
            word++;
        }
        else if (text[i] == '?' || text[i] == '!' || text[i] == '.')
        {
            sentece++;
        }
    }
    float L = letters / (float)word * 100;
    float S = sentece / (float)word * 100;

    int index = round(0.0588 * L - 0.296 * S - 15.8);
    if (index < 1)
    {
        printf("Before Grade 1");
    }
    else if (index > 16)
    {
        printf("Grade 16+");
    }
    else
    {
        printf(" Grade %i", index);
    }
    printf("\n");

}