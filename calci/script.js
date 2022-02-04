
function compute(){
    var x = document.getElementById("result").value ;
    var y = eval(x) ;
    document.getElementById("result").value = y ; 
}
function view(num){
    document.getElementById("result").value += num ;
}
function clr(){
    document.getElementById("result").value = "" ;
    console.log("helo") ;
}