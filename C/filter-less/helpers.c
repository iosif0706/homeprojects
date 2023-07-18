#include "helpers.h"
#include "math.h"
#include "string.h"
#include "stdlib.h"

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])

{
    // run through each row
    for (int i = 0; i < height; i++)
    {
        // run through each column
        for (int j = 0; j < width; j++)
        {
            float Gray = 0;
            // Convert pixel to float
            float Green = image[i][j].rgbtGreen;

            float Red = image[i][j].rgbtRed;

            float Blue = image[i][j].rgbtBlue;

            Gray = (Red + Green + Blue) / 3.0;
            // Calculate the avarage value
            image[i][j].rgbtRed = image[i][j].rgbtGreen = image[i][j].rgbtBlue = round(Gray);

        }
    }

    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{

    // Run through row
    for (int i = 0; i < height; i++)
    {
        // Run through column
        for (int j = 0; j < width; j++)

            // aply formulas
        {

            int sRed =  round(.393 * image[i][j].rgbtRed + .769 * image[i][j].rgbtGreen + .189 * image[i][j].rgbtBlue);

            int  sGreen = round(.349 * image[i][j].rgbtRed + .686 * image[i][j].rgbtGreen + .168 * image[i][j].rgbtBlue);

            int sBlue = round(.272 * image[i][j].rgbtRed + .534 * image[i][j].rgbtGreen + .131 * image[i][j].rgbtBlue);

            image[i][j].rgbtRed = sRed > 255 ? 255 : sRed;

            image[i][j].rgbtBlue = sBlue > 255 ? 255 : sBlue;

            image[i][j].rgbtGreen = sGreen > 255 ? 255 : sGreen;

        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE temporary[height][width];
    // Run through each row
    for (int i = 0; i < height ; i++)
    {
        //Run through each column
        for (int j = 0; j < width / 2 ; j++)
        {
            // switch pixel
            temporary[i][j] = image[i][j];
            image[i][j] = image[i][width - j - 1];
            image[i][width - j - 1] = temporary[i][j];
        }

    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE copy[height][width];
    //Run through each row
    for (int i = 0; i < height; i++)
    {
        //Run through each column
        for (int j = 0; j < width; j++)
        {
            //copy pixel
            copy[i][j] = image[i][j];
        }
    }
    //run through each row
    for (int i = 0; i < height; i++)
    {
        //Run through each column
        for (int j = 0; j < width; j++)
        {
            // introduction of avarage
            int avgRed, avgBlue, avgGreen;

            avgRed = 0;

            avgBlue = 0;

            avgGreen = 0;

            float counter = 0.00;
            // run through left and right side of pixels
            for (int x = -1; x < 2; x++)
            {
                //Run through up and down side of pixels
                for (int y = -1; y < 2; y++)
                {
                    int copyx = i + x;

                    int copyy = j + y;

                    if (copyx < 0 || copyx > (height - 1) || copyy < 0 || copyy > (width - 1))
                    {
                        continue;
                    }
                    // calculate avarage of pixels
                    avgRed += image[copyx][copyy].rgbtRed;

                    avgBlue += image[copyx][copyy].rgbtBlue;

                    avgGreen += image[copyx][copyy].rgbtGreen;

                    counter++;
                }

                copy[i][j].rgbtRed = round(avgRed / counter);

                copy[i][j].rgbtGreen = round(avgGreen / counter);

                copy[i][j].rgbtBlue = round(avgBlue / counter);
            }
        }
    }
    // Replace pixels
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j].rgbtRed = copy[i][j].rgbtRed;

            image[i][j].rgbtBlue = copy[i][j].rgbtBlue;

            image[i][j].rgbtGreen = copy[i][j].rgbtGreen;
        }



    }


    return;
}
