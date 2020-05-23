function mensaje() {
  alert("hola");
}
function suma() {
  var a=prompt("Ingresar primer valor");
  var b=prompt("Ingresar segundo valor");
  var c=parseInt(a)+parseInt(b);
  var d=parseInt(a)-parseInt(b);
  alert("La suma de los numeros es: "+c+" y la resta es: "+d);
}
function mult() {
   var a=prompt("Ingresar numero");
  for(var i=a;i<=100;i++){
    if(i%a==0){
      document.write("-"+i);
    }
  }
}
function teclado() {
  var a=prompt("Ingresar un caracter");
  if (/^([0-9])*$/.test(a)) {
    alert("Numero ingresado");
  }else if (/^[A-Z]+$/i.test(a)) {
    alert("Alfabeto ingresado");
  }else{
    alert("Caracter ingresado");
  }
}
function cifra() {
  var a=prompt("ingresar numero");
  if (isNaN(a)) {
    alert("Ingresar solo datos numericos");
  }else{
    alert(a.toString().length);
  }
}
