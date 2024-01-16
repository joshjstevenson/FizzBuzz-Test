/* Using JavaScript, write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

const fizzbuzz = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
    }
    }

// Calling fizzBuzz function.
fizzbuzz();

/* OUTPUT:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
*/

/* OBSERVATIONS
Observed reasons that make this a good test:

1. It can be achieved by multiple solutions. I chose to create a function, named fizzbuzz, 
using arrow function expression, a for loop and if else statement.

2. It tests your understanding of loops, nesting, conditional statements, operators, 
functions and logic; if written incorrectly, Fizz may override FizzBuzz if the condition for 
Fizz is met first, resulting in no FizzBuzz outputs. FizzBuzz could also be defined with, 
(i % 15 === 0), to remove some code.

3. It also tests your general understanding of computer language and attention to detail. 
The questions asks for you to print from 1-100, meaning you have to specify in your loop 1-101;
as 0-100 will include 0 and skip 100.
*/