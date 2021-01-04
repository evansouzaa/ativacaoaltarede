
function cap() {
    var cname = document.getElementById('nome').value;
    var csn = document.getElementById('sn').value;
    var cest = document.getElementById('est').value;
    var carea = document.getElementById('area').value;
    var ccto = document.getElementById('cto').value;
    var cporta = document.getElementById('porta').value;
    var cdescricao = document.getElementById('descricao').value;
    //var cmudanca = document.getElementById('mudanca').value;
    var clatlong = document.getElementById('latlong').innerText;

    var texto = (`⚠️ *Solicitação de ativação* ⚠️
Nome: ${cname.toUpperCase()}
SN: ${csn.toUpperCase()}
Estação: ${cest}
Area: ${carea}
CTO: ${ccto}
Porta: ${cporta}
Cordenadas: ${clatlong}
Obs: ${cdescricao}`);


    getConfirmation();
    function getConfirmation() {
        var retVal = confirm(texto);
        if (retVal == true) {
            texto = window.encodeURIComponent(texto);
            window.location.href = `https://wa.me/?text=${texto}`; //ENVIA WHATSAPP
            return true;
        } else {
            return false;
        }

    }
};