function Mostrar()
{

	var contador=0;
	var contadorCeros=0;
	var contadorPares=0;
	//declarar contadores y variables 
	var numero;
	var acumuladorNegativos;
	var acumuladorPositivos;


	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt();
		numero=parseInt(numero);

		    while(isNaN(numero)){

		    	numero=prompt();
		    	numero=parseInt(numero);
		    

    if(numero<0){

    	acumulador+=numero;
    	contadorPositivos++;

    	numero=prompt()    	
    }


   


		    }

		    



	}
}//FIN DE LA FUNCIÓN


/*If(numero%2==0){

contadorPares++;
}

if(contadorPositivos>contadorNegativos) 

acumulador+=numero; == acumulador=acumulador+numero;

*/