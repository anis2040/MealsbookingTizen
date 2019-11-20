
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
			  
			  
			  
			  
			  row +='<div class="swiper-slide"> <figure><img src="'+image+'" alt=""></figure> <div class="block-slide"> <div class="card card-data-item"> <div class="card-body"> <div class="media"> <a href="restaurant.html" onclick="getRestaurantById('+restaurant[i].id+')" class="media-body"> <p>'+restaurant[i].name+'</p> <h5>'+restaurant[i].category+' </h5> <p>'+restaurant[i].address+'</p> </a> <div class="w-auto h-100"> </div> </div> </div> <div class="card-footer pt-0"> <div class="row"> <div class="col-auto"> <i class="material-icons text-warning">star</i> <span class="post-seconds">'+Math.round(ratingAverage)+' <span>('+Math.round(ratingAverage)+')</span></span> </div> <div class="col px-0">  <span class="post-seconds">'+restaurant[i].priceMin+'<span>$</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMax+'<span>$$</span></span> </div> </div> </div> </div> </div> </div> ';

		  }
		  
	  document.getElementById("resto").innerHTML = row;  
	    console.log('html', row); // JSON response  
	  }
	};
xhr.send();
}


function saveCategoryToLS(category){
	
localStorage.setItem('category', category);

}

function topTen(){
	
	var url = 'http://127.0.0.1:8000/api/topten';
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

			    row = row + '<div class="card "> <div class="card-body"> <div class="media"> <a href="restaurant.html" onclick="getRestaurantById('+restaurant[i].id+')" class="square-40 mr-3"><img src="'+restaurant[i].photo+'" alt=""></a> <a href="restaurant.html" onclick="getRestaurantById('+restaurant[i].id+')" class="media-body"> <h5>'+restaurant[i].name+'</h5> <p>'+restaurant[i].category+'</p> <p>'+restaurant[i].address+'</p></a> <a href="#" onclick="#" class="like-heart color-red"> <i class="icon material-icons">favorite</i> </a> </div> </div>       <div class="card-footer pt-0"> <div class="row"> <div class="col-auto"> <i class="material-icons text-warning">star</i> <span class="post-seconds"> '+Math.round(ratingAverage)+' <span>('+restaurant[i].ratings.length+')</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMin+' <span>$</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMax+' <span>$$</span></span> </div> </div> </div></div>';  		
			  
		  }
		  
		document.getElementById("topten").innerHTML = row; 
	   
	  }
	};
xhr.send();
}

function addToFavorite(restaurant) {
	alert(restaurant);
	localStorage.setItem('restaurant', restaurant);
}


