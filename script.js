function check() {
    document.getElementById('dia').checked = true;
    document.getElementById('semana').checked = false;
    document.getElementById('mes').checked = false;


    document.getElementById('semana').checked = true;
    document.getElementById('dia').checked = false;
    document.getElementById('mes').checked = false;

    document.getElementById('mes').checked = true;
    document.getElementById('dia').checked = false;
    document.getElementById('semana').checked = false;
}



