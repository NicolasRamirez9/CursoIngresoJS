/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;

    var precio2;

    var precio3;

    var total;
	
    precio1 = parseInt(document.getElementById("PrecioUno").value);

    precio2 = parseInt(document.getElementById("PrecioDos").value);

    precio3 = parseInt(document.getElementById("PrecioTres").value);

    total = precio1 + precio2 + precio3;

    alert("El total de los productos sumados es de $" + total);


}
function Promedio () 
{
  var precio1;

    var precio2;

    var precio3;

    var total;
	
    precio1 = parseInt(document.getElementById("PrecioUno").value);

    precio2 = parseInt(document.getElementById("PrecioDos").value);

    precio3 = parseInt(document.getElementById("PrecioTres").value);

    total = (precio1 + precio2 + precio3) / 3;

    alert("El promedio de los productos sumados es de $" + total);   
	
}
function PrecioFinal () 
{
    var precio1;

    var precio2;

    var precio3;

    var iva;

    var total;
	
    precio1 = parseInt(document.getElementById("PrecioUno").value);

    precio2 = parseInt(document.getElementById("PrecioDos").value);

    precio3 = parseInt(document.getElementById("PrecioTres").value);

    iva = (precio1 + precio2 + precio3) * (21 /100);

    total = precio1 + precio2 + precio3 + iva;

    alert("El precio final de los productos mas el IVA es de $" + total);
	
}