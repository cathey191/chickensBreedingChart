$(document).ready(function(){
// var chickens = null;
// var jsonRead = false;

function recursivelyCheckAll(data, current){
    var htmlString = '<div class="current"><p>'+current+'</p></div>'

    for (parent in data[current]){
               if (data[current][parent] != null){
                    htmlString += recursivelyCheckAll(data, data[current][parent]);
                };
            }
    return htmlString
};

$(document).on('keyup', '.search', function(event){
    var text = document.querySelector('.search').value;

    // if (jsonRead == false){
			console.log("getting json");
        $.getJSON('chickenBreeds.json', function(data){

            console.log(data);
						console.log("Running....");
            recursivelyCheckAll(data, text);
            // jsonRead = true;
            // chickens = data;
        });

    // } else {
				// console.log("normal running...");
        // var html = recursivelyCheckAll(chickens, text);
        // document.querySelector(".output").innerHTML = html;
    // }
})
});
