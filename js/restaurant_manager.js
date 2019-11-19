
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

    // add eventListener for tizenhwkey    
    restaurants(); 
    
    topTen();   
    
};

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
		  for (i = 0; i <restaurant.length; i++) {
			  var image = restaurant[i].photo;
			  row +='<div class="swiper-slide"> <figure><img src="'+image+'" alt=""></figure> <div class="block-slide"> <div class="card card-data-item"> <div class="card-body"> <div class="media"> <a href="#" class="media-body"> <p>'+restaurant[i].name+'</p> <h5>'+restaurant[i].category+' </h5> <p>'+restaurant[i].address+'</p> </a> <div class="w-auto h-100"> <a class="like-heart color-red"> <i class="icon material-icons">favorite</i> </a> </div> </div> </div> <div class="card-footer pt-0"> <div class="row"> <div class="col-auto"> <i class="material-icons text-warning">star</i> <span class="post-seconds">4.9 <span>(254)</span></span> </div> <div class="col px-0"> <i class="material-icons text-grey">schedule</i> <span class="post-seconds">20 <span>min</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMin+'<span>$</span></span> </div> </div> </div> </div> </div> </div> ';

		  }
		  
	  document.getElementById("resto").innerHTML = row;  
	    console.log('html', row); // JSON response  
	  }
	};
xhr.send();
}


function restaurantPerCategory(category){
	
	var url = 'http://127.0.0.1:8000/api/restaurant-category/'+category;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
		var i=0;
		var row="";
		 // var userid = localStorage.getItem("userid");
		
	  if (this.status == 200 ) {
		  
		  var restaurant = JSON.parse(this.responseText);
//		  for (i = 0; i <restaurant.length; i++) {
//
//		  }
		  
	  //document.getElementById("resto").innerHTML = row;  
	    console.log('lols', restaurant); // JSON response  
	    window.location.href = "categories.html";
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
			  
			  
	   
	  }
	};
xhr.send();
}

function topTen(){
	
	var url = 'http://172.20.10.4:8000/api/topten';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
		var i=0;
		var row="";
		 // var userid = localStorage.getItem("userid");
		
	  if (this.status == 200 ) {
		  
		   var restaurant = JSON.parse(this.responseText);
		   // console.log(restaurant[1].name); // JSON response
		  
		  for (i = 0; i <restaurant.length; i++) 
		  { 
			  var rating = 0;
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

			    row = row + '<div class="card "> <div class="card-body"> <div class="media"> <a href="#" class="square-40 mr-3"><img src="'+restaurant[i].photo+'" alt=""></a> <a href="#" class="media-body"> <h5>'+restaurant[i].name+'</h5> <p>'+restaurant[i].category+'</p> <p>'+restaurant[i].address+'</p></a> <a class="like-heart color-red"> <i class="icon material-icons">favorite</i> </a> </div> </div>       <div class="card-footer pt-0"> <div class="row"> <div class="col-auto"> <i class="material-icons text-warning">star</i> <span class="post-seconds"> '+Math.round(ratingAverage)+' <span>('+restaurant[i].ratings.length+')</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMin+' <span>$</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMax+' <span>$$</span></span> </div> </div> </div></div>';  		
			  
		  }
		  
		document.getElementById("topten").innerHTML = row; 
	   
	  }
	};
xhr.send();
}

