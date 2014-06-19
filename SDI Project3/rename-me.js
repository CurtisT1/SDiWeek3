// alert("JavaScript works!");


// Variables


var character1 = "Wizard";
var character2 = "Ice witch1";
var character3 = "Ice witch2";
var character4 = "Ice witch3";
var weapon1 = "Wand";
var weapon2 = "Staff";
var move1 = "Meteor showers";


// Outputs of variables
	
	
console.log("The wizard arrives at the ice witches hideout.");
console.log("",character2, " conjures the biggest ice ball at him. The" ,character1, " conjure a wall of fire and stops it, and had to quickly choose" ,weapon1," or " ,weapon2,'.');
console.log("",weapon1," is faster and gives the" ,character1, "more movement. ",weapon2," is heavy and drains half of his magic energy.");
console.log("",character1, "choose ",weapon2,"for more powerful magic, " + "Then the" ,character1, "had to choose which witch to kill first.");


// Function
    
    var  chooseWeapon = function (character1Name, weapon1) {
		console.log("choose " + weapon1 + " character1 " + character1Name);
	var useWeapon = function(character1Name) {
	var weapon1 = "wand";
		console.log("choose " + weapon1 + character1Name);
	};	 
	useWeapon("wizard");
	useWeapon("character2");
	console.log(character1Name + " choose " + weapon1);
	};	


// Arrays 


var characterNames = ["Ice witch1" , "Ice witch2" , "Ice witch3"];

console.log(characterNames);

for (var i = 0; i < characterNames.length; i++) {

if (characterNames[i] === "Ice Witch1") {

console.log(characterNames[i] + "is the leader kill her and the others Ice witches will be destroy also.");


};

};


// Nested Conditional


var character2 = true

if (character2 === true){

console.log("Ice witch1 is the leader destroy her.");
} else { 
	console.log("find the leader");

};


// While Loop 

var move2 = 4;
while(move2 > 0) {
	console.log(move2 + " conjure Meteor Showers.");
	move2--;
};

console.log("In 4 waves The wizard destroys all three Ice witches.");