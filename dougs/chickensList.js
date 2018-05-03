$(document).ready(function(){
var chickens = null;
var jsonRead = false;

function recursivelyCheckAll(data, current){
    var htmlString = '<div><p>'+current+'</p></div>'
		console.log("current: "+current);
		console.log(data[current])
    for (var i=0; i<data.length;i++){
			var tier = data[i]
			console.log("Tier: ");
			console.log(tier);
				for (parent in data[tier][current]){
               if (data[tier][current][parent] != null){
								 console.log("Parent:")
								 console.log(parent);
								 console.log(current);
								 console.log("--------------");
                    htmlString += recursivelyCheckAll(data,data[tier][current][parent]);
                };
            };
				};
    return htmlString
};

$(document).on('keyup', '.search', function(event){
    var text = document.querySelector('.search').value;

    if (jsonRead == false){
			console.log("getting json");
        $.getJSON('file:///C:/Users/845870941/Desktop/chickensBreedingChart/cats/js/chickenBreeds.json', function(data){

            console.log(data);
						console.log("Running....");
            recursivelyCheckAll(data, text);
            jsonRead = true;
            chickens = data;
        });

    } else {
				console.log("normal running...");
        var html = recursivelyCheckAll(chickens, text);
        document.querySelector(".output").innerHTML = html;
    }
})
});
