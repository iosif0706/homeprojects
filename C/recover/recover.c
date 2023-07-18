#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <cs50.h>
#include <string.h>

typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: Invalide recover");
        return 1;
    }

    // Open input file
    FILE *inptr = fopen(argv[1], "r");
    if (inptr == NULL)
    {
        printf("Could not open %s. \n", argv[1]);
        return 4;
    }

    // declare an array of 512 byte
    BYTE buffer[512];

    // counts number of image
    int img_count = 0;
    //open filename img to write to
    char filename[8];
    FILE *img = NULL;
    //create a loop to read
    while (fread(buffer, 1, 512, inptr) == 512)
    {
        //declare start of jpeg
        if ((buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff)
            && ((buffer[3] & 0xf0) == 0xe0))
        {
            //if therse is already a jpeg open
            if (img_count > 0)
            {
                fclose(img);
                sprintf(filename, "%03d.jpg", img_count);
                img = fopen(filename, "w");
                img_count++;
            }
            //first jpeg img count
            else if (img_count == 0)
            {
                sprintf(filename, "%03d.jpg", img_count);
                img = fopen(filename, "w");
                img_count++;
            }
            //stop when its fount another jpeg
            else if ((buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff)
                     && ((buffer[3] & 0xf0) == 0xe0))
            {
                fclose(img);
            }
        }

        // if this is not a new ipeg header,just write to img
        if (img_count > 0)
        {
            fwrite(buffer, 512, 1, img);
        }
        else
        {
            continue;
        }

    }
    fclose(img);
    fclose(inptr);
    return 0;
}

