$(document).ready(function(){
	loadSettings();
	/*uso localstorage*/
	function loadSettings() {
		$('#contenedor').append('<span id="user">' + localStorage.username + '</span>' + '<span id="name">' + localStorage.name + '</span>' + '<span id="pais">' + localStorage.country + '</span>');
	}

	function saveSettings() {
		localStorage.name = $('#first_name').val();
		localStorage.username = $('#username').val();
		localStorage.country = $('#country').val();
	}

	/* validación de inputs*/
	$('.crearCuenta').click(function() {
  if ($('.validar').val().length == 0 || $('.validar').val().length ===""){
        alert('El campo esta vacío');
        return false;
    }

    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Se utiliza la funcion test() nativa de JavaScript
    if (!regex.test($('#email').val().trim())){
    	alert('Correo inválido');
    }

    else{
    	window.location.href="movies.html";
    	//llamado a fx localstorage
    	saveSettings();
    }

  });

	/* enlace de botón  a página account*/
	$('.account').click(function(){
		window.location.href="account.html";
	});

	/* enlace de botón  a página movies*/
	$('.crearCuenta').click(function(){
		window.location.href="movies.html";
	});

		$("#login").on( "click", function() {
			$('.ingreso').show(); 
		 });
		$("#entrar").on( "click", function() {
			$('.ingreso').hide();
		});
	});

