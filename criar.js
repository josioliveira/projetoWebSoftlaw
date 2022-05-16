function salvar() {
    var storage = window.localStorage;
    var audiencias = JSON.parse(storage.getItem("audiencias"));

    if (!audiencias) {
        audiencias = [];
    }

    var audienciaObj = {
        numero_processo: document.getElementById("numero_processo").value,
        data_audiencia: document.getElementById("data_audiencia").value,
        horario_audiencia: document.getElementById("horario_audiencia").value,
        advogado: document.getElementById("advogado").value,
        forum_audiencia: document.getElementById("forum_audiencia").value,
        endereco_forum: document.getElementById("endereco_forum").value,
    }

    if (!audienciaObj.numero_processo || !audienciaObj.data_audiencia || !audienciaObj.horario_audiencia) {
        alert("Necessário preencher todos os campos obrigatórios");
        return;
    }

    audiencias.push(audienciaObj);

    storage.setItem("audiencias", JSON.stringify(audiencias));

    document.location.href = "audiencias.html";
}