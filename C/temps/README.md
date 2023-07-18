# Average High Temperatures

## Learning Goals
  * Practice working with `struct`s
  * Practice applying sorting algorithms

{:.small} 
![Sun](Sun.jpeg)
  
## Background

We seem to be breaking records every year for the hottest weather ever recorded. Climate scientists keep track of what are called "new normals" over multiple years so that we can better predict and prepare for conditions in the near future. The official normals are calculated for a uniform 30 year period, and consist of annual/seasonal, monthly, daily, and hourly averages and statistics of temperature, precipitation, and other climatological variables from almost 15,000 U.S. weather stations. 

July is the hottest month of the year for most large US cities. Daytime temperatures above 80 degrees Fahrenheit regularly occur nearly everywhere. The exceptions are some cities along the [Pacific coast](https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals).

In this problem, you will sort the average high temperature values for 10 cities, in decending order.

+ Hints
  * When copying one `struct` to another, no need to assign individual elements. The entire `struct` can be assigned in one statement.
  * Even though a `void` function cannot return any values, a `return` statement can be used to terminate the function.

## Demo

<script async data-autoplay="1" data-cols="100" data-loop="1" data-rows="12" id="asciicast-g0UzJMsFC2x5o2KwRHYxJqTs5" src="https://asciinema.org/a/g0UzJMsFC2x5o2KwRHYxJqTs5.js"></script>

## Implementation Details

The `main` function initializes the `temps` array, calls the `sort_cities` function and prints out the array in sorted order. You will use an O(n<sup>2</sup>) sorting algorithm of your choice (possibly bubble sort, selection sort, or insertion sort) to sort the array by temperature, in descending order.

## Thought Question

* Which of the sorting algorithms did you choose and why?

## How to Test Your Code

Your program should behave per the examples below.

```
temps/ $ ./temps

Average July Temperatures by City

Phoenix: 107
Las Vegas: 105
Austin: 97
Miami: 97
Denver: 90
Chicago: 85
New York: 85
Boston: 82
Los Angeles: 82
San Francisco: 66
temps/ $ 
```

No `check50` for this one!

To evaluate that the style of your code, type in the following at the `$` prompt. 

```
style50 temps.c
```

## How to Submit

No need to submit! This is an optional practice problem.