function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño){

	case"Enero":
	case"Febrero":
	case"Marzo":
	case"Abril":
	case"Mayo":
	case"Julio":
	 alert("Falta para el invierno.");
	 break;

	default:
	 alert("Ya pasamos el frio, ahora calor!!!.");
}



}//FIN DE LA FUNCIÓN