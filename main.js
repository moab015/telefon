
function endre_fokus_til_element(id) {
    console.log("neste element er ", id);
    var element = document.getElementById(id);
    console.log(element);
    element.focus();

}

function neste_element(neste_forrige, id){
    var  index = value_array.indexOf(id);
    var new_index = index + neste_forrige;
    
    if (new_index >= value_array.length){
        var new_id = value_array[0]
    }
    else if (new_index < 0){
        var new_id = value_array[value_array.length - 1]
    }
    else{
        var new_id = value_array[new_index];
    }
    
    return new_id;

}





let value_array = ["klokke_link", "kalender_link", "kontakter_link", "notater_link"]
addEventListener("keydown",function (event) {
    var focusedElement = document.activeElement;
    if (event.key === "ArrowRight"){
        var new_id = neste_element(1, focusedElement.id)
        console.log("høyre", event.key)
        
    }
    else if (event.key === "ArrowLeft") {
        var new_id =neste_element(-1, focusedElement.id)
        console.log("venstre", event.key)
        
    }
    else {
        console.log("ingen kjente klikk")
    }
    
    console.log(new_id)
    endre_fokus_til_element(new_id)
})

