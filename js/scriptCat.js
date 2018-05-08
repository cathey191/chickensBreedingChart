$(document).ready(function() {

  //Template for one chicken
 function Chicken(parentOne, parentTwo){
		this.parentOne = parentOne;
		this.parentTwo = parentTwo;

	};

  //Holds all chickens. Note the individual object notiation
  var allChickens = {

    string: new Chicken("black", "log"),
    glowstone: new Chicken("quartz", "yellow"),
    gunpowder: new Chicken("sand", "flint"),
    redstone: new Chicken("red", "sand"),
    glass: new Chicken("quartz", "redstone"),
    iron: new Chicken("flint", "white"),
    coal: new Chicken("flint", "log"),
    gold: new Chicken("iron", "yellow"),
    snowball: new Chicken("blue", "log"),
    water: new Chicken("gunpowder", "snowball")
  }

	console.dir(allChickens.coal.parentOne)


	$('#button').click(function(event) {
		var text = document.querySelector('.search').value;

    console.log("Parents of: "+text);
		console.log(allChickens.text.parentOne);
    console.log(allChickens.text.parentTwo);



	})
});
