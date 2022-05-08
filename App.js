//Declaracion de elementos
const $nombre = document.getElementById("nombre"),
    $apellido = document.getElementById("apellido"),
    $monto = document.getElementById("monto"),
    $dias = document.getElementById("dias"),
    $reinvertir = document.getElementById("reinvertir"),
    $btnCalcular = document.getElementById("calcular"),
    $error = document.getElementById("error"),
    $main = document.getElementById("main");


//Creo el elemento directamenten en el script
const $montoFinal = document.createElement("div");
$montoFinal.classList.add("monto-final");


//Evento de calcular
$btnCalcular.addEventListener("click", function calcular() {
    montoInicial = parseInt($monto.value);
    $montoFinal.innerHTML = "";
    $main.appendChild($montoFinal);

    //Calcular sin reinvertir
    if (verificar() && $reinvertir.checked == false) {

        switch (true) {
            case ($dias.value >= 30 || $dias.value <= 60):
                $montoFinal.innerHTML = `<p>El monto final es: ${montoFinal(montoInicial,40)}</p>`;

                break;
            case ($dias.value >= 61 || $dias.value <= 120):
                $montoFinal.innerHTML = `<p>El monto final es: ${montoFinal(montoInicial,45)}</p>`;
                break;
            case ($dias.value >= 121 || $dias.value <= 360):
                $montoFinal.innerHTML = `<p>El monto final es: ${montoFinal(montoInicial,50)}</p>`;
                break;
            case ($dias.value >= 361):
                $montoFinal.innerHTML = `<p>El monto final es: ${montoFinal(montoInicial,65)}</p>`;
                break;
            default:

                break;
        }
    } else if (verificar() && $reinvertir.checked) { //Si se reinvierte
        
        let monto = montoInicial;
        console.log(monto)
        //Elegir el porcentaje segun los dias
        switch (true) {
            case ($dias.value >= 30 || $dias.value <= 60):
                //Reinvertir los 4 periodos
                //ToDo-> hacer este for dentro de una funcion para reciclar codigo 
                for (let i = 0; i < 4; i++) {
                    console.log(monto)
                    $montoFinal.innerHTML += `<li><p class="periodo">Periodo ${i+1}</p> <p class="monto-inicial-invertido">Monto: ${monto}</p> <p class="monto-final-invertido">Monto final:${montoFinal(monto,40)}</p></li>`
                    monto = montoFinal(monto, 40);
                }
                break;
            case ($dias.value >= 61 || $dias.value <= 120):
                for (let i = 0; i < 4; i++) {
                    console.log(monto)
                    $montoFinal.innerHTML += `<li><p class="periodo">Periodo ${i+1}</p> <p class="monto-inicial-invertido">Monto: ${monto}</p> <p class="monto-final-invertido">Monto final:${montoFinal(monto,45)}</p></li>`
                    monto = montoFinal(monto, 45);
                }
                 break;
            case ($dias.value >= 121 || $dias.value <= 360):
                for (let i = 0; i < 4; i++) {
                    console.log(monto)
                    $montoFinal.innerHTML += `<li><p class="periodo">Periodo ${i+1}</p> <p class="monto-inicial-invertido">Monto: ${monto}</p> <p class="monto-final-invertido">Monto final:${montoFinal(monto,50)}</p></li>`
                    monto = montoFinal(monto, 50);
                } break;
            case ($dias.value >= 361):
                for (let i = 0; i < 4; i++) {
                    console.log(monto)
                    $montoFinal.innerHTML += `<li><p class="periodo">Periodo ${i+1}</p> <p class="monto-inicial-invertido">Monto: ${monto}</p> <p class="monto-final-invertido">Monto final:${montoFinal(monto,65)}</p></li>`
                    monto = montoFinal(monto, 65);
                } break;
            default:

                break;
        }
    }

   
})


//Verifica los inputs
function verificar() {
    //Limpia el mensaje de error
    $error.style.display = "none";
    $error.innerHTML = "";

    //Verifica que no sean vacios
    while ($nombre.value == "" || $apellido.value == "") {
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "<p>El nombre y apellido no pueden ser vacios</p>"
        $error.appendChild(mensaje);
        $error.style.display = "flex";
        return false
    }

    while ($monto.value < 1000 || $monto.value == "") {
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "<p>El monto debe ser mayor a 1000 y solo admite valores numericos</p>"
        $error.appendChild(mensaje);
        $error.style.display = "flex";
        return false
    }

    while ($dias.value < 30 || $dias.value == "") {
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "<p>La cantidad minima de dias es 30 y es obligatoria</p>"
        $error.appendChild(mensaje);
        $error.style.display = "flex";
        return false


    }

    //Validacion correcta
    return true;



}

//  monto final = monto inicial + monto inicial * cantidad días360*porcentaje100
//Calcula el monto final
function montoFinal(monto, porcentaje) {
    let montoFinal;
    montoFinal = monto + (monto * (($dias.value / 360) * (porcentaje / 100)));

            
    return Math.ceil(parseFloat(montoFinal));


}