function reservations(){
	
	var url = 'http://127.0.0.1:8000/api/reservations';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
		var i=0;
		var row="";
		 // var userid = localStorage.getItem("userid");
		
	  if (this.status == 200 ) {
		  
		  var restaurant = JSON.parse(this.responseText);
		  for (i = 0; i <restaurant.length; i++) {
			  row += '<li class="list-group-item"> <a href="#" class="media"> <div class="w-auto h-100 mr-3"> <figure class="square-60"><img src="'+restaurant[i].restaurant.photo+'" alt=""></figure> </div> <div class="media-body"> <p>'+restaurant[i].restaurant.name+'</p> <h5>'+restaurant[i].time+'</h5> <p><span>'+restaurant[i].restaurant.address+'</span></p> </div> <button class="like-heart color-red"> <i class="icon material-icons">delete</i> </button> </a> </li>';
		  }
		  
	  //document.getElementById("resto").innerHTML = row;  
	    console.log('lols', restaurant); // JSON response 
		document.getElementById("reservation").innerHTML = row;  

	    
	  }
	};
xhr.send();
}
