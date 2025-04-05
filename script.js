const quote1 = "You are doing great!";
const quote2 = "Have a good day!";
const quote3 = "It only takes a little effort each day!😊";
const quote4 = "You will achieve great things!🦾";

const quoteList = [quote1, quote2, quote3, quote4];
let index = 0;
const size = quoteList.length;

// Function goes through each quote once using the wrapper equation
function randomQuote() {
    index = (index + 1) % size;

    // The first html tag, [0], with the class name of "quote".
    // When we use the same class name on multiple html tags, we need to
    // speicify what html tag we want to update

    // Going to use these functions quite often in future projects:
    // document.getElementsByClassName
    // textContent
    const ptag1 = document.getElementsByClassName("quote")[0];
    ptag1.textContent = quoteList[index];
}
