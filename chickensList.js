$(document).ready(function(){
var chickens = null;
var jsonRead = false;

function recursivelyCheckAll(data, current){
    var htmlString = '<div><p>'+current+'</p></div>'

    for (parent in data[current]){
               if (data[current][parent] != null){
                    htmlString += recursivelyCheckAll(data, data[current][parent]);
                };
            }
    return htmlString
};

$(document).on('keyup', '.search', function(event){
    var text = document.querySelector('.search').value;

    if (jsonRead == false){
        $.getJSON('file:///C:/Users/Flossy/Downloads/chickens.json', function(data){

            console.log(data);
            recursivelyCheckAll(data, text);
            jsonRead = true;
            chickens = data;
        });

    } else {

        var html = recursivelyCheckAll(chickens, text);
        document.querySelector(".output").innerHTML = html;
    }
})
});
