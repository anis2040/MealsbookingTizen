function listRestaurants(){
	var url = 'http://127.0.0.1:8000/api/restaurants';
	var xhr = new XMLHttpRequest();	
	xhr.open('GET', url, true);
	xhr.onload = function() {
		var i=0;
		var row="";
	  if (this.status == 200 && this.readyState == 4) {
		  var boutiques = JSON.parse(this.responseText);
//		  for (i = 0; i <boutiques.boutique.length; i++) { 
//			row = row+'  <tr><td class="cart_product_img"><a href="#"><img src="http://192.168.79.1/fazet/boutiqueuploads/'+boutiques.boutique[i].nomboutique+'.jpg" alt="Product"></a></td><td class="cart_product_desc"><h5>'+boutiques.boutique[i].nomboutique+'</h5></td><td class="price"><span>'+boutiques.boutique[i].numtel+'</span></td><td><a href="Mesproduits.html" onclick="getidbout('+boutiques.boutique[i].idboutique+');"><h7>Voir details</h7></a></td></tr>';
//          }
		document.getElementById("demomesboutique").innerHTML = row;  
	    console.log('response', this.response); // JSON response  
	  }
	};
	xhr.send();
}
