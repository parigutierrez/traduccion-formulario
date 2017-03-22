var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');

function translate(){
  var title = document.getElementById('form-signin-heading');
  var remember= document.getElementsByTagName('span')[0];
  var button = document.getElementsByClassName('btn')[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}

translate();


function agregar(){
  var formulario= document.getElementById("formularioLleno");
  var imprimirDatos= document.getElementById("imprimirDatos");
  formulario.innerHTML = "Datos formulario";
  imprimirDatos.innerHTML = "El correo ingresado es: <br>" + email.value + "<br>" + "La clave ingresada es: <br>" + password.value;
}
