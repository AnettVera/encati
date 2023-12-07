
function validar() {
    var tiendaSelect = document.getElementById("tienda");
    var encuestaSelect = document.getElementById("encuesta");
    return (
        tiendaSelect.options[tiendaSelect.selectedIndex].value !== "Seleccionar la tienda" &&
        encuestaSelect.options[encuestaSelect.selectedIndex].value !== "Seleccionar encuesta"
    );
}





var po=0;
var f,c,u,r,m,p,s,com;
var guardarBtn = document.getElementById("guardarBtn");
var encuestaSelect = document.getElementById("encuesta");


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

    f=0;
    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
    if(color==="rgb(220, 20, 60)"){
        f=0;
    }else if(color==="rgb(255, 140, 0)"){
        f=1;
    }else if(color==="rgb(255, 215, 0)"){
        f=2;
    }else if(color==="rgb(46, 139, 87)"){
        f=3;
    }else if(color==="rgb(30, 144, 255)"){
        f=4;
    }
    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }

}




function copiarPropiedadesConf(elemento) {
    if (!validar()) {
        return;
    }
    var resFun = document.getElementById("resConf");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resConf.style.color = color;
    resConf.innerHTML = icon + "<br>" + text;
    var row = document.getElementById("Confiabilidad");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    c=0;
    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
    if(color==="rgb(220, 20, 60)"){
        c=0;
    }else if(color==="rgb(255, 140, 0)"){
        c=1;
    }else if(color==="rgb(255, 215, 0)"){
        c=2;
    }else if(color==="rgb(46, 139, 87)"){
        c=3;
    }else if(color==="rgb(30, 144, 255)"){
        c=4;
    }

    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }
}

function copiarPropiedadesUs(elemento) {
    if (!validar()) {
        return;}
    var resFun = document.getElementById("resUs");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resUs.style.color = color;
    resUs.innerHTML = icon + "<br>" + text;
    var row = document.getElementById("Usabilidad");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
    u=0;
    if(color==="rgb(220, 20, 60)"){
        u=0;
    }else if(color==="rgb(255, 140, 0)"){
        u=1;
    }else if(color==="rgb(255, 215, 0)"){
        u=2;
    }else if(color==="rgb(46, 139, 87)"){
        u=3;
    }else if(color==="rgb(30, 144, 255)"){
        u=4;
    }


    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }

}

function copiarPropiedadesRen(elemento) {
    if (!validar()) {
        return;}
    var resFun = document.getElementById("resRen");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resRen.style.color = color;
    resRen.innerHTML = icon + "<br>" + text;
    var row = document.getElementById("Rendimiento");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    r=0;
    if(color==="rgb(220, 20, 60)"){
        r=0;
    }else if(color==="rgb(255, 140, 0)"){
        r=1;
    }else if(color==="rgb(255, 215, 0)"){
        r=2;
    }else if(color==="rgb(46, 139, 87)"){
        r=3;
    }else if(color==="rgb(30, 144, 255)"){
        r=4;
    }
    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }

}

function copiarPropiedadesMan(elemento) {
    if (!validar()) {
        return;}
    var resFun = document.getElementById("resMan");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resMan.style.color = color;
    resMan.innerHTML = icon + "<br>" + text;
    var row = document.getElementById("Mantenimiento");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
    m=0;
    if(color==="rgb(220, 20, 60)"){
        m=0;
    }else if(color==="rgb(255, 140, 0)"){
        m=1;
    }else if(color==="rgb(255, 215, 0)"){
        m=2;
    }else if(color==="rgb(46, 139, 87)"){
        m=3;
    }else if(color==="rgb(30, 144, 255)"){
        m=4;
    }
    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }

}
function copiarPropiedadesPor(elemento) {
    if (!validar()) {
        return;}
    var resFun = document.getElementById("resPor");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resPor.style.color = color;
    resPor.innerHTML = icon + "<br>" + text;
    var row = document.getElementById("Portabilidad");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    p=0;
    if(color==="rgb(220, 20, 60)"){
        p=0;
    }else if(color==="rgb(255, 140, 0)"){
        p=1;
    }else if(color==="rgb(255, 215, 0)"){
        p=2;
    }else if(color==="rgb(46, 139, 87)"){
        p=3;
    }else if(color==="rgb(30, 144, 255)"){
        p=4;
    }

    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }

}
function copiarPropiedadesSeg(elemento) {
    if (!validar()) {
        return;}
    var resFun = document.getElementById("resSeg");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resSeg.style.color = color;
    resSeg.innerHTML = icon + "<br>" + text;
    var row = document.getElementById("Seguridad");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
    s=0;
    if(color==="rgb(220, 20, 60)"){
        s=0;
    }else if(color==="rgb(255, 140, 0)"){
        s=1;
    }else if(color==="rgb(255, 215, 0)"){
        s=2;
    }else if(color==="rgb(46, 139, 87)"){
        s=3;
    }else if(color==="rgb(30, 144, 255)"){
        s=4;
    }

    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }
}
function copiarPropiedadesCom(elemento) {
    if (!validar()) {
        return;}
    var resFun = document.getElementById("resCom");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resCom.style.color = color;
    resCom.innerHTML = icon + "<br>" + text;

    var row = document.getElementById("Compatibilidad");

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
    com=0;
    if(color==="rgb(220, 20, 60)"){
        com=0;
    }else if(color==="rgb(255, 140, 0)"){
        com=1;
    }else if(color==="rgb(255, 215, 0)"){
        com=2;
    }else if(color==="rgb(46, 139, 87)"){
        com=3;
    }else if(color==="rgb(30, 144, 255)"){
        com=4;
    }

    if(f==null|| c==null || u==null ||s==null || m==null || r==null ||com==null || p==null){

    }else{
        var po = ((p + u + c + com + s + f + r + m) * 100) / 32;

        var poStr = po.toString();
        if (poStr.includes(".")) {
            var partes = poStr.split(".");
            if (partes[1].length > 2) {
                po = po.toFixed(2); // Redondea a 2 decimales
            }
        }

        po = po + "%";

        var porcentaje = document.getElementById("porcentaje");
        porcentaje.textContent = po;
    }
}

