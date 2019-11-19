
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