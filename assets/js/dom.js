

const tarifaA = 0.0012;
const tarifaC = 0.0035; /* Las letras A, C y D son nomenclatura de seguros. No es que no exista la cobertura B, pero es raro que se use para autos.*/
const tarifaD = 0.0073;



let btnCotizar = document.getElementById("btnCotizar");
btnCotizar.onclick = () => {
    let marca = document.getElementById("marca");
    let marcaAuto = marca.value.toUpperCase();

    let modelo = document.getElementById("modelo");
    let modeloAuto = modelo.value.toUpperCase();

    let anio = document.getElementById("anio");
    let anioAuto = anio.value;

    let sumaAseg = document.getElementById("sumaAsegurada");
    let sumaAsegAuto = sumaAseg.value;

    let cobertura = document.getElementById("cobertura");
    let coberturaAuto = cobertura.options[cobertura.selectedIndex].value;

    let tarifa;
    let textoCobertura;

    if (coberturaAuto == "A- Responsabilidad Civil") {
        textoCobertura = "A- Responsabilidad Civil";
        tarifa = tarifaA;
    } else if (coberturaAuto == "C- Terceros Completo") {
        textoCobertura = "C- Terceros Completo";
        tarifa = tarifaC;
    } else if (coberturaAuto == "D- Todo Riesgo c/ Franquicia") {
        textoCobertura = "D- Todo Riesgo c/ Franquicia";
        tarifa = tarifaD;
    }


    let costo = sumaAsegAuto * tarifa;

    let cotizacion = document.getElementById("cotizacion");
    cotizacion.innerHTML = 
    `
    <div class="resultado">
        <h2>SU COTIZACION</h2>
        <p><strong>Vehiculo:</strong> ${marcaAuto} ${modeloAuto} - (${anioAuto})</p>
        <p><strong>Cobertura:</strong> ${textoCobertura}</p>
        <p><strong>Suma Asegurada:</strong> $ ${sumaAsegAuto}</p>
        <p class="costo"><strong>Costo Mensual:</strong> $ ${costo}</p>
    </div>
    `

    cotizacion.append(cotizacion);
}