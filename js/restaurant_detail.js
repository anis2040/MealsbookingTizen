
function detailRestaurant(){
	
	
	var id_restaurant = localStorage.getItem("id_restaurant");

	alert("sasasasasa");
	
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


	  if (this.status == 200 && this.readyState == 4) {
		
		  var restaurant = JSON.parse(this.responseText);
		  console.log(restaurant);
		  console.log(restaurant.name);
		  
	
			  name = restaurant.name ;
			  description = restaurant.description ;
			  address = restaurant.address ;
			  category = restaurant.category ;
			  
			  
			  
			  //alert("jd: " + bill.missions[i].description);
			  // store item
			  localStorage.setItem("name", name);
			  localStorage.setItem("description", description );
			  localStorage.setItem("address", address );
			  localStorage.setItem("category", category);
			  
			  console.log("name "+name);
			  console.log("description"+description);
			  console.log("address"+address);
			  console.log("category"+category);
			  
			  
		  
		    document.getElementById("name").innerHTML = name;   
	        document.getElementById("description").innerHTML= description;
	        document.getElementById("address").innerHTML= address;
	        document.getElementById("category").innerHTML= category;
			  
			  
	   
	  }
	};
xhr.send();
}