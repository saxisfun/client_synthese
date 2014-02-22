//Section pour l'affichage et le téléchargement du dictionnaire


function ClasseListViewDictionnaire(myName) {
	alert(myName);
	this.myListViewDictName = myName;
	this.myListViewDictArray = [];
}





ClasseListViewDictionnaire.prototype.xxx = function(le_url) {
	alert("ClasseListViewDictionnaire.prototype.xxx le_url: "+le_url);
	
	var x = ddXMLHttpDictionnaire(le_url);

	
/*		
	localString = JSON.parse(x);
    alert("ClasseListViewDictionnaire...localString.result.length: " +localString.result.length);
	
	for(var i=0;i<localString.result.length;i++) {
	var obj = localString.result[i];
    }
*/
	
}




ClasseListViewDictionnaire.prototype.fillDictListView = function(){

alert("classe pour Dictionnaire");
alert(this.myListViewDictArray.length);




//alert("fillObservsListView");

//for (var i=0; i < this.myListViewDictArray.length; i++){
//	var theObject = this.myListViewDictArray[i];
	
	
	//ici ici ici
	
	//this.addFichiersListViewCell(localString.result[i].id, localString.result[i].filename, localString.result[i].url, localString.result[i].description, localString.result[i].registered)

	
//	this.addListViewObservCell(theObject.strObservTitre, theObject.strObservResume, theObject.strObservDiskName, theObject.dataURLPicture, i);
	
	//le_id, le_non_fich, le_url, la_descrip, la_date_eng


	
}	






ClasseListViewDictionnaire.prototype.XMLHttpReqDict = function(le_url) {
     
	alert('ddXMLHttpDictionnaire le_url: '+le_url);
 	try {
     
 		 var resourcePath = le_url;
         var request = new XMLHttpRequest();
		
         request.open("GET", resourcePath, true);
		 
         request.onreadystatechange = function() {
             if (request.readyState == 4) {
                 if (request.status == 200 || request.status == 0) {
 					str_output = request.responseText;
					get_Dictionnaire_callback(str_output);              
                 }
             }
         }
		 
         request.send();
      } catch (e) {
         //errorEvent(e);
     }
 }








 function get_Dictionnaire_callback(le_str_output) 
 { 
	 alert(le_str_output);
	 alert('le_str_output.length ' + le_str_output.length);
	 
	 localString = JSON.parse(le_str_output);
	
	 alert('localString.result.length ' + localString.result.length);
	 alert('id ' + localString['id']);
	 alert('jsonrpc ' + localString['jsonrpc']);
	 alert('total ' + localString['total']);
	 alert('result ' + localString['result']);	
	
	
	 for(var i=0;i<localString.result.length;i++){
		 var obj = localString.result[i];
		 
	 }
		
 	    /*
		alert(localString.result[i].id +' '+localString.result[i].espece);
 		alert(localString.result[i].id);
 		alert(localString.result[i].espece);
 		alert(localString.result[i].description);
 		alert(localString.result[i].IDPhoto);
  		*/
	
 }
