function saveRatingToLS(rating){
localStorage.setItem('rating', rating);
}

function saveReview() {
	
	   var badWords = ['shit','zah','bad'];
	   var userId = 1;
	   var restaurantId = localStorage.getItem("id_restaurant");
	   var review = document.getElementById("review").value;
	   var rating = localStorage.getItem("rating");
	   
	   var verify = localStorage.getItem("verify");
	   console.log("verify",verify);
	   console.log("if",verify == userId+restaurantId);
	   for (i = 0; i <badWords.length; i++) {
		   if (review.includes(badWords[i]) ){
			   alert("you can't put bad words");
			   return; 
		   }
	   }
	   if (verify == userId+restaurantId) {
		   alert("you can't review this restaurant more thank once");
		   return;
	   }
	   else {
		    var http = new XMLHttpRequest();
			var url = 'http://127.0.0.1:8000/api/rating';
			
			var params = "user_id="+userId+"&restaurant_id="+restaurantId+"&review="+review+"&rating="+rating;
			http.open('POST', url, true);

			//Send the proper header information along with the request
			http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			

			http.onreadystatechange = function() {//Call a function when the state changes.
			    if(http.readyState == 4 && http.status == 200) {
			   
			    }
			}
			 var storage = localStorage.setItem('verify', userId+restaurantId);
		    console.log("storage",storage);
			http.send(params);
			location.reload();  
			
	   }
	
} ; 


 

function ratings(){
	var id_restaurant = localStorage.getItem("id_restaurant");

	var url = 'http://127.0.0.1:8000/api/rating/'+id_restaurant;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
		var i=0;
		var row = "";
	  if (this.status == 200 ) {
		  
		  var rating = JSON.parse(this.responseText);
		  for (i = 0; i <rating.length; i++) {
			  row += ' <li class="list-group-item"> <a href="#" class="media"> <div class="w-auto h-100 mr-3"> <figure class="square-60"><img src="'+rating[i].user.avatar+'" alt=""></figure> </div> <div class="media-body"> <h5>'+rating[i].user.name+'</h5> <p>'+rating[i].rating+'</p> <p><span>'+rating[i].review+'</span></p> </div> </a> </li>'
		  }
		  
	  //document.getElementById("resto").innerHTML = row;  
		document.getElementById("rating").innerHTML = row;  

	    
	  }
	};
xhr.send();
}
