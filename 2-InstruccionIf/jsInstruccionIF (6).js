function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

if (edad >= 18) //tomo la edad  
{
    alert("La persona registrada es mayor de edad.");
}
else if (edad >= 13 && edad <= 17)
{
    alert("La persona registrada es un adolescente.");
}
else if (edad < 13)
{
 alert("La persona registrada es un niño.");
}
else
{

}


}//FIN DE LA FUNCIÓN