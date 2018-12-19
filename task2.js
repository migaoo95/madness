/*-----Player varaibles-----*/
var customer = [];
var film = [];
var tickets = [];
var games = [];
/*------Score varaibles------*/
var score1 = [];
var score2 = [];
var score3 = [];
var score4 = [];
var score5 = [];
/*-------average Score--------*/
var aScore = [];

function insert(){
/*------Player Var Setup------*/
var customerValue = document.getElementById("customer").value;
customer[customer.length] = customerValue;

var filmValue = document.getElementById("film").value;
film[film.length] = filmValue;

var ticketsValue = document.getElementById("ticket").value;
tickets[tickets.length] = ticketsValue;

var gamesValue = document.getElementById("game").value;
games[games.length] = gamesValue;
/*------Score Var Setup-----*/

var s1Value = parseFloat(document.getElementById("s1").value);
score1[score1.length] = s1Value;

var s2Value = parseFloat(document.getElementById("s2").value);
score2[score2.length] = s2Value;

var s3Value = parseFloat(document.getElementById("s3").value);
score3[score3.length] = s3Value;

var s4Value = parseFloat(document.getElementById("s4").value);
score4[score4.length] = s4Value;

var s5Value = parseFloat(document.getElementById("s5").value);
score5[score5.length] = s5Value;




}

function show(){
/*-----Player Display-----*/
var content ="<h2>List of Players :</h2>";

for (var i = 0;i<customer.length;i++){
content+=i+1+"."+"<br>"+"Players" + ": " + customer[i] + "<br>"+"Age :   "+" "+film[i]+"<br>"+"Gender : "+ tickets[i]+"<br>" + "Game : " + games[i];
content+="<br>"+"<br>";
}
/*----------------------------------*/
content+="<h3>Film Titles</h3>";
for(var i=0; i<film.length ;i++){
content+= i+1 +": " + film[i] + "<br>";
}
content+="<h3>Tickets</h3>";
for(var i=0; i<tickets.length ;i++){
content+= i+1 +": " + tickets[i] + "<br>";
}
content+="<h3>Film Titles</h3>";
for(var i=0; i<games.length ;i++){
content+= i+1 +": " + games[i] + "<br>";
}
/*-----------Score Display------------*/


var scores ="<h2>Scores :</h2>";

for (var i = 0;i<score1.length;i++){
scores +="Score 1 = " + score1[i] + "<br>"+"Score 2 =   "+" "+score2[i]+"<br>"+"Score 3 = "+ score3[i]+"<br>" + "Score 4 = " + score4[i]+"<br>"+"Score 5 = "+score5[i];
scores +="<br>"+"<br>";
}




/*-----Player doc write------*/
document.getElementById("display").innerHTML = content;
document.getElementById("display2").innerHTML = scores;


}
/*------F () Start both--------*/
function showAndSave(){
insert();
show();
}

function writeArray(){
var customerArray = customer.toString();
var filmArray = film.toString();
var ticketsArray = tickets.toString();
var gamesArray = games.toString();


document.write(customerArray + "<br>");
document.write(filmArray+"<br>");
document.write(ticketsArray+"<br>");
document.write(gamesArray+"<br>");
}
