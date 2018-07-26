
function mostrar()
{
	var ancho;
	var largo;
	var perímetro

	ancho=prompt("Ingrese el ancho del rectángulo");
	largo=prompt("Ingrese el ancho del rectángulo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perímetro=(largo+ancho)*2;

	alert("El perímetro es"+ perímetro);
}
