function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while (numero<0 || numero>9)
	{
		numero = prompt("Ingrese un numero valido.");

	}

	alert("Bien hecho.");

}//FIN DE LA FUNCIÓN