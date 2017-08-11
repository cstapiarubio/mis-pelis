$(document).ready(function(){
	/*uso localstorage mail*/
	function loadSettings() {
		$('#contenedorEmail').append('<span id="emailPerfil">' + localStorage.email + '</span>');
	}

	function saveSettings() {
		localStorage.email = $('#email').val();
	}

	/* enlace de botón  a página account*/
	$('.account').click(function(){
		window.location.href="account.html";
	});

		$("#login").on( "click", function() {
			$('.ingreso').show(); 
		 });
		$("#entrar").on( "click", function() {
			$('.ingreso').hide();
		});
	});

/*$(document).ready(function(){
$("#login").click(function(){
  $('.ingreso').toggle(); 
});
}*

	/*$(".ingreso").hide();
	$("#login").click(function(event){
  		event.preventDefault();
		$(".ingreso").show();
	});
	$("#entrar").click(function(event){
  		event.preventDefault();
		$(".ingreso").hide();
	});
}

if ($('#precio2').is(':show'))
	$('#precio1').show();
	else
	$('#precio1').hide();*/