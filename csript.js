let num = Number(
  prompt(
    "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
  )
);

let question;
let answer;
switch (num) {
  case 1:
    question = "რა არის რა არის typeof(5)?";
    answer = prompt(question);
    if (answer == "number" || answer == "NUMBER" || answer == "NumBer") {
      console.log("სწორია");
    } else {
      console.log("სამწუხაროდ ვერ გამოიცანით");
    }
    break;
  case 2:
    question = "შეიძლება თუ არა let-ის რედეკლალირება";
    answer = prompt(question);
    if (answer === "yes" || answer == "yes" || answer == "yes") {
      console.log("სწორია");
    } else {
      console.log("სამწუხაროდ ვერ გამოიცანით");
    }
    break;
  case 3:
    question = "რას აბრუნებს console.log(Math.floor(2.1)) ";
    answer = prompt(question);
    if (answer == "ori" || answer == "ORI" || answer == "Ori") {
      console.log("სწორია");
    } else {
      console.log("სამწუხაროდ ვერ გამოიცანით");
    }
    break;
}
