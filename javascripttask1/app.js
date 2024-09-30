// 1. Alert Chapter
alert("Hello, this is a message");
alert("This will cause an error");
alert("Welcome to my website");
alert("This is an alert box");

// 2. Variables for Strings
var greetingMessage = "Hello, world!";
alert(greetingMessage);

var nasreenAge = 25;
alert(nasreenAge);

var morningSalutation = "Good morning!";
alert(morningSalutation);

morningSalutation = "Good evening!";
alert(morningSalutation);

var nasreenFavoriteColor = "blue";
alert("My favorite color is " + nasreenFavoriteColor);

var currentAge;
currentAge = 25;
alert(currentAge);

// 3. Variables for Numbers
var nasreenHeight = 170;
var increasedHeight = nasreenHeight + 10;
alert(increasedHeight);

var firstNumber = 50;
var secondNumber = 30;
var sumTotal = firstNumber + secondNumber;
alert(sumTotal);

var extraNumber = 20;
var totalSum = sumTotal + extraNumber;
alert(totalSum);

var itemPrice = 120;
var taxAmount = itemPrice * 0.10;
var finalAmount = itemPrice + taxAmount;
alert(finalAmount);

// 4. Variables for Strings and User Info
var nasreenCity = "Karachi";
alert(nasreenCity);

var fullName = "Nasreen";
var nasreenEmail = "nasreennisho5@gmail.com";
var nasreenPassword = "securePass234";
alert("Name: " + fullName + "\nEmail: " + nasreenEmail + "\nPassword: " + nasreenPassword);

var homeAddress = "123 Main Street";
alert(homeAddress);

var roseSpecies = "Pakistan";
alert(roseSpecies);

alert(roseSpecies);

// 5. Math expressions: Familiar
var totalSum1 = 25 + 30;
alert(totalSum1);

var numOne = 25;
var numTwo = 5;
var totalValue = numOne + numTwo;
alert(totalValue);

var remainderResult = 27 % 4;
alert(remainderResult);

// 6. Math expressions: Unfamiliar operators
var baseNum = 3;
var updatedNum = baseNum++;
alert("baseNum: " + baseNum);
alert("updatedNum: " + updatedNum);

var numCounter = 10;
numCounter++;
numCounter++;
alert("Final value of numCounter: " + numCounter);

var gamePoints = 20;
gamePoints--;
++gamePoints;
alert("Final value of gamePoints: " + gamePoints);

var countNumber = 0;
++countNumber;
++countNumber;
++countNumber;
alert("Final value of countNumber: " + countNumber);

// 7. Math expressions: Eliminating ambiguity
var modResult1 = 20 % 6;

var expressionCalc = (6 + 2) * (5 - 3);

var expressionTotal = 5 + 3 * 2;

var finalAnswer = 10 - 2 + 5 * 3;

// 8. Prompts
var enteredName = prompt("What is your name?");
alert("Hello, " + enteredName + "!");

var enteredAge = prompt("How old are you?");
if (enteredAge === null) {
    alert("No age provided");
} else {
    alert("You are " + enteredAge + " years old.");
}

var enteredPets = prompt("How many pets do you have?");
if (enteredPets === "") {
    alert("You didn't enter anything.");
}

var numberInput = prompt("Enter a number between 1 and 10");
var parsedNum = Number(numberInput);
var doubledResult = parsedNum * 2;
alert("The result is: " + doubledResult);

var favoriteNum = prompt("What is your favorite number?");
if (favoriteNum === "") {
    favoriteNum = 7;
}
alert("Your favorite number is: " + favoriteNum);

// 9. if statements
var capitalFrance = prompt("What is the capital of France?");
if (capitalFrance === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}

var capitalOfFrance = prompt("What is the capital of France?");
if (capitalOfFrance === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}

var capitalUK = prompt("What is the capital of the United Kingdom?");
if (capitalUK === "London" || capitalUK === "The United Kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}
var quizScore = 0;

var capitalFranceQuiz = prompt("What is the capital of France?");
if (capitalFranceQuiz === "Paris") {
    quizScore++;
    alert("Correct! Your score is: " + quizScore);
} else {
    alert("Incorrect! Your score is: " + quizScore);
}

var capitalUKQuiz = prompt("What is the capital of the United Kingdom?");
if (capitalUKQuiz === "London" || capitalUKQuiz === "The United Kingdom") {
    quizScore++;
    alert("Correct! Your score is: " + quizScore);
} else {
    alert("Incorrect! Your score is: " + quizScore);
}

var capitalGermany = prompt("What is the capital of Germany?");
var mathQuestion = prompt("What is 10 + 10?");

if (capitalGermany === "Berlin" && mathQuestion === "20") {
    alert("You got both right!");
} else if (capitalGermany === "Berlin" || mathQuestion === "20") {
    alert("You got one correct!");
} else {
    alert("You got both wrong!");
}
