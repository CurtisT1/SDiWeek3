// alert("JavaScript works!");


// Variables


var character1 = "Wizard";
var character2 = "Ice witch1";
var character3 = "Ice witch2";
var character4 = "Ice witch3";
var weapon1 = "Wand";
var weapon2 = "Staff";
var move1 = "Firestorm";
var move2 = "Meteor showers";


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