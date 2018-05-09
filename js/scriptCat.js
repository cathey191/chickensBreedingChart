$(document).ready(function() {

  //Template for one chicken
 function Chicken(parentOne, parentTwo){
		this.parentOne = parentOne;
		this.parentTwo = parentTwo;

	};

  //Holds all chickens. Note the individual object notiation
  var allChickens = {

    string: new Chicken('black', 'log'),
    glowstone: new Chicken('quartz', 'yellow'),
    gunpowder: new Chicken('sand', 'flint'),
    redstone: new Chicken('red', 'sand'),
    glass: new Chicken('quartz', 'redstone'),
    iron: new Chicken('flint', 'white'),
    coal: new Chicken('flint', 'log'),
    gold: new Chicken('iron', 'yellow'),
    snowball: new Chicken('blue', 'log'),
    water: new Chicken('gunpowder', 'snowball')
  }

	$('#button').click(function(event) {
		var textMixCase = document.querySelector('.search').value;
		var text = textMixCase.toLowerCase();

		var firParent = allChickens[text].parentOne
		var secParent = allChickens[text].parentTwo

		$('.title').text('Parents of: '+text);
		$('.firParent').text(firParent);
		$('.secParent').text(secParent);

		// var thrParent = allChickens[firParent].parentOne
		// var fouParent = allChickens[firParent].parentTwo
		// var fivParent = allChickens[secParent].parentOne
		// var sixParent = allChickens[secParent].parentTwo
		//
		// $('.thrParent').text(thrParent);
		// $('.fouParent').text(fouParent);
		// $('.fivParent').text(fivParent);
		// $('.sixParent').text(sixParent);

		console.log(allChickens[text].parentOne);
		console.log(allChickens[text].parentTwo);


	})
});
