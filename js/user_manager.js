
  function login() {

	  
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	        	
	// store item
	  localStorage.setItem("userid", 1);
	  localStorage.setItem("username", "Chakib" );
	  localStorage.setItem("email", "chakib.fathalah@esprit.tn" );

	// retrieve item
	  var userid = localStorage.getItem("userid");
	  var username = localStorage.getItem("username");
	  var email = localStorage.getItem("email");

     //	alert(gender);
	  if (username == "" || password == "") {
		alert("Username or password is empty");
	  }
	  else {
		  window.location.href='home.html';  
	  }
    	
	
  
  };



	
	
	function signup() {
		
	   var username = document.getElementById("username").value;
	   var email = document.getElementById("email").value;
	   var password = document.getElementById("password").value;
	
       var http = new XMLHttpRequest();
		var url = 'http://127.0.0.1:8000/api/register';
		
		var params = "username="+username+"&email="+email+"&password="+password;
		http.open('POST', url, true);

		//Send the proper header information along with the request
		http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		http.onreadystatechange = function() {//Call a function when the state changes.
		    if(http.readyState == 4 && http.status == 200) {
		        
		        if(http.responseText.toString() != '{"error":true,"message":"User already registered"}')
				{
		       // 	alert("Register successfull");
		        	window.location.href='home.html';
				}
		        else{
		        	
		        	alert("Register unsuccessfull");
		        	window.location.href='index.html';

		        }
		    }
		}
		http.send(params);
		
  } ; 
  
  
 
  function isLogged ()
  {
	  var use = localStorage.getItem("userid");

	   // 	alert(use);

	  
	  if ( use != NULL )
		  {
      	window.location.href='home.html';

		  }
	  
	  else 
		  {
		  
	      	window.location.href='index.html';


		  }
	  
  }
  
  function logout ()
  
  { 
	  
	  localStorage.clear();
      	alert("Log Out Successful");

   	window.location.href='index.html';

  }
  
  

  function onloadupdateprofil(){
  	
  	
  	var name = localStorage.getItem("name");
  	var email = localStorage.getItem("email");

  	document.getElementById("name").value = name ;
  	document.getElementById("email").value = email ;
  	
  	  
  	
  	
  }

  
 function   updateprofil()
  
  { 
	  
	  var id = localStorage.getItem("userid");
	 
	   var name = document.getElementById("name").value;
	   var email = document.getElementById("email").value;
	  

	   var http = new XMLHttpRequest();
		var url = 'http://172.16.211.253/sema_tizen/Api.php?apicall=updateuser';
		
		var params = "name="+name+"&email="+email+"&gender="+gender+"&id="+id;
		http.open('POST', url, true);

		//Send the proper header information along with the request
		http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		http.onreadystatechange = function() {//Call a function when the state changes.
		    if(http.readyState == 4 && http.status == 200) {
		        
		        if(http.responseText.toString() == '{"error":true,"message":"Some error occurred please try again"}')
				{
		      //  alert("Update unsuccessfull");
		        	window.location.href='updateprofil.html';
				}
		        else{
		        	
		        	// store item
		  		  localStorage.setItem("name", name );
		  		  localStorage.setItem("email", email );
		  		  
		  		  if (gender == 1){
		  			  localStorage.setItem("gender", "male" );

		  		  }
		  		  else {
		  			  localStorage.setItem("gender", "female" );

		  		}
		  		
		  		  

		      //	alert(" unsuccessfull");
		        	window.location.href='profil.html';

		        }
		    }
		}
		http.send(params);
		
		

  }
  
 
   
  
 