// JavaScript Document
/*
Primero que todo declaramos las funciones y eventos de simple funcionamiento
del sitio web, como por ejemplo los clics para mostrar menu y el efecto de onload
*/	

	//Declaración de la funcción onLoad.
	function pageload() {
		document.getElementById("caja_sitio").style.display = "block";	
		document.getElementById("caja_sitio").style.animation = "entradacaja 1.5s linear";
	}
	
	//Declaramos el evento de click para mostrar y ocultar el menu		
	var uno = document.getElementById("mostrar_menu");
	    dos = document.getElementById("menu_comandos");
		ordentexto = document.getElementById("vermenu");
	    y = true;	
	uno.onclick = function() {
		if(y){ 
			dos.style.display = "flex";
			dos.style.animation = "entradacaja 1.5s linear";
			dos.style.marginTop ="0";
			y = !y;
			document.getElementById("vermenu").innerHTML = "Ocultar";
		} else {
			dos.style.marginTop = "-80%";
			dos.style.animation = "salidacaja 1s linear";
			y = !y;
			document.getElementById("vermenu").innerHTML = "Mostrar";			
		}
	}

/*
Declaramos el JSON Estudiantes para nuestra tabla
*/
var estudiantes = [
	{"codigo":"001", "nombre":"Sebastian", "nota1":4.6},
	{"codigo":"002", "nombre":"Yayita", "nota1":4.5},
	{"codigo":"003", "nombre":"Daniela", "nota1":4.5},
	{"codigo":"004", "nombre":"Sara", "nota1":3.9},
	{"codigo":"005", "nombre":"Juliana", "nota1":4.8},
	{"codigo":"006", "nombre":"Vanessa", "nota1":3.7},
	{"codigo":"007", "nombre":"Daniel", "nota1":4.8},
	{"codigo":"008", "nombre":"Sebas", "nota1":4.0},
	{"codigo":"009", "nombre":"Isamar", "nota1":4.5},
	{"codigo":"010", "nombre":"Esmeralda", "nota1":4.5}
]

//Declaramos la función para mostrar el JSON estudiantes
	function mostrar_Lista(json) {
		var i;
			imprLista = "";
		for (i = 0; i < json.length; i++) {
			imprLista += "<tr>"+"<td>"+json[i].codigo+"</td>"+"<td>"+json[i].nombre+"</td>"+"<td>"+json[i].nota1+"</td>"+"</tr>";	
			document.getElementById("content_mlest").innerHTML = imprLista;
		}
			
	}

//Declaramos la función para mostrar el promedio de las personas
	function mostrar_promedio(json) {
		var e;
			suma = 0;
			
		for (e = 0; e < json.length; e++) {
			suma += json[e].nota1;
			promedio = suma/10;
			document.getElementById("elpromedio").innerHTML = promedio.toFixed(1);
			
		}			
	}

//Declaramos la función para hallar al mejor estudiante y felicitarlo
	function elmejor(json) {		
		mejornota = 0;
		index = 0;	
		
		for (var c = 0; c < json.length; c++) { 
			if (mejornota < json[c].nota1) {
				mejornota = json[c].nota1;
				
				index=c;
				
			}
			document.getElementById("nombre_mejor").innerHTML = json[index].nombre+" que logro una nota de "+mejornota;
			document.getElementById("elmejorestudiante").style.display = "block";			
			document.getElementById("masesfuerzo").style.display = "none";
			
		}
	}

//Declaramos la función para hallar al que necesita de más esfuerzo.
	function masesfuerzo(json) {		
		peornota = json[0].nota1;
		elpeorest = 0;	
		
		for (var b = 0; b < json.length; b++) { 
			if (peornota > json[b].nota1) {
				peornota = json[b].nota1;
				
				elpeorest=b;
				
			}
			document.getElementById("nombre_malo").innerHTML = json[elpeorest].nombre;
			document.getElementById("elmejorestudiante").style.display = "none";
			document.getElementById("masesfuerzo").style.display = "block";			
		}
	
	}




