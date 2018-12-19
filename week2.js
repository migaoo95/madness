                  /*-----Player varaibles-----*/
var nameV = [];
var ageV = [];
var genderV = [];
var games = [];
                 /*------Score varaibles------*/
var score1 = [];
var score2 = [];
var score3 = [];
var score4 = [];
var score5 = [];


function insert(){
                /*------Player Var Setup------*/
var nameValue = document.getElementById("name").value;
nameV[nameV.length] = nameValue;

var ageValue = document.getElementById("age").value;
ageV[ageV.length] = ageValue;

var genderValue = document.getElementById("gender").value;
genderV[genderV.length] = genderValue;

var gamesValue = document.getElementById("game").value;
games[games.length] = gamesValue;


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

var content ="<h2>List of Players :</h2>";
for (var i = 0;i<nameV.length;i++){
content+=i+1+"."+"<br>"+"Players" + ": " + nameV[i] + "<br>"+"Age :   "+" "+ageV[i]+"<br>"+"Gender : "+ genderV[i]+"<br>" + "Game : " + games[i];
content+="<br>"+"<br>";
}

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













/*



var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
  var one = parseFloat(numOne.value)||0; //Everything that come from input is always a string type
  var two = parseFloat(numTwo.value)||0; //Thats why always we have to add parseFloat to change our input value to a number
  var sum = one + two;           //you can you this way to get sum or
  addSum.innerHTML = "Your sum is : "+(one+two);// use this way to get it (one+two)
}



 empHourlyRate =7.5;



var empNo='123456789';




var empName='Mickey Mouse';
var department='Sales';
var empHourlyRate=7.5;
var empHours=20;
var empOvertimeRate=10;
var empOvertimeHours=10;
document.write('Wage Slip created by &lt;insert your student number here&gt;<br />');

document.write('============================<br />');
var grossPay = (empHourlyRate * empHours) + (empOvertimeRate * empOvertimeHours)
var taxable = (grossPay - 190)
var taxDeduction = ((taxable / 100)* 20)
var niDeduction= ((grossPay/ 100)* 14)
var totalDeduction = (taxDeduction + niDeduction)
var totalPay= (grossPay - totalDeduction)
document.write ('Employee: ' + empName);
document.write('<br />');
document.write ('Employee No: ' + empNo);
document.write('<br />');
document.write ('Department: ' + department);
document.write('<br />');
document.write('<br />');
document.write ('Gross Pay = £' + grossPay)
document.write('<br />');
document.write('Total Deductions = £' + totalDeduction);
document.write('<br />');
document.write('<br />');
document.write('Total Pay = £' + totalPay);


/*
var nameValue;
var name1 = []; //to store infor in
var content;

 function read(){
   nameValue = document.getElementById("name").value;
   name1[name1.length] = nameValue;

 }
function write(){
content="";
for(i=0;i<name1.length;i++){
  content += i+1+". "+name1[i]+"<br>";
  document.getElementById("nameres").innerHTML = content;
}



}
function start(){
  read();
  write();
}























/*
var nameValue;   //First we get name value from the text box ("name").
var name1 = [];  //Than we create a varaible name1 thats equal to empty array so we created the array


function read(){
nameValue = document.getElementById("name").value;  //we get the value from our text box
name1[name1.length] = nameValue;   // we state our var and we say lengt to add more on top and is equal to name
}

function write(){
  var content ="<h2>List of names </h2>" + "<h3>Customers</h3>";

                                                            // ^^ TWO WAYS OF ADDING THAT CUSTOMER HEADING (content+= "<h3>Customers</h3>";)
  for (var i = 0;i<name1.length;i++){
  content+= i+1 + ": " + name1[i] + "<br>";
document.getElementById("nameres").innerHTML = content;
  }

}
function start(){
read();
write();

}




















/*
var customer = [];
var film = [];
var tickets = [];




function insert(){
var customerValue = document.getElementById("customer").value;   // gets what ever value we input in our text box
customer[customer.length] = customerValue;       //we put .length to add a new position in our array




var filmValue = document.getElementById("film").value;
film[film.length] = filmValue;


var ticketsValue = document.getElementById("film").value;
tickets[tickets.length] = ticketsValue;



}

function show(){

var content ="<h2>Your have the following bookings </h2>";

content+= "<h3>Customers</h3>";
for (var i = 0;i<customer.length;i++){
content+= i+1 + ": " + customer[i] + "<br>";

}
content+="<h3>Film Titles</h3>";
for(var i=0; i<film.length ;i++){
  content+= i+1 +": " + film[i] + "<br>";
}
content+="<h3>Tickets</h3>";
for(var i=0; i<tickets.length ;i++){
  content+= i+1 +": " + tickets[i] + "<br>";
}
document.getElementById("display").innerHTML = content;

}

function showAndSave(){
  insert();
  show();
}

function writeArray(){
  var customerArray = customer.toString();
  var filmArray = film.toString();
  var ticketsArray = tickets.toString();


document.write(customerArray + "<br>");
document.write(filmArray+"<br>");
document.write(ticketsArray+"<br>");
}



/*
var simonL = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruceL = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");
var benL = document.getElementById("ben");
var benPic = document.getElementById("ben-pic");







bruceL.addEventListener("click", share);
simonL.addEventListener("click", share);
benL.addEventListener("click", share);


function shareloop(){
  var allImages =
}


function share(){
  document.
var picId = this.attributes["data-img"].value;
var pic = document.getElementById(picId)
if(pic.className==="hide"){
  pic.className="";
}else{
  pic.className="hide";
}
}





/*
function show(){
if (simonPic.className==="hide"){
  simonPic.className="";
}else {
  simonPic.className="hide";
}
}

function show2(){
  if(brucePic.className==="hide"){
    brucePic.className="";
  }else{
    brucePic.className="hide";
  }
}

function show3(){
  if(benPic.className==="hide"){
    benPic.className="";
  }else{
    benPic.className="hide";
  }
}


















/*




var customer = [];
var film = [];
var tickets = [];




function insert(){
var customerValue = document.getElementById("customer").value;   // gets what ever value we input in our text box
customer[customer.length] = customerValue;       //we put .length to add a new position in our array




var filmValue = document.getElementById("film").value;
film[film.length] = filmValue;


var ticketsValue = document.getElementById("film").value;
tickets[tickets.length] = ticketsValue;



}

function show(){

var content ="<h2>Your have the following bookings </h2>";

content+= "<h3>Customers</h3>";
for (var i = 0;i<customer.length;i++){
content+= i+1 + ": " + customer[i] + "<br>";

}
content+="<h3>Film Titles</h3>";
for(var i=0; i<film.length ;i++){
  content+= i+1 +": " + film[i] + "<br>";
}
content+="<h3>Tickets</h3>";
for(var i=0; i<tickets.length ;i++){
  content+= i+1 +": " + tickets[i] + "<br>";
}
document.getElementById("display").innerHTML = content;

}

function showAndSave(){
  insert();
  show();
}

function writeArray(){
  var customerArray = customer.toString();
  var filmArray = film.toString();
  var ticketsArray = tickets.toString();


document.write(customerArray + "<br>");
document.write(filmArray+"<br>");
document.write(ticketsArray+"<br>");
}




/*------------------------DROP LIST BUTTON TEXT BOXES GOOD EXAPLME [1]!!!!----------------
var cat1;
var chosen;


function read(){
cat1 = document.getElementById("catTypes").value;

}

function write(){
alert("You have choosen "+cat1);
chosen = document.getElementById("catTypes").selectedIndex;
if(chosen==1){
  document.getElementById("T1").value = "Tiger";
  document.getElementById("T2").value = "Tigers are hungry";
  document.getElementById("T3").value = "They from China";
}if(chosen==2){
  document.getElementById("T1").value = "Lion";
  document.getElementById("T2").value = "Lions are nice";
  document.getElementById("T3").value = "They from lion land";
}if(chosen==3){
  document.getElementById("T1").value = "Puma";
  document.getElementById("T2").value = "Pumas are mad nice";
  document.getElementById("T3").value = "Pumalnd";
}if(chosen==4){
  document.getElementById("T1").value = "Lynx";
  document.getElementById("T2").value = "Lynx";
  document.getElementById("T3").value = "They from lynx land";
}if(chosen==5){
  document.getElementById("T1").value = "Snow Leopard";
  document.getElementById("T2").value = "Snow Leopard";
  document.getElementById("T3").value = "They from snow land";
}

}
function start(){
read();
write();
}
























/*-------------------PRACTISE----------------------------------
var name1;
var email1;
var number1;
var card1;
var tnc1;

function read(){
name1 = document.getElementById("name").value;
email1 = document.getElementById("email").value;
number1 = document.getElementById("number").value;
bank1 = document.getElementById("bank").value;


card1;
if(document.myForm.card[0].checked){   //acces document than form than >>name<< [what position] and if it has been checked
  card1 = "Debit Card";
}if(document.myForm.card[1].checked){
  card1 = "Credit Card";
}if(document.myForm.card[2].checked){
  card1 = "Pay Pall";
}
tnc1;
if(document.getElementById("tnc").checked){
  tnc1 = "Thanks for confirming terms and conditions";
}else{
  tnc1 = "You havent confirmed terms and conditions";
}

}


function write(){
document.getElementById("nameres").innerHTML = "Your name is : " + name1;
document.getElementById("emailres").innerHTML = "Your email adress is : "+ email1;
document.getElementById("numberres").innerHTML = "Your phone number is : "+ number1;
document.getElementById("bankres").innerHTML = "Your bank is : "+bank1;
document.getElementById("cardres").innerHTML = "You choose "+card1;
document.getElementById("tncres").innerHTML = tnc1;

}

function start(){
read();
write();

}


























/*---------------------------On html input alert using on click ----------------
<!DOCTYPE html>
<html>
<head>
<title>User Input with text input</title>
</head>
<body>
<H2>Getting some user input from a textbox</H2>
<!--Exploring basics of user input-->
    <form id="inputtext">
    <p>Enter your name<input type="text" id="text1"></p>
    <p><input type="button" id="btn" onclick="window.alert('hello '+document.forms.inputtext.text1.value)"></p>
<!--create input type text with id text one than we create another input type button (creates a button) with id="btn" than we activate onclick
that acces window and display an alert 'hello' to alert hello we adding + sing than we accesing our document html than we accesing our form after we acces specific form by giving its id name after that we acces input id where we typed our name and we get value from it


<script src="week2.js"></script>
</body>
</html>


/*------------------------FORM-------------------------------------------
var sub;
var mail;
var bank1;          //Stating our varaibless
var pay;
var tmc;

function read(){      // function that reads whatever we put in our form
sub = document.getElementById("name").value;

mail = document.getElementById("email").value;    //calling our varaibles in function >>read<< and getting elements from html and their value

bank1 = document.getElementById("bank").value;

pay;                  //creating the statement for our pay varaible
if(document.myForm.payment[0].checked){     //if we acces our html than we acces my form than we acces name payment and we sa if 0 from our group is checked than pay is equal to string of credit card
  pay = "Credit Card";
}if (document.myForm.payment[1].checked){     //acces our document than acces our form than acces our payment name/id than we acces 1 position in our form and check if it has been checked
  pay = "Debit Card";
}if (document.myForm.payment[2].checked){    //here if we acces our document than we acces myForm than we acces our payment and if our second pisition has been checked than we run code at the bottom
  pay = "Pay Pall";
}
tmc;
if (document.myForm.tnc.checked){    //tmc = terms and condition / access my html document than acces my form than acces my tnc input name all we do this time is we check if our check box has been ticked
  tnc = "Thanks for Reading terms and conditions";   //if our check box has been ticked than we change tnc string in to the string after the equal sing
}else{
  tnc = "You still havent read terms and conditions";  //otherewhise we you the >>else<< statement that excecute the code that changes string of our varaible to string on the pice of code
}
}

function write(){     // this function writes on our webpage screen html document using .innerHTML
document.getElementById("nameres").innerHTML = "Your entered the following name : " + sub;  //acces document gets the element using innerHTML to write on our screen than we put equal sing to have it equal to any string + our sub varaible thats equal to what ever we inputed befor
document.getElementById("emailres").innerHTML = "Your entered the following email : " + mail;
document.getElementById("bankres").innerHTML = "Your entered the following email : " + bank1;
document.getElementById("payres").innerHTML = "You have choosen the following payment :"+pay;
document.getElementById("tncres").innerHTML = tnc;
}
function myF(){
  read();         //this small function fire both >>read<< & >>write<< functions for us
  write();
}

/*---------------PRACTISE--------------------
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", pick);
bruce.addEventListener("click", pick);
ben.addEventListener("click", pick);

function pick(){
  var allImages = document.querySelectorAll("img");
  for(var i=0;i<allImages.length;i++){
    allImages[i].className = "hide";
  }
  var pic = this.attributes["data-img"].value;
  var picId = document.getElementById(pic);
  if(picId.className === "hide"){
  picId.className = "";
}else{
  picId.className = "hide";
}
}

/*-------------------GO back --------
var sub;
var mail;
var bank1;
var pay;
var tmc;

function read(){
  sub = document.getElementById("name").value;
  mail = document.getElementById("email").value;
  bank1 = document.getElementById("bank").value;

pay
  if(document.myForm.payment[0].checked){
    pay = "Credit Card";
  }if (document.myForm.payment[1].checked){
    pay = "Debit Card";
  }if (document.myForm.payment[2].checked){
    pay = "Pay Pall";
  }
   tmc;
  if (document.myForm.tnc.checked){
    tnc = "Thanks for Reading terms and conditions";
  }else{
    tnc = "You still havent read terms and conditions";
  }
}

function wirte(){
  document.getElementById("nameres").innerHTML = "Your entered the following name : " + sub;
  document.getElementById("emailres").innerHTML = "Your entered the following email : " + mail;
  document.getElementById("bankres").innerHTML = "Your entered the following email : " + bank1;
  document.getElementById("payres").innerHTML = "You have choosen the following payment :"+pay;
  document.getElementById("tncres").innerHTML = tnc;
}

function yo(){
  read();
  write();
}

/*-------------------GO BACK TO THIS---------------------
function myF(){
var sub = document.getElementById("name").value;
console.log(sub);
var mail = document.getElementById("email").value;
console.log(mail);
var bank1 = document.getElementById("bank").value;
console.log(bank1);

var pay;
if(document.myForm.payment[0].checked){
  pay = "Credit Card";
}if (document.myForm.payment[1].checked){
  pay = "Debit Card";
}if (document.myForm.payment[2].checked){
  pay = "Pay Pall";
}
var tmc;
if (document.myForm.tnc.checked){
  tnc = "Thanks for Reading terms and conditions";
}else{
  tnc = "You still havent read terms and conditions";
}




//Writing on html Pictures
document.getElementById("nameres").innerHTML = "Your entered the following name : " + sub;
document.getElementById("emailres").innerHTML = "Your entered the following email : " + mail;
document.getElementById("bankres").innerHTML = "Your entered the following email : " + bank1;
document.getElementById("payres").innerHTML = "You have choosen the following payment :"+pay;
document.getElementById("tncres").innerHTML = tnc;
}

/*---------------PRACTISE--------------------
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", pick);
bruce.addEventListener("click", pick);
ben.addEventListener("click", pick);

function pick(){
  var allImages = document.querySelectorAll("img");
  for(var i=0;i<allImages.length;i++){
    allImages[i].className = "hide";
  }
  var pic = this.attributes["data-img"].value;
  var picId = document.getElementById(pic);
  if(picId.className === "hide"){
  picId.className = "";
}else{
  picId.className = "hide";
}
}

/*-----------------DOCUMENT, GETELEMENT, EVENTLISTENER, >>THIS<< ELEMENT, VALUE-------PRACTISE!!!!!!
var simon = document.getElementById("simon");  // create varaible , acces html document and gets element "simon" by its id
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);  //adding event click and adding function picLink to our eventListener
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink(){       //creating function pic link
  var picId = this.attributes["data-img"].value;   //our function run created varaible picId thats equal to >>THIS<< this is from our eventListener what ever we click this saves it in this case we want data-img value
  var pic = document.getElementById(picId);
  if(pic.className === "hide"){
    pic.className = "";
  }else{
    pic.className = "hide";
  }
}

/*------------------THIS ELEMENT ----------------------
var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruce = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");
var ben = document.getElementById("ben");
var benPic = document.getElementById("ben-pic");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink(){
  console.log(this);      //>>THIS<< is the element display in consolelog that got clicked on
}



/*-----------------DRY CODE -----------------------------------
var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruce = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");
var ben = document.getElementById("ben");
var benPic = document.getElementById("ben-pic");

ben.addEventListener("click", function(){
  if(benPic.className === "hide"){
    benPic.className = "";
  }else{
    benPic.className ="hide";
  }
})




bruce.addEventListener("click", function(){
  if(brucePic.className === "hide"){
    brucePic.className = "";
  }else{
    brucePic.className = "hide";
  }
})

simon.addEventListener("click", function(){
  if(simonPic.className === "hide"){
    simonPic.className = "";
  }else {
    simonPic.className = "hide";
  }
})



//COMMAND + D!!!!!!!!!

/*--------------------DOCMENT EVENTLISTENER IF ELSE CLASSNAME--------------------
var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");

simon.addEventListener("click", function(){  //Add event listener for var simon that say if you click on element simon it going to run a function
  if(simonPic.className === "hide"){        //in our function we say that if className of simonPic is hide it is !! than run that code
    simonPic.className = "";               //in the code we run we say that simonPic >>className<< is equal to ""empty string witch means that it removes class hide from before
  }else {
  simonPic.className = "hide";            //SO after our program gonna run ^^THIS^^ function it will remove the class="hide" but in our else statement we simply bring it back on by saying ...
}
})

/*-------------DOCUMENT, EVENTLISTENER, PARSEFLOAT,VALUE, INNERHTML----------------25
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
  var one = parseFloat(numOne.value)||0; //Everything that come from input is always a string type
  var two = parseFloat(numTwo.value)||0; //Thats why always we have to add parseFloat to change our input value to a number
  var sum = one + two;           //you can you this way to get sum or
  addSum.innerHTML = "Your sum is : "+(one+two);// use this way to get it (one+two)
}

/*------------------DOCUMENT, INPUT EVENT, PARSEFLOAT, VALUE-----------------!!!24
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);    //Adds event "input" so what ever we input that will equal to our numOne var
numTwo.addEventListener("input", add);    //After uses our function add

function add(){
var one = parseFloat(numOne.value||0); //creates a varaible thats equal to value of what  ever we input in numOne >>||<< or sets a value to 0
var two = parseFloat(numTwo.value||0); //>>parseFloat<< change what ever string we input in to a >>NUMBER<<
addSum.innerHTML = one+two;  //InnerHTML changes whats writen in our html document
}
/*----------------------DOCUMENT OBJECT and PROPERTIES----------------------------------------------23
var numOne = document.getElementById("num-one"); //>>DOCUMENT.<< when HTML DOCUMENT is loaded to a web page it becomes >>.document<< Object
var numTwo = document.getElementById("num-two");  //>>document.<< is the html file when is loaded on ta a web page
var addSum = document.getElementById("add-sum");  // >>getElementById<< is a document property

numOne.addEventListener("click", go);      //in addEventListener ARGUMENTS are >>Event<< "click" than we execute our function go
numTwo.addEventListener("mouseenter", go);  //Differen event followed by excecuting our function go
function go(){
  alert("hello");       //here is our function go
}
Popular Javascript Events Are:
- click
- mouseenter
- mouseleave
- mousedown
- mouseup
- mousemove
- keydown
- keyup
- blur
- focus

!!!https://developer.mozilla.org/en-US/docs/Web/Events  //LIST OF ALL JAVASCRIPT EVENTS !!!!

/*------------!!!! MY LIST LOOP >>for<< DISPLAYING EACH ITEM FROM THE LIST USING LOOP !!!!-------------22
var myList = ['Apples', 'Oranges', 'Pinneaples', 'Watermelon'];  // var >>myList<< with 4 items in the array INDEX = 3 because we count from 0;
for(var i=0;i<myList.length;i++){       //loop >>for<< that has 3 ARGUMENTS var i thats equal to 1, i thats is less than the lenght of items in the list ARRAY,and i++ thats ads one value
  console.log(myList[i]);             //console log or alert that display each item from my list by puting it in []
}

/*--------------CONTINUATION OF PREVIOUS CODE----------------------------------21
var myList = ['oranges', 'apples', 'watermelons', 'pinneaples'];  // 4 >>ITEMS<< and 0, 1, 2, 3 >>INDEX<< in my list
for(var loop=0;loop<myList.length;loop++){
  console.log('It loops ',loop + ' Times');
}
/*-------------------!!LOOP >>for<< MYLIST CONSOLE log !!-----------------------------20
var myList = ['Apples', 'Oranges', 'Bananas'];   // Even that we count index from zero length of my list is 3

for(var i=0;i < myList.length;i++){             //create loop >>for<< that had 3 ARGUMENTS  in one of them we yous method >>.lenght<<after my list to cound the lenght of the list and put the value 3 in to comparasion
  console.log('I runs ',i);                     //display console log in browser
}
/*---------------------------NICE AND EASE FOR LOP--------
for(var times = 0;times<10;times++){   // 3 ARGUMENTS >>SETUP<< >>COMPARASIN<< >>CHANGE<<
  alert(times);
}
/*--------------------LOOPS >> for << ARGUMENTS VARAIABLES--------------------------19
for(var i=0;i<100;i=i+1){      //in this example i used i = i+1; instead of i++;  >>;<< REMEMBER CLOSE IT DONT USE >>,<<
console.log('It runs ', i);
}
/*----------------------LOOPS >> for << ARGUMENTS VARAIABLES---------------------------18
for(var i = 0;i < 10; i++){    //loop for with ARGUMENTS (var i thats qeual to 0 !!!>>;<<!!! close it than comparison that is is less than 10 than )
console.log('It tried', i); // display it all in the consol log
}
/*CONTINUATION
for(var setup - i=0, comparasin - i < 10, change - i++){          //Has 3 ARGUMENTS var setup i is equal to 0  || comparasion i is less than 10 >>true<< || we add one every time
}
/*----------------------!! LOOPS >>do<< >>while<< !!-----------------------------------17
var times = 0;
do{                                  // same ting as while loop more easy to read for me
  console.log('Tried it ', times);  // do will always run it one time and after check in >>while<< if its true befor it execute
  times++;
} while(times<10);
/*-----------------------!! LOOPS >>WHILE<<CONSOLE LOG !!--------------------------------------16
var times = 0;
while(times<10){
  console.log('loop tried ', times);
  times++;     // same code as before but indead of times = times + 1; we done time++; always adds one
}
/*-----------------------!! LOOPS >>WHILE<<CONSOLE LOG !!-----------------------------------------15
var times = 0;             // creating varaible name times thats = to 0;
while( times < 10 ){      //As long as << this is true it will run the {} code  // only WHILE >>times<< is < less than 10
console.log('Tried it '+times);   // Display consol log showing the loop that runs until time is less than 10
times = times + 1;      //var time say its equal to zero we add 1 number to it in our >>{}<< code
}                       //when program is 10  it >>BREAK<< means it stops
/*--------------------ARRAYS >>.forEach()<< METHOD AND ALERT(value, index)-------------------14
var myList = ['apples', 'oranges', 'bananas'];    //create ARRAY
myList.forEach(function(value, index){            //adding >>.forEach<< method that puts function with two arugments
                                                  //>>value<<, >>index<< forEach gives up there arguments autamatically
  alert('i have' +value+'in my shopping bag');                            //DISPLAY  myList using .forEach method display all items in the list
})
/*---------------------!!ARRAYS >>.forEach()<< METHOD AND CONSOLE LOG !! again --------13
var myList = ['apples', 'oranges', 'bananas'];
myList.forEach(function(value, index){  //autamatically puts 2 ARGUMENTS in to the FUNCTION
                                        //=>>value<<, >>index<<
  console.log(value, index)             // DISPLAY these values and index in the consol browser
});
/*------------------ARRAtS .shift() VAR DISPLAY --------------------------------------14
var myList = ['apples', 'oranges', 'bananas'];
var currentFruit = myList.shift();            //Creates a varaible thats shifts apples from my list to var currentFruit
alert(currentFruit);                          //Display that varaible
/*-------------------!!ARRAYS >>.forEach()<< METHOD AND CONSOLE LOG !!------------------13
var myList = ['apples', 'oranges','watermelon'];
myList.forEach(function(value, index){
  console.log(value, index)        //Display info on the browser console
});

/*-------------------ARRAYS myList.pop()--------------------------------------------12
var myList = ['oranges', 'apples', 'watermelon'];
myList.pop();                //>>.pop()<< its like shift but instead of taking first item from the
                            //list i takes last that is 'watermelon'
alert(myList);
/*-------------------ARRAYS DISPLAYING ONLY myList Shifted ----------------------------11
var myList = ['apples', 'oranges', 'watermelon'];
alert(myList.shift());          //Display shifted item from the list that is >>APPLES<<
                                //If want to acces my list again by >>alert(myList);<<
                                //there will be only 'oranges' and 'apples '
/*------------------------ARRAYS and myList.shift() << METHOD ------------------------------10
var myList = ['apples', 'oranges', 'watermelon'];   //Create list of fruits
myList.shift();                   //takes apple out of the list >>.shift()<< its a method
alert(myList);                    // Display my list without apples thats been shifted

/*------------------------ARRAYS INSIDE OF ARRAYS----------------------------9
var myList = ['apples', 12, ['krystian', 'migacz']]; // Examples of arrays inside of arrays
/*-------------------------ARRATS + FUNCTIONS --------------------------8
function go() {
  alert('hi');                          // to run all this in your browser : myList[2]>>();<< to run it
}
var myList = ['apples', 12, go,];        //ARRAY can hold any thing strings, numbers even Functions

/*---------------------------ARRAYS--------------------------------------7
Var myList = ['apples', 'oranges', 'bananas'];      // >>[]<< whats ever inside create ARRAY
myList[3] = 'pinneaples';                          // adding another data to my ARRAY
myList[0] = 'watermelon';                          // change value from apples top to watermelon

/*-------------------FUNCTION , ARGUMENTS , IF ELSE STATEMENT +>>PROPMT<< DATA-------------6

function myName(name, age){
  if (age < 20){
    return name + ' you are young than 20 ' + 'your age is ' + age;
  }else{
    return name + ' you are over 20 ' + 'your age is ' + age;
  }
}
var name = prompt('what is your name');
var age = prompt('what is your age');
alert(myName(name, age));

/*-------------------FUNCTION , ARGUMENTS , RETURN , IF and ELSE STATEMENTS -------------5
function go(name, age){
  if(age<20){
    return name+" "+"you are less than 20 years old";
  }else{
    return name+" "+"you are over 20 years old";
  }
}
alert(go("Krystian", 10));
/*-------------------FUNCTION , ARGUMENTS , RETURN-------------------------4
function add(first, second)
{
  return first + second;
}
alert(add(1,2));  //  Shorter way of writing that code
/*--------------------------FUNCTION , ARGUMENTS , RETURN------------------------ 3
function subtract(first, second)
{
  return first - second;
}
var sum = subtract(4, 5);
alert(sum);
/*---------------------FUNCTION , ARGUMENTS , RETURN ----------------------------------------- 3
function add(first, second)  // 1 Creat function name >>add<<  with arguments >>first, second<<
{
  return first + second ;    // return is like prompt but you say what function should do
}
var sum = add(1, 2) ;        // Create varaible name >>sum<< thats = to function >>add<< witch is (1, 2)
alert(sum);
/*----------------------FNCTION and  ARGUMENTS ----------------------------- 2
function go(name, age)    //Functions also accept ARGUMENTS (name. age)!!!
{
  alert(name);       //this function is called DRY do not repeat yourslfe
  alert(age);
}
go ("Krystian", 23);
go ("Felix", 10);     //here you state whats the name and the age  Krystian is first argument 23 is second argument
/*-------------------------FUNCTION----------------------------- BASIC !!! 1
function go()       //Function named go
{
  alert("hey");     // First alert
  alert("heythere");  // Second alert
}
go();        // you have to call it by typing this to make upper function defined work
go();        // They can be called as many times as i want will display "hey" and "heythere" 4 times
/*--------------------------------------------
function add(first, second)
{
return first+second;
}
var sum = add(1, 4);
alert(sum);
/*EXCERZISES !!!!! -------------------------------------------------
function go(name, age)  // (name,age)<< ARGUMENTS // DRY do not repeat yourselfe !!! FUNCTION NAMED (GO)
{
  alert(name);    // COMMANDS
  alert(age);
}
go("will",34);
go("Krystian", 23);
/*------------------------------------
funtion concatenate(first, last)
{
  var full;
  full = first + " " + last
  return full;
}
function secondFunction()
{
  var result;
  var firstName = prompt("what is your first name?");
  var lastName = prompt("what is your last name?");
  result = concatenate(firstName,lastName);

  document.write("Your full name is" + result;)
}

/* -------------------------------------------------------
function power(base, exponent)
{
  var result= 1;
for (var count = 0; count<exponent; count++)
{
  result *=base;                    // FUNCTION EXAMPLE
}
  return result;
}
var a = parseFloat(prompt("enter your starting number"));
var b = parseFloat(prompt("enter your power of ..."));

document.write(power(a,b));

/*---------------------------------------------------
function sayHelloAgain (name, age)
{
  document.write(name + "is" + age + "Years old" + "<br>") ///// not finished <<<

}


var n = prompt("Enter your name ");
var o = parseint(prompr("how old are you "));
sayHelloAgain(n,o);

/*-------------------------------------------------------------------
if (age<15 && age>40)
{
  do someting
}
var name =="Richard";
var age = 28;
document.write(name);
var average = a + b /2;
var meatPrice = 4.00;
var meatTax = 0.03 * meatPrice;
var milkPrice = 2.00;
var milkTax = 0.03 * milkPrice;
document.write(meatTax + meatPrice + milkTax + meatPrice);
var canVote = prompt("Your age?") > 18;

/*----------------------------------------------------
if (a==2) // IF THAN (CONDITION WE CAN HAVE MORE THAN ONE CONDITION!!!!!!)
{
  b=56;
}
if (c==3)
{
  d=3;
}
var Name ="I am";
Name = Name + "Legend";
if ( me=="Richard" )
{
document.write("I am a legend" && score = 30); //<<<MORE THAN ONE CONDITION 1.                    //2.
if ( name=="Richard"  && age==30 )
{
  b=3;
}
/*this code wrong
var message ="My name Krystian";
if( age > 40 )
{
  i=i+1;
}
document.write("i want to print this");
var snooker = prompt("whats your best break in snooker?");
var nameType = "middle"
prompt("whats is your "+ nameType +"name?");
if (( x>0 ) && ( y<10 ))

{
  me ="dave";
}
var d=3;
/*---------------------------------------------------
var fish = prompt("do u like fish nigga yes or no");
if (fish == "yes")
{
  document.write("i like em too nigga");
}
if (fish == "no")
{
  document.write("why the fuck not nigaa");
}
else {
  document.write("make ur fucink mind nigga");
}

/*---------------------------------------------------
var count = 0;
document.write("Starting Loop ");

while (count < 40)
	{
	document.write("Current Count : " + count + "<br />");
	count++;
	}

document.write("Loop stopped!");
/*-----------------------------------------------------
var firstname = prompt ('What is your first name? ');
var surname = prompt ('What is your surname name? ');
var age = prompt ('How old are you? ');
var gender = prompt ("What is your gender? Type 'male', 'female' or simply press enter if you do not wish to say ");
var maritalStatus = prompt ("Are you married? Type 'yes', 'no' or simply press enter if you do not wish to say ");
var title;
if (gender !="male" || gender!="female") {title = "Mx";}
if (gender == "male" && age >= 18)  { title = "Mr"; }
if (gender == "male" && age <= 18)  { title = "Master"; }
if (gender == "female" && age <= 18) { title = "Miss"; }
if (gender=="female"){
 if (maritalStatus!="no")
 { if (maritalStatus!="yes")
    {title="Ms";}
  }}
if (age >= 18)
{ if (maritalStatus == "yes")
{ if (gender == "female")
{ title = "Mrs";
}}}
document.write("Hello"+" "+title+" "+firstname+" "+surname);

--------------------------------------------------------------
var firstname = prompt ('What is your first name? ');
var surname = prompt ('What is your surname name? ');
var age = prompt ('How old are you? ');
var gender = prompt ("What is your gender? Type 'male', 'female' or simply press enter if you do not wish to say ");
var maritalStatus = prompt ("Are you married? Type 'yes', 'no' or simply press enter if you do not wish to say ");

if (gender == "male" && age >= 18)
{
  document.write("Hello Mr. " + firstname + " " +surname);
}
else if (gender == "male" && age <=18)
{
  document.write("Hello Master." + firstname+" "+surname);
}
else if (gender == "female" && age <=18)
{
  document.write ("Hello Miss." + firstname + " "+ surname);
}
if

/*
------------------------------------------------
var number = prompt("Give me a number");
var sign;

----------------------------------------------------
var name = prompt ("whats your name");
if (name == "Paul" || name=="Dave")
{
  document.write("Great name!");
}
else {
  document.write("amazing name");
}
----------------------------------------------------
var name = prompt ("Whats your name");
if (name == "Paul" || name == "Dave") // Write paul or || Dave !!!
{
  document.write("great name");
}
----------------------------------------------------
var fish = prompt ("Do you like fish (Y/N)?");
if (fish == "Y")
{
  document.write("They are amazing arent they");
}
else if (fish =="N")
{
  document.write("why not whats wrong with fish");
}
else {
  document.write ("well go find one and find out");
}
------------------------------------------------------
var kids = parseFloat(prompt("How many kids do you have")); // praseFloat changes string into a number !!!!!
if (kids >= 1) // < its a number not a string so wee need to switch it by praseFloat !!!!!!!!!
{
  document.write("youre a parent well done!");
}
else {
  document.write("your not a perent well done");
}

------------------------------------------------------
var bFrench = prompt("Are you french (Y/N)?");
if(bFrench == "Y")     //two == is something is equal to !!!!!!!!!!
{
  document.write("bonjour");
}
else {
  document.write("hello");
}
-------------------------------------------------------
var numberOfCats = 5;    //number    Type of Data
var numberOfDogs = "5";  //string    Type of Data
var equalCatsAndDogs = numberOfCats==numberOfDogs; //Boolean Type of Data  3 equal sings test Data Type
document.write(equalCatsAndDogs);

-------------------------------------------------------
Excersize A Week3

var myMoney = parseFloat(prompt("How much money do you have?"));
if (myMoney>2){
  document.write("Heres your icecream");
}
else {document.write("No ice cream hahaha");
}

------------------------------------------------------------
var age = parseFloat(prompt("what is your age?"));
if (age<14 && >= 40){
  document.write("you are not allowed to have an account");
}
else if (age>=40)
{
  document.write("Join on older ppl site");
}
else if(age<14){
  document.write("join kids site");
}
else{
  document.write("join here");
}

-------------------------------------------------------------
if (conditon1) {block of code to run if contition1 is true}
else if (condition2){block of code to run if condition1 is false and condition2 is true }  !!!!!!!!
else {blockofcode to run otherwhise}
-------------------------------------------------------------
if (condition) { block of code to run if true  }   !!!!!
else {   block of code to run otherwhise   }       !!!!!
--------------------------------------------------------------
var alive = false;
var theEarthIsFlat = false;

document.write(alive + "<br>");
document.write(theEarthIsFlat + "<br>");

if(alive){
document.write("i am alive" + "<br>");

}
else {
document.write("too late!" +"<br>");
}

----------------------------------------------------------
var num1 = parseFloat(prompt("Enter your first number"));
var num2 = parseFloat(prompt("Enter your second number"));

var total1 = num1 + num2;

document.write("The Total is: " +total1);
-----------------------------------------------------------


var myNum = 4;
if (mNum == 4)
{
var total1 = 4 + 4 ;
document.write("total1 is :" + total1);
}
------------------------------------------------------------
*/
