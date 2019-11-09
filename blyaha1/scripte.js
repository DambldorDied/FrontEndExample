
function removeByJquery() {
    var element = $("#card-to-delete");
    element.remove();
}

function add() {
    var but2 = $("#but-add");
    but2.before("<h1>Hello, world!</h1>");
}

var current = "violet";

function turn(element) {
    //alert(element);
    $("#s" + element).css("background-color", current);
    if(current === "violet") {
        current = "red";
    } else {
        current = "violet";
    }
    $("#s"+element).prop("disabled", true);
}