function mostrar()
{
	var numRandom;

	numRandom = Math.floor(Math.random()*(11-1))+1;

if (numRandom == 9 || numRandom == 10)
{
	alert(numRandom + ", EXCELENTE.");
}

else if (numRandom > 4)
{
	alert(numRandom + ", APROBO.");
}

else if (numRandom < 4)
{
	alert(numRandom + ", vamos, la proxima se puede.");
}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN