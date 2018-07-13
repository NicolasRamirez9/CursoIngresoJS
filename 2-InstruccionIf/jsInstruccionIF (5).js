function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

if (edad >= 13 && edad <= 17) //tomo la edad  
{
    alert("La persona registrada es un adolescente.");
}
 
else
{
 alert("La persona registrada no es un adolescente.");
}



}//FIN DE LA FUNCIÓN