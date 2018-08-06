function mostrar()
{
    var preciofinal;

    var precio = prompt("Ingresar precio: ");

    var descuento = prompt("Ingresar descuento: ");

    preciofinal = precio * (descuento / 100);

    document.getElementById("elPrecioFinal").value = preciofinal

}
