function mostrar()
{
    var planeta = prompt("Ingrese planeta: ");

    switch(planeta){

        case "tierra":

            alert("Aca vivimos.");
            break;

        case "mercurio":

        case "venus":

        alert("Aca hace mas calor.");
        break;

        case "marte":

        case "jupiter":
        
        case "saturno":

        case "urano":

        case "neptuno":

        alert("Aca hace mas frio.");
        break;

        default:

        alert("Ingrese un planeta valido.");

    }

}
