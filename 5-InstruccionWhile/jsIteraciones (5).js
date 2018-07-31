function mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

while( sexo != "f" || sexo != "m")
{
    sexo = prompt("Ingrese sexo valido: ");
}

}//FIN DE LA FUNCIÓN