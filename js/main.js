$(document).ready(function(){
   $(".button-collapse").sideNav(); 
   $('select').material_select();
  
    
    	$("#iniciar").click(function (e){
    		e.preventDefault();
    		
    		localStorage.email = $(".email").val();
            var password = $(".input-password").val();
        	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(localStorage.email))){
            	alert("Ingrese su email correctamente");
        	} else if((password == "")|| (password.length < 8)|| (password.length > 8 )){
            	alert("Ingresa su contraseña correctamente recuerde debe contener 8 números")
        	}else{
            	window.location.href = "menu.html";
        		}
          	 
         });
 
    })





      