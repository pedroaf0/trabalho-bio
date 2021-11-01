
// Animação da NavBar
var rot = 0
var tam = 20;
var oc = new Boolean(false)
var lin = document.getElementById("ml3")
function navanim() {
    var elem = document.getElementById("animar");
    var img = document.getElementById("bttimg")
    var id = setInterval(() => {
        if (tam == 100 && oc == false) {
            clearInterval(id)
            oc = true
        } else if (oc == false) {
            tam++
            rot = rot + 1.15
            elem.style.width = tam + 'vh'
            img.style.transform = "rotate" + "(" + rot + "deg" + ")"
        }
        if (tam == 20 && oc == true) {
            clearInterval(id)
            oc = false 
        } else if (oc == true) {
            tam--
            rot = rot - 1.15
            elem.style.width = tam + 'vh'
            img.style.transform = "rotate" + "(" + rot + "deg" + ")"
        }

    }, 7)
}   

                // Questões


function ques1(){
    if(document.getElementById("1r4").checked){
        Swal.fire({
            icon: 'success',
            title: 'Obaa',
            text: 'Você acertou!',
          })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Eita!',
            text: 'Resposta incorreta',
          })
    }
}