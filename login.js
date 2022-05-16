function login(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "admin"){
        document.location.href = "audiencias.html";

    }else {
        alert ("Usuário ou senha inválidos")
    }
    

}