function mostrar()
{
    var edad;

    var estadocivil;

    edad = parseInt(document.getElementById("edad").value);

    estadocivil = document.getElementById("estadoCivil").value;

if (edad >= 18 && estadocivil == "Soltero") //tomo la edad
{
    alert("Es soltero y no es menor.");
}
else (edad < 18 && estadocivil != "Soltero")
{

}
 

	


}//FIN DE LA FUNCIÓN