import csv
import sys
import os
from cs50 import get_string


def main():

    # TODO: Check for command-line usage
    if len(sys.argv) != 3:
        sys.exit("python dna.py data.csv sequence.txt")


    # TODO: Read database file into a variable
    persons = {}
    sequences = []
    databases = open(sys.argv[1], 'r')
    for ind,row in enumerate(databases):
        if ind == 0:
            sequences = [sequence for sequence in row.strip().split(',')[1:]]
        else:
            index = row.strip().split(',')
            persons[index[0]] = [int(x) for x in index[1:]]




    # TODO: Read DNA sequence file into a variable
    seq = sys.argv[2]
    with open (os.path.join(seq)) as f:
        sub = f.read()


    # TODO: Find longest match of each STR in DNA sequence
    subsequence = []
    for sequence in sequences:
        i = 0
        max_strand = -1
        cur_max = 0
        while i < len(sub):
            cur_window = sub[i:i+len(sequence)]
            if cur_window == sequence:
                cur_max += 1
                max_strand = max(max_strand, cur_max)
                i += len(sequence)
            else:
                cur_max = 0
                i += 1
        subsequence.append(max_strand)

    # TODO: Check database for matching profile
    for name,data in persons.items():
        if data == subsequence:
            print(name)
            exit(0)
    else:
            print('no match')





def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
