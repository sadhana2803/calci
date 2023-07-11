// document.getElementById("demo")
// document.getElementsByClassName()
// document.getElementsByTagName()
function add(){
    var x=parseInt (document.getElementById("n1").value);
    var y=parseInt(document.getElementById("n2").value);
    var z=x+y;
    document.getElementById("demo").innerHTML=z;
}
function sub(){
    var x=document.getElementById("n1").value
    var y=document.getElementById("n2").value
    var z=x-y
    document.getElementById("sub").innerHTML=z;
}
function multi(){
    var x=document.getElementById("n1").value
    var y=document.getElementById("n2").value
    var z=x*y
    document.getElementById("multi").innerHTML=z;
}
function div(){
    var x=document.getElementById("n1").value
    var y=document.getElementById("n2").value
    var z=x/y
    document.getElementById("div").innerHTML=z;
}