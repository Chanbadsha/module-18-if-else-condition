/***
 * task 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var burgerPrice = 600;

if (burgerPrice > 500) {
    console.log("Coke is free for you")
} 
else {
    console.log("Coke Price is 30 tk")
}

/*** 
    Task 2
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
var weight = 56;
var height = 1.5;
var bmi = weight / ((height)**2);


if (bmi < 18.5) {
    console.log( "You are underweight")
} else {
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Your are normal")
    } else {
       if (bmi >=25 && bmi <= 29.9) {
        console.log("You are Overweight")
       } else {
        console.log("You are Obese")
       }
    }
}

/***
Task 3
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var studentBangla = 65;
var studentMath = 25;
var studentEnglish = 75;
var studentScience = 55;


if (studentBangla >= 90 && studentBangla <= 100) {
    console.log("You are got Golden A+ in Bangla")
} else {
    if (studentBangla >=80 && studentBangla < 9) {
        console.log("You are got A+ in Bangla")
    } else {
        if (studentBangla >=70 && studentBangla < 80) {
            console.log("You are got A in Bangla")
        } else {
            if (studentBangla >=50 && studentBangla <= 70) {
                console.log("You are got B in Bangla")

            } else {
                console.log("You are failed in Bangla")

            }
        }
    }
}
if (studentEnglish >= 90 && studentEnglish <= 100) {
    console.log("You are got Golden A+ in English")
} else {
    if (studentEnglish >=80 && studentEnglish < 9) {
        console.log("You are got A+ in English")
    } else {
        if (studentEnglish >=70 && studentEnglish < 80) {
            console.log("You are got A in English")
        } else {
            if (studentEnglish >=50 && studentEnglish <= 70) {
                console.log("You are got B in English")

            } else {
                console.log("You are failed in English")

            }
        }
    }
}


/***
Task 4
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var yourScore = 95;
var friendScore = 88;

if (yourScore > 80) {
    if (friendScore > 80) {
        console.log("GO for lunch")
    } else {
        if (friendScore < 80 && friendScore >= 60) {
            console.log("Good Luck Next Time")
        } else {
            if (friendScore < 60 && friendScore >= 40) {
                console.log("Message Unseen")
            } else {
                console.log("Friends are blocked")
            }
        }
    }
} else {
    console.log("You are not eligible to go friendzone")
}

/***
Task 5
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// using normal if else type
var num1 = 32;
var num2 = 26;
if (num1 > num2) {
    console.log("Double of num1 = " + num1 * 2)
} else {
    console.log("Sum of two number = " + (num1 + num2))
}

// using ternary conditions

num1 > num2 ? console.log("Double of num1 using ternary = " + num1 * 2) : console.log("Sum of two number using ternary = " + (num1 + num2))

/***
Task 6
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 50;
var isStudent = false;


if (age < 10 ) {
    console.log ("All children are free to ride")
} else if (isStudent)  {
        console.log("Student got 50% discount ")
    } else if (age >= 60) {
        console.log("Senior citizen are 15% discount")
       
        } else {
            console.log("Normal People ticket price is 800tk")
        }


        // Chat gpt code using function and if else 
        function calculateTicketFare(age, isStudent = false) {
            const regularFare = 800;
        
            if (age < 10) {
                return 0; // Children get free tickets
            } else if (isStudent) {
                return regularFare * 0.5; // Students get a 50% discount
            } else if (age >= 60) {
                return regularFare * 0.85; // Senior citizens get a 15% discount
            } else {
                return regularFare; // Regular fare for others
            }
        }
        
        // Examples:
        console.log(calculateTicketFare(8));           // Output: 0 (Child)
        console.log(calculateTicketFare(20, true));    // Output: 400 (Student)
        console.log(calculateTicketFare(65));          // Output: 680 (Senior citizen)
        console.log(calculateTicketFare(45));          // Output: 800 (Regular fare)
        