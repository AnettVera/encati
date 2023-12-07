function validar() {
    var tiendaSelect = document.getElementById("tienda");
    var encuestaSelect = document.getElementById("encuesta");
    return (
        tiendaSelect.options[tiendaSelect.selectedIndex].value !== "Seleccionar la tienda" &&
        encuestaSelect.options[encuestaSelect.selectedIndex].value !== "Seleccionar encuesta"
    );
}

var po = 0;
var f, c, u, r, m, p, s, com;

function actualizarPorcentaje() {
    if (f == null || c == null || u == null || s == null || m == null || r == null || com == null || p == null) {
        return;
    }

    var nuevoPo = ((p + u + c + com + s + f + r + m) * 100) / 32;

    var poStr = nuevoPo.toString();
    if (poStr.includes(".")) {
        var partes = poStr.split(".");
        if (partes[1].length > 2) {
            nuevoPo = nuevoPo.toFixed(2); // Redondea a 2 decimales
        }
    }

    po = nuevoPo;

    var porcentaje = document.getElementById("porcentaje");
    porcentaje.textContent = po + "%";

    var guardarBtn = document.getElementById("guardarBtn");
    guardarBtn.disabled= false;
    guardarBtn.style.backgroundColor="rgb(0,18,86)";
}

function copiarPropiedades(elemento) {
    if (!validar()) {
        return;
    }

    var resFun = document.getElementById("respFun");
    var row = document.getElementById("Funcionalidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;
    resFun.style.color = color;
    resFun.innerHTML = icon + "<br>" + text;

    f = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesConf(elemento) {
    if (!validar()) {
        return;
    }

    var resConf = document.getElementById("resConf");
    var row = document.getElementById("Confiabilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resConf.style.color = color;
    resConf.innerHTML = icon + "<br>" + text;

    c = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesUs(elemento) {
    if (!validar()) {
        return;
    }

    var resUs = document.getElementById("resUs");
    var row = document.getElementById("Usabilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resUs.style.color = color;
    resUs.innerHTML = icon + "<br>" + text;

    u = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesRen(elemento) {
    if (!validar()) {
        return;
    }

    var resRen = document.getElementById("resRen");
    var row = document.getElementById("Rendimiento");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resRen.style.color = color;
    resRen.innerHTML = icon + "<br>" + text;

    r = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesMan(elemento) {
    if (!validar()) {
        return;
    }

    var resMan = document.getElementById("resMan");
    var row = document.getElementById("Mantenimiento");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resMan.style.color = color;
    resMan.innerHTML = icon + "<br>" + text;

    m = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesPor(elemento) {
    if (!validar()) {
        return;
    }

    var resPor = document.getElementById("resPor");
    var row = document.getElementById("Portabilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resPor.style.color = color;
    resPor.innerHTML = icon + "<br>" + text;

    p = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesSeg(elemento) {
    if (!validar()) {
        return;
    }

    var resSeg = document.getElementById("resSeg");
    var row = document.getElementById("Seguridad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resSeg.style.color = color;
    resSeg.innerHTML = icon + "<br>" + text;

    s = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function copiarPropiedadesCom(elemento) {
    if (!validar()) {
        return;
    }

    var resCom = document.getElementById("resCom");
    var row = document.getElementById("Compatibilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resCom.style.color = color;
    resCom.innerHTML = icon + "<br>" + text;

    com = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje();
}

function obtenerValor(color) {
    switch (color) {
        case "rgb(220, 20, 60)":
            return 0;
        case "rgb(255, 140, 0)":
            return 1;
        case "rgb(255, 215, 0)":
            return 2;
        case "rgb(46, 139, 87)":
            return 3;
        case "rgb(30, 144, 255)":
            return 4;
        default:
            return 0;
    }
}