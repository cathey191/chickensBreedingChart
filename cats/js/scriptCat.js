$(document).ready(function() {

	function Chickens(parentOne, parentTwo){
		this.parentOne = parentOne;
		this.parentTwo = parentTwo;
	}

	var string = new Chickens("black", "log");
	var glowstone = new Chickens("quartz", "yellow");
	var gunpowder = new Chickens("sand", "flint");
	var redstone = new Chickens("red", "sand");
	var glass = new Chickens("quartz", "redstone");
	var iron = new Chickens("flint", "white");
	var coal = new Chickens("flint", "log");
	var gold = new Chickens("iron", "yellow");
	var snowball = new Chickens("blue", "log");
	var water = new Chickens("gunpowder", "snowball");

	// function recursivelyCheckAll (Chickens, text) {
	// 	var htmlString = '<div class="current"><p>'+current+'</p></div>'
	//
	// 	for (parent in chickens[current]){
	// 		if (chickens[current][parent] != null){
	// 			htmlString += recursivelyCheckAll(chickens, chickens[current][parent]);
	// 		};
	// 	}
	// 	return htmlString
	// };

	// var htmlString = '<div class="current"><p>'+current+'</p></div>'

	$(document).on('keyup', '.search', function(event) {
		var text = document.getElementsByClassName('search').value;
		// recursivelyCheckAll(Chickens, text);

		if(text == Chickens){
			console.log('pass');
		} else {
			console.log('fail')
		}

	})
});
