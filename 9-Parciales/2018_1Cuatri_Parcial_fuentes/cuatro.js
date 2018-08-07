function mostrar()
{
    var num1 = prompt("Ingrese numero: ");

    var num2 = prompt("Ingrese otro numero: ");

    var suma;

    var resta;


    if (num1 == num2){
        
        alert(num1 + num2);

    }if (num1 > num2){
        
        resta = (parseInt(num1) - parseInt(num2));

        alert(resta);
    
    }else {
        
        suma = (parseInt(num1) + parseInt(num2));
        
        alert(suma);
    
    }if (suma > 10){  

        alert("La suma es " + suma + " y supero el 10.");
    }
    }
