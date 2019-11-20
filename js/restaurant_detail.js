





function detailRestaurant(){

	var id_restaurant = localStorage.getItem("id_restaurant");

	var url = 'http://172.20.10.4:8000/api/restaurant/'+id_restaurant;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		var i=0;
		var name="";
		var description="";
		var photo="";
		var address="";
		var category="";
		var image="";
		var phone="";
		
		var latitude="";
		var longitude="";
		
		var row="";


	  if (this.status == 200 && this.readyState == 4) {
		
		  var restaurant = JSON.parse(this.responseText);
		 
			  name = restaurant.name ;
			  description = restaurant.description ;
			  address = restaurant.address ;
			  category = restaurant.category ;
			  
			  document.getElementById("photo1").innerHTML = ' <img src="'+restaurant.image.photo1+'" alt=""> '; 
			  document.getElementById("photo2").innerHTML = ' <img src="'+restaurant.image.photo2+'" alt=""> '; 
			  document.getElementById("photo3").innerHTML = ' <img src="'+restaurant.image.photo3+'" alt=""> '; 
			  var addressMap = "https://maps.google.com/maps?q="+restaurant.latitude+","+restaurant.longitude+"&z=15&output=embed" ;
			  
			  restaurant[i].ratings.forEach(function(item){
					
				  rating = rating + parseFloat(item.rating);
				 
			  });
			  
			  console.log("somme"+Math.round(rating));
			  console.log("length"+restaurant[i].ratings.length);
			  
			  var ratingAverage = Math.round(rating) / restaurant[i].ratings.length;
			  console.log("ratingAverage "+ratingAverage);
			  
			  if(!ratingAverage ){
				  ratingAverage = 5
			  }
			  
/*
			  restaurant.menu.forEach(function(item){
					
			  document.getElementById("menus").innerHTML = ' <figure> <img src="'+item.photo+'" alt=""> </figure>'; 
				 
			  });
			  */
			  
			 // document.getElementById("menus").innerHTML
			  
			  
			  //alert("jd: " + bill.missions[i].description);
			  // store item
			  localStorage.setItem("name", name);
			  localStorage.setItem("description", description );
			  localStorage.setItem("address", address );
			  localStorage.setItem("category", category);
			  
		  
		    document.getElementById("name").innerHTML = name;   
	        document.getElementById("description").innerHTML= description;
	        document.getElementById("address").innerHTML= address;
	        document.getElementById("category").innerHTML= category;
			  
			  
	   
	  }
	};
xhr.send();
}








function reserver() {
	
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


