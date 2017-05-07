var main = function(){
  $('img').on('click', function(){
    $('ul.dropdown-menu').toggle();
    alert("menu dropped");
  });
  

  $('form').submit(function() {
    var email = $('#email').val();
  
    if(email === "") {
    	$('p.email-error').text("Please enter your email.");
     
    }
     
    var pwd = $('#password').val();
    if (pwd === "") {
    	$('p.password-error').text("Please enter your password.");
   
    }
    return false;
  });

   
};

$(document).ready(main);