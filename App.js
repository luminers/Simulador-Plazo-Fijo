const $nombre=document.getElementById("nombre"),
$apellido=document.getElementById("apellido"),
$monto=document.getElementById("monto"),
$dias=document.getElementById("dias"),
$reinvertir=document.getElementById("reinvertir"),
$btnCalcular=document.getElementById("calcular"),
$error=document.getElementById("error");

$btnCalcular.addEventListener("click",function calcular() {
    if (verificar()) {
        
    }

  

    console.log("calcular")
})

function verificar() {
    
    $error.style.display="none";
    $error.innerHTML="";

    while ($nombre.value=="" || $apellido.value=="") {
        let mensaje = document.createElement("p");
        mensaje.innerHTML="<p>El nombre y apellido no pueden ser vacios</p>"
        $error.appendChild(mensaje);
        $error.style.display="flex";
        return false
    }

    while ($monto.value < 1000 || $monto.value=="") {
        let mensaje = document.createElement("p");
        mensaje.innerHTML="<p>El monto debe ser mayor a 1000 y solo admite valores numericos</p>"
        $error.appendChild(mensaje);
        $error.style.display="flex";
        return false
    }

    while ($dias.value < 30 || $dias.value=="") {
        let mensaje = document.createElement("p");
        mensaje.innerHTML="<p>La cantidad minima de dias es 30 y es obligatoria</p>"
        $error.appendChild(mensaje);
        $error.style.display="flex";
        return false
        
        
    }


    return true;



}