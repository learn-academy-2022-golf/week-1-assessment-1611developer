# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is a way in programming languages to add boolean logic to your code. A conditional statment either results to a boolean true or false. This can be very helpful for your code. 
Example: If the applicant is 18 or older and has a bachelors degree,
            then proceed with application
            otherwise,
            tell applicant they don't meet the qualifications to apply for the job.

Researched answer:




1. What is git? What is the difference between git and Github?

Your answer: Git is a version control system that lives inside one's computer. Git tracks changes to your code. A developer can save those changes locally to a computer. However, if something were to happen to their computer, they would lose the code. Github is a service hosted in the cloud that allows you to host your code into repositories online and push all the changes you make. Github is great because it not only backs up your code to the cloud but allows you to collaborate with others. Multiple developers can be working on different parts of an application and push those changes up to the original application, with some approval from a more senior developer. This technology has been pivotal for open source programming as people from various places can contribute code to any given project. This has also been helpful for remote jobs for the same reason, as well.

Researched answer: Git is a version control system that is free and opensourced. Github however is both free and costs money for more advanced features and is owned by a company. Git makes it so that many people can submit their code to a single code base, no matter where they are. Git stands for Global Information Tracker. Github is a for-profit, code hosting platform now owned by Microsoft. It lets you do the same things as Git does except all the repositories of code live on thousands of servers in Idaho instead of your personal computer or local server. 



2. Which JavaScript operators will return a Boolean value?

Your answer: The javascript operators that will return a Boolean value, that is, true or false are:

Equality Operators

    Loosly Equal:      ==       This checks the value only.
    Strictly Equal:    ===      This checks the value and the data type.

Relational Operators

    Less Than:     <
    This compares whether the value to the left of the operator is less than the right.

    Less Than Or Equal To:   =<
    This compares whether the value to the left or the operator is less than or equal the right.

    Greater Than: >
    This compares whether the value to the left of the operator is greater than the right.

    Greater Than Or Equal To: >=
    This compares whether the value to the left of the operator is greater than or equal to the right.

Logical Operators

    and:        &&
    Both conditions, to the left of and the right of the operator have to be true in order for the condition to be met.

    true && true            output: true
    true && false           output: false
    false && false          output: false

    or:         ||
    Only one of the conditions, either to the left of or to the right of the operator have to be true in order for the condition to be met.

    true || true            output: true
    true || false           output: true

    not:        !
    This operator outputs the opposite of whatever it is next to. 
    If it has a   !==    it means not equal to. 

    !true                   output: false
    !false                  output: true

    true !== true           output: false
    true !== false          output: true
    false !== true          output: true
    false !== false         output: false



Researched answer: The evaluation for an equality operator will always return a boolean true or false determined by whether the comparison is true. The evaluation of a relational operator will always return a boolean true or false determined by whether the comparison is true. The evaluation of a relational operator will return a boolean true or false if used with boolean values and will give a boolean true or false if both operands are true in the case of logical AND &&, only one operand having to be true in the case of logical OR ||, and false in the case of the logical NOT ! if a single operand can convert to true. If it can't be coverted to true, it will return false.


3. What is an index? What is the difference between index and value?

Your answer: Each element in an array has both an index and a value. Indexes are the location of the value in the array. Indexes start at the zeroith position. The value of an array are the elements it contains. You can find the position or index of an element by counting from zero to the point were the element is.

Researched answer: An index is an integer starting at 0. For each element in an array that proceeds from the first, the index increments by 1. The index of an element in array tells us the position in the array. A value is just an element within the array. This can be a number, string, or any of the other primitive data types.


4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Arrays and strings are both similar and different. They are similar in that they both have indexes and values. They are different in that a string is one of the six primitive data types and an array is collection elements or a list with any of those six primitive data types. They are so similar that you can use some of the same methods for strings as you can for arrays. One example is the method .length() which will return the number of elements in a string or in an array.

Researched answer: The main difference between an array and a string is that an array contains a collection of elements in the form of a data type. An array is a data structure and its job is to hold multiple pieces of information. A string, like an array, also holds a collection of elements. However, instead of storing different types of data, since it is itself a data type, it only holds characters.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Each person should both get comfortable being the driver and the navigator. The navigator gives the drivers instructions and is not to code or use their computer for anything other than giving commands. The driver, on the other hand is the one sharing their screen on Zoom and doing the typing. The driver should not be trying to come up with solutions on their own or coding without receiving direct instructions from the navigator. Both parties, after about 10-25 minutes should switch and reverse roles. Both parties should take breaks when needed and seek to build a harmonius paired partnership consisting of understanding, respect, and patience.

Researched answer:

Pair programming is a software development practice where two programmers code together on any given project. Both people have different roles that switch often. There is always a driver and a navigator. It is the job of the navigator to review everything the driver types in. It is the job of the drive to type or code everything the navigator tells them to do. This can serve very beneficial for the programming process as it frees mental exhaustion from one person coding all day and instead both parties frequently take turns trying to problem solve. Pair programming can lead to more productivity as working directly with another person requires your full attention. One is probably less likely to answer a text or carry on an unnessary conversation with another employee if they are taking or giving directions to another programmer. Two brains also can solve problems quicker than one as two people bring different skill sets and problem solving processes unique to themselves.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:
    A high order function is a function that can take other functions as parameters. A high order function can also return a function.

2. Jest:
    Jest is a Javascript testing framework. Testing in programming is important because you can check and see if your code meets some expectation you have for the progam. Jest is a Javascript library for creating and running tests. You can download it as a NPM package and install it for any Javascript project you may have. Jest is one of the most popular JavaScript testing frameworks and is especially popular with those who work with React.

3. Objects:

    Objects are just another data type that hold key:value pairs. It is a collection of data that can have properties and methods. Here is an example of a simple JavaScript object:

    const = car {
        color: silver,
        engine: 2.0l,
        doors: 4,
        condition: new,
        year: 2022
    }

4. Method:
    A method is object property that contains a function definition or value. It is a group of instructions that help your program execute a task. To access a method associated with an object you can use dot notation.

    For example, you can use objectName.methodKey().
    In the object example above, if you wanted to access how many doors the year of the car, you could write:

    console.log(car.year())        // output:  2022

5. Classes:

    A way in which we can create objects is by using classes. They can be thought of as a template or blueprint for creating objects as you can create an object from a class. Classes are quite similar to functions. Classes allow you to create instances of that class without altering the specific code the initial class as well as being able to export and import classes across files.