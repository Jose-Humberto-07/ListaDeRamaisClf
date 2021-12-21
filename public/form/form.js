const validation = () => {
    // pegando o valor do nome pelos names
  var username = document.getElementById("user");
  var password = document.getElementById("password");

  if (user.value == "admin" && password.value == "admin") {

    return;
  }

 
  if (user.value == "") {
      alert("Nome não informado");

      user.focus();

      return;
  }

  if (password.value == "") {
    alert("Senha não informada");

    return;

  }

  if (password.value != "admin" || user.value != "admin") {
    alert("Desculpe, você não é administrador");

    return;

  }


}