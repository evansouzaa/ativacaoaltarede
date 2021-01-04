var pos = document.getElementById("latlong");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else { pos.innerHTML = "Seu browser não suporta Geolocalização."; }
}
function showPosition(position) {
    pos.innerHTML = + position.coords.latitude + ", " + position.coords.longitude;

}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            pos.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
            break;
        case error.POSITION_UNAVAILABLE:
            pos.innerHTML = "Localização indisponível."
            break;
        case error.TIMEOUT:
            pos.innerHTML = "A requisição expirou."
            break;
        case error.UNKNOWN_ERROR:
            pos.innerHTML = "Algum erro desconhecido aconteceu."
            break;
    }
}