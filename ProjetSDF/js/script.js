function open(){
    alert("Enchère ouverte");
}
function timer(){
    document.getElementById("time").innerHTML = "timer en temps réel";
}
function exemple(){
    for (i=0; i<5; i++){
        document.getElementById("time").innerHTML += "timer en temps réel" + i;
    }
}