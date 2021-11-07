
// Animação da NavBar
var rot = 0
var tam = 20;
var oc = new Boolean(false)
var lin = document.getElementById("ml3")
var hide = document.getElementById("coluna")
hide.style.display = "none"
function navanim() {
    var elem = document.getElementById("animar");
    var img = document.getElementById("bttimg")
    var main = document.getElementById("main")
    var id = setInterval(() => {
        if(oc==false){
        if (tam == 65 && oc == false) {
            clearInterval(id)
            hide.style.display = "block"
            oc = true
        } else if (oc == false) {
            tam++
            rot = rot + 2
            elem.style.height = tam + 'vh'
            img.style.transform = "rotate" + "(" + rot + "deg" + ")"
        }}
        else
        if (tam == 20 && oc == true) {
            clearInterval(id)
            oc = false
        } else if (oc == true) {
            hide.style.display = "none"
            tam--
            rot = rot - 2
            elem.style.height = tam + 'vh'
            img.style.transform = "rotate" + "(" + rot + "deg" + ")"
            
        }
    }, 7)
}   

                // Questões
var spnpoi = document.getElementById("spnpoi")
function ques1(){
    var points = 0
    if(document.getElementById("1r").checked){
        points++
    }
    if(document.getElementById("2r").checked){
        points++
    }
    if(document.getElementById("3r").checked){
        points++
    }
    if(document.getElementById("4r").checked){
        points++
    }
    if(document.getElementById("5r").checked){
        points++
    }
    if(document.getElementById("6r").checked){
        points++
    }
    if(document.getElementById("7r").checked){
        points++
    }
    if(document.getElementById("8r").checked){
        points++
    }
    if(document.getElementById("9r").checked){
        points++
    }
    if(document.getElementById("10r").checked){
        points++
    }
    if(document.getElementById("11r").checked){
        points++
    }
    if(document.getElementById("12r").checked){
        points++
    }
    points = (10*(points/12)).toFixed(2)
    spnpoi.innerHTML = points+"/10"
    
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}