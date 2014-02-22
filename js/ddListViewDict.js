//Section pour l'affichage et le téléchargement du dictionnaire


function ClasseListViewDictionnaire(myName) {
//	alert(myName);
//	this.myListViewDictName = myName;
//	this.myListViewDictArray = [];
}



ClasseListViewDictionnaire.prototype.XMLHttpReqDict = function(le_url) {
     
//	alert('ddXMLHttpDictionnaire le_url: '+le_url);
 	try {
     
 		 var resourcePath = le_url;
         var request = new XMLHttpRequest();
		
         request.open("GET", resourcePath, true);
		 
         request.onreadystatechange = function() {
             if (request.readyState == 4) {
                 if (request.status == 200 || request.status == 0) {
 					str_output = request.responseText;
					file2obj(str_output);              
                 }
             }
         }
		 
         request.send();
      } catch (e) {
         //errorEvent(e);
     }
 }





 function file2obj(le_str_output) 
 { 
//	 alert(le_str_output);
//	 alert('le_str_output.length ' + le_str_output.length);
	 
	 localString = JSON.parse(le_str_output);
	
//	 alert('localString.result.length ' + localString.result.length);
//	 alert('id ' + localString['id']);
//	 alert('jsonrpc ' + localString['jsonrpc']);
//	 alert('total ' + localString['total']);
//	 alert('result ' + localString['result']);	
	
	
	 for(var i=0;i<localString.result.length;i++){
		 var obj = localString.result[i];
		
		obj2cell(localString.result[i].id,localString.result[i].espece,localString.result[i].description,localString.result[i].IDPhoto)
		 
	 }
		
 	    /*
		alert(localString.result[i].id +' '+localString.result[i].espece);
 		alert(localString.result[i].id);
 		alert(localString.result[i].espece);
 		alert(localString.result[i].description);
 		alert(localString.result[i].IDPhoto);
  		*/
	
 }
 
 
 
 
 

 function obj2cell(le_id, l_espece,  la_descrip, le_IDPhoto) {
	
		
 	var newDiv1 = document.createElement("div");
 	newDiv1.setAttribute("class", "la_liste1");
 	newDiv1.setAttribute("align", "left");
	
 	newDiv1.id="id_div_liste_fichiers1";	
	
 	//newDiv1.addEventListener('click', test55, false)
 	//newDiv1.addEventListener('click',function(){affichePageXXXXX(le_id, le_non_fich, le_url, la_descrip, la_date_eng)},false);


 	var newImg2 = document.createElement("img");
 	newImg2.setAttribute("src", "img/musical_note.png");
	newImg2.setAttribute("class", "speaker_img");


 	var newImg1 = document.createElement("img");
 	newImg1.setAttribute("src", "birds/"+le_IDPhoto+".jpg");
	newImg1.setAttribute("class", "bird_img");
	
	var newP2 = document.createElement("p");
 	var newP2Content = document.createTextNode(l_espece);
 	newP2.setAttribute("class", "bird_espece");
    newP2.appendChild(newP2Content);
	
 	var newP1 = document.createElement("p");
	var newP1Content = document.createTextNode(la_descrip);
 	newP1.setAttribute("class", "bird_descript");
 	newP1.appendChild(newP1Content);	


	newDiv1.appendChild(newImg2);
	newDiv1.appendChild(newImg1);
	newDiv1.appendChild(newP2);	
	newDiv1.appendChild(newP1);	
	
	
				
 	my_mainDiv = document.getElementById("main");  
 	my_mainDiv.appendChild(newDiv1);
	
	
		
 }

 
 

