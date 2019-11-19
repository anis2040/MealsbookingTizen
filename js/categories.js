
//window.onload = function() {
//    // TODO:: Do your initialization job
//    // add eventListener for tizenhwkey
//    document.addEventListener('tizenhwkey', function(e) {
//        if (e.keyName === "back") {
//            try {
//                tizen.application.getCurrentApplication().exit();
//            } catch (ignore) {}
//        }
//    });
//    // add eventListener for tizenhwkey    
//    restaurantPerCategory();
//    
//};


function restaurantPerCategory(){
	var category = localStorage.getItem('category');
	var url = 'http://172.20.10.4:8000/api/restaurant-category/'+category;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
		var i=0;
		var row="";
		 // var userid = localStorage.getItem("userid");
		
	  if (this.status == 200 ) {
		  
		  var restaurant = JSON.parse(this.responseText);
		  for (i = 0; i <restaurant.length; i++) {
			  row = row + '<div class="card "> <div class="card-body"> <div class="media"> <a href="#" class="square-40 mr-3"><img src="'+restaurant[i].photo+'" alt=""></a> <a href="#" class="media-body"> <h5>'+restaurant[i].name+'</h5> <p>'+restaurant[i].category+'</p> </a> <a class="like-heart color-red"> <i class="icon material-icons">favorite</i> </a> </div> </div> <div class="card-footer pt-0"> <div class="row"> <div class="col-auto"> <i class="material-icons text-warning">star</i> <span class="post-seconds">4.9 <span>(254)</span></span> </div> <div class="col"> <i class="material-icons text-grey">schedule</i> <span class="post-seconds">20 <span>min</span></span> </div> <div class="col"> <i class="material-icons text-grey">monetization_on</i> <span class="post-seconds">'+restaurant[i].priceMin+' <span>$</span></span> </div> </div> </div> </div>'
		  }
		  
	  //document.getElementById("resto").innerHTML = row;  
	    console.log('lols', restaurant); // JSON response 
		document.getElementById("resto").innerHTML = row;  
		document.getElementById("title").innerHTML = category;  

	    
	  }
	};
xhr.send();
}


