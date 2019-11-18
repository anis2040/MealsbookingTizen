/*
window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    
    restaurants();  test 
    
};
*/
function getRestaurantById(idrestaurant){
		
		localStorage.setItem('id_restaurant', idrestaurant);
		
	}


function restaurants(){
	
	var url = 'http://127.0.0.1:8000/api/restaurants';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		var i=0;
		var row="";
		 // var userid = localStorage.getItem("userid");

	  if (this.status == 200 ) {
		  
		  var restaurant = JSON.parse(this.responseText);
		  for (i = 0; i <restaurant.missions.length; i++) { 
			  
			
			  row = row+'  <section class="container">  <section class="box special" ><h3><a href="detailsmission.html" onclick="getidmission('+mission.missions[i].id+')"><p>'+mission.missions[i].title+'</p><p>'+mission.missions[i].description+'</p><p>'+mission.missions[i].date+'</p><p>'+mission.missions[i].total+'</p><h3></section></section>';  
			 
		  
		  }
		  
		document.getElementById("demo").innerHTML = row; 
	    console.log('response', this.response); // JSON response  
	  }
	};
xhr.send();
}



function detailRestaurant(){
	
	
	  var id_restaurant = localStorage.getItem("id_restaurant");

	
	var url = 'http://127.0.0.1:8000/api/restaurant/'+id_restaurant;
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
		  alert("aaa: " + this.responseText);
		  var restaurant = JSON.parse(this.responseText);
		  
		  for (i = 0; i <restaurant.missions.length; i++) { 
	
		
			  name = restaurant.missions[i].title ;
			  description = restaurant.missions[i].description ;
			  date = restaurant.missions[i].date ;
			  total = restaurant.missions[i].total ;
			  
			  //alert("jd: " + bill.missions[i].description);
			// store item
			  localStorage.setItem("missiontitle", title);
			  localStorage.setItem("missiondescription", description );
			  localStorage.setItem("missiondate", date );
			  localStorage.setItem("missiontotal", total);
			  
			  
		  }
			  document.getElementById("title").innerHTML = title;   
		      document.getElementById("description").innerHTML= description;
		        document.getElementById("date").innerHTML= date;
		        document.getElementById("total").innerHTML= total;
			  
			  
	   // console.log('response', this.response); // JSON response  
	  }
	};
xhr.send();
}


