function relogioAtual(){

    var dataAtual = new Date();


    var  dia = dataAtual.getDate();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos =dataAtual.getSeconds();


    horas = horas < 10 ? "0" + horas : horas;
    dia = dia < 10 ? "0" + dia : dia;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    document.getElementById("dia").textContent = dia;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

setInterval(relogioAtual, 1000);


  