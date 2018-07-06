
function mostrar()
{  
	/*Se ingresan 3 números. Informar en una sola alert la suma, el promedio, y la resta de los números tal cual como fueron ingresados*/

    var numeroUno;
    var numeroDos;
    var numeroTres;
    var suma;
    var promedio;
    var resta;


    numeroUno=prompt("Ingrese el primer número");
    numeroDos=prompt("Ingrese el segundo número");
    numeroTres=prompt("Ingrese el tercer número");

    numeroUno=parseint(numeroUno);
    numeroDos=parseint(numeroDos);
    numeroTres=parseint(numeroTres);
    

    suma=numeroUno+numeroDos+numeroTres;
    promedio=(numeroUno+numeroDos+numeroTres)%3;
    resta=numeroUno-numeroDos-numeroTres;

    alert("El total de la suma es"+suma+ "el promedio es"+ promedio+ "y la resta es "resta);


}
