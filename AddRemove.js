function addItem() {
    var item= document.getElementById("item").value;
    var y = document.createTextNode(item);
    var z = document.createElement("li");
    z.appendChild(y);
    document.getElementById("emptyul").appendChild(z);
    if (document.getElementById("first").checked == true){
        z.style.color = "red";
    }
    if (document.getElementById("second").checked == true){
        z.style["text-decoration"] = "underline";
    }
}

function removeItem(){
    var rm = document.getElementById("removeField").value;
    var str1 = "Impossible input, choose between 1 and ";
    var lnglist = document.getElementById("emptyul").children.length;
    if (rm < 1 | rm > document.getElementById("emptyul").children.length){
        alert(str1+lnglist);
    }
    else {
        document.getElementById("emptyul").children[rm-1].remove();
    }
}