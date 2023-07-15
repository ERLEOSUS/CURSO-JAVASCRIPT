var x=1;
var x=1;
function aggLinea(){
    document.body.innerHTML += "<p>Linea "+x+"</p>";
    x=x+1;
    var cambio=document.getElementById("editable");
    cambio.style.fontSize= x+"em";
}
function aggTextDiv(){
    var div_cambio=document.getElementById("modificar");
    div_cambio.style.backgroundColor="green";

}