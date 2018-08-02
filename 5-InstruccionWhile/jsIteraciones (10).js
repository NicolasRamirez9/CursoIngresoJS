function mostrar()
{

	var contadorN=0;
	var contadorP=0;
	var contador0=0;
	var contadorPosi=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var negativos;
	var positivos;
	var promedioPosi;
	var promedioNeg;
	var dif;

	while(respuesta!="no")
	{
		numero = prompt("Ingrese numero: ");

		numero = parseInt(numero);
		
		respuesta = prompt("Desea seguir?");

		if ( numero < 0){

			negativos = negativos + numero;

			contadorN ++;

	} if ( numero > 0){

		positivos = positivos + numero;

		contadorP ++;

	} if (contador==0){

		contador0 ++;

	} if (numero % 2 == 0 && numero != 0){
		contadorPosi ++;

	} promedioPosi = positivos / contadorP;
	
	promedioNeg = negativos / contadorN;
	
	dif = positivos - negativos;

	}

	Document.write ("Suma de negativos: " + negativos + "<br>" + "Suma de positivos: " + positivos + "<br>" + "Cantidad de positivos: " + contadorP + "<br>" + "Cantidad de negativos: " + contadorN + "<br>" + "Cantidad de 0: " + contador0 + "<br>" + contadorPosi + "<br>" + "Promedio de negativos: " + promedioNeg + "<br>" + "Promedio de positivos: " + promedioPosi + "<br>" + "Diferencia entre positivos y negativos: " + dif)









}//FIN DE LA FUNCIÓN