
//Question 1//
var areYouAHuman = confirm ("Are you a human?");

if (areYouAHuman) {
    alert ("Congrats!");
}

else {
    alert ("You're not telling the truth, caught ya!");
}

//Question 2//
var kindOfHuman = ["homo sapien", "sapien"];

var userHumanGuess = prompt ("What kind of human!");

if (kindOfHuman.indexOf(userHumanGuess) == -1 ) {
    alert ("Hmmmm");
}

else {
    alert ("Enoy the site Sapien!")
}

