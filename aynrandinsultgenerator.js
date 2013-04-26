var adj = ["Goddamn, beaten", "lousy", "cheap", "awful", "miserable", "touchy", "abysmal", "driveling"];
var noun = ["bastard", "monstrosity", "mystic", "scum", "non-entity", "old fool", "social-metaphysical mediocrity"];

var playAgain = false;

var playAgain = confirm("Ready to be insulted by Ayn Rand?");

while (playAgain === true) {
    i = Math.floor(Math.random()*adj.length);
    j = Math.floor(Math.random()*noun.length);
alert("You " + adj[i] + " " + noun[j] + "!");
var playAgain = confirm("Want to let Ayn Rand keep insulting you?");
}