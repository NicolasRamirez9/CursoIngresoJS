/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;

    var ancho;

    var perimetro;

    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);

    perimetro = ((largo * 2) + (ancho * 2)) * 3;

    alert("Se deben comprar " + alambre + " alambres.")

}
function Circulo () 
{
    var radio;

    var perimetro;

    radio = parseInt(document.getElementById("Radio").value);

    perimetro = (((radio) * (2 * 3.14)) * 3).toFixed(0);

    alert("Se debe comprar " + perimetro + " alambres.");

	

}
function Materiales () 
{
    var largo;

    var ancho;

    var superficie;

    var cemento;

    var cal;

    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);

    superficie = largo * ancho;

    cemento = superficie * 2;

    cal = superficie * 3;

    alert("Se necesitaran " + cemento + " bolsas de cemento " + " y " + cal + " bolsas de cal.");





    
	
}