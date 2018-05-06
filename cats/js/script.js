$(document).ready(function() {
	var chickens = {
		'String':
			{parentOne:"Black",
			parentTwo:"Log"},
		'Glowstone':
			{parentOne:"Quartz",
			parentTwo:"Yellow"},
		'Gunpowder':
			{parentOne:"Sand",
			parentTwo:"Flint"},
		'Redstone':
			{parentOne:"Red",
			parentTwo:"Sand"},
		'Glass':
			{parentOne:"Quartz",
			parentTwo:"Redstone"},
		'Iron':
			{parentOne:"Flint",
			parentTwo:"White"},
		'Coal':
			{parentOne:"Flint",
			parentTwo:"Log"},
		'Gold':
			{parentOne:"Iron",
			parentTwo:"Yellow"},
		'Snowball':
			{parentOne:"Blue",
			parentTwo:"Log"},
		'Water':
			{parentOne:"Gunpowder",
			parentTwo:"Snowball"}
	}

	function recursivelyCheckAll (chickens, current) {
		var htmlString = '<div class="current"><p>'+current+'</p></div>'

		for (parent in chickens[current]){
			if (chickens[current][parent] != null){
				htmlString += recursivelyCheckAll(chickens, chickens[current][parent]);
			};
		}
		return htmlString
	};

	$(document).click('keyup', '.search', function(event){
		var text = document.querySelector('.search').value;
		recursivelyCheckAll(chickens, text);
	})
});
