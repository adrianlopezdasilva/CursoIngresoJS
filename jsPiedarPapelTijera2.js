var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina=Math.floor(Math.random(1*2))+1;

	piedra=1;
	papel=2;
	tijera=3;

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==piedra){

		ContadorDeEmpates=1;
		alert("Empate");

	} else if(eleccionMaquina==3){

		ContadorDeGanadas=ContadorDeGanadas+1
		alert("Ganó");

	} else{
		ContadorDePerdidas=ContadorDePerdidas+1
		alert("Perdió");
	}

     mostrarResultado(){
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
	}

	mostrarResultado=();

}//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}

/*
contador += 1
contador ++
++contador
contador=contador+1

Acum= acum + var2

bandera=true
if(bandera){
	bandera=false
}