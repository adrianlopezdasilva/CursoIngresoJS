function mostrar()
{
//tomo la edad  

	var edad;

	edad=document.getElementById('edad').value;

	if(edad>=18) {alert("Usted es mayor de edad.")}

	else{

	if(edad>=13 && edad<=17)	{alert("Usted es un adolescente.")}

	else {alert("Usted es un niño.")}	}

	/*if(edad<13){} else if(edad<18){} else




}//FIN DE LA FUNCIÓN