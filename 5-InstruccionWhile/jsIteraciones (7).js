function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
	var respuesta='si';

	while (respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese numero: "));
		contador++;
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar?: ");
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN