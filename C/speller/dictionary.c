// Implements a dictionary's functionality
#include <cs50.h>
#include <ctype.h>
#include <string.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <strings.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// TODO: Choose number of buckets in hash table
const unsigned int N = 26;
unsigned int hashed;
unsigned int word_count;

// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{   //hash table
    hashed = hash(word);
    //new node
    node *new = table[hashed];
    //while new not null,continue to compare
    while (new != NULL)
    {
        if (strcasecmp(word,new->word) == 0)
        {
            return true;
        }
    //go to next letter
        new = new->next;
    }

    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    unsigned long index = 0;
    int n = strlen(word);
    //index into bucket each letter
    for (int i = 0; i < n; i++)
    {
        index += tolower(word[i]);
    }

    return index % N;
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // open dictionary
    FILE *infile = fopen(dictionary, "r");
    if (!infile)
        {
            printf("Unable to open %s",dictionary);
            return false;
        }
    char word [LENGTH + 1];

    while (fscanf(infile, "%s", word) != EOF)
    {
        // make node
        node *root = malloc(sizeof(node));
        if (root == NULL)
        {
            return false;
        }


    // copy into node
        strcpy(root->word, word);
        hashed = hash(word);
        root->next = table[hashed];
        table[hashed] = root;
        word_count ++;
    }
    fclose(infile);

    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    //check if word is loaded
    if (word_count > 0)
    {
        return word_count;
    }
    return false;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    //for each bucket
     for (int i = 0; i < N; i++)
    {
        // pointer to table
        node *pointer = table[i];

        while (table[i] != NULL && pointer != NULL)
        {
            //provisory node
            node *tmp = pointer;
            pointer = pointer->next;
            free(tmp);
        }
        free(pointer);
    }

    return true;
}

