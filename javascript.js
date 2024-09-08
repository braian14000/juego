var puntos= parseInt(localStorage.getItem("puntaje"))
document.getElementById("mostrar").innerHTML = puntos
document.getElementById("puntos").innerText= 'puntos ${puntos}';

function inicio(ubi){
    localStorage.setItem("puntaje",0)
    window.location.href = ubi
}
function correcta(ubi){
    puntos=puntos+100
    localStorage.setItem("puntaje",puntos)
    window.location.href = ubi
}

function incorrecta(ubi){
    puntos=puntos-75
    localStorage.setItem("puntaje",puntos)
    window.location.href= ubi
}






