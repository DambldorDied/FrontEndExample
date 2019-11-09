
function removeByJquery() {
    var element = $("#card-to-delete");
    element.remove();
}

function add() {
    var but2 = $("#but-add");
    but2.before("<h1>Hello, world!</h1>");
}

var current = "violet";
var color = ["none","none","none","none","none","none","none","none","none"];

function turn(element) {
    //alert(element);
    $("#s" + element).css("background-color", current);
    color[number - 1] = current;
    console.log(color);
    if(current === "violet") {
        current = "red";
    } else {
        current = "violet";
    }
    $("#s"+element).prop("disabled", true);
}